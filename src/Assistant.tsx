import { FormEvent, useState } from 'react';
import { ArrowRight, Bot, LoaderCircle, Send, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { mountainTrails, normalize } from './data';

type Message = { role: 'user' | 'assistant'; text: string; trails?: typeof mountainTrails };

const starters = ['Sunt începător și am 4 ore.', 'Vreau panorame, fără porțiuni expuse.', 'Ce traseu are un lac glaciar?'];

function answerFor(message: string) {
  const text = normalize(message);
  const experience = text.includes('incep') ? 'începător' : text.includes('avans') ? 'avansat' : text.includes('intermed') ? 'intermediar' : '';
  const hours = text.match(/(\d+)\s*ore?/); const max = hours ? Number(hours[1]) : 99;
  const landscape = ['panorame', 'lacuri glaciare', 'creste', 'paduri', 'cascade', 'varfuri'].find((item) => text.includes(normalize(item)));
  const matches = mountainTrails.filter((t) => (!experience || t.experience === experience) && t.durationHours <= max && (!landscape || t.landscape.some((l) => normalize(l).includes(normalize(landscape)))));
  const trails = (matches.length ? matches : mountainTrails.filter((t) => (!experience || t.experience === experience))).slice(0, 3);
  const intro = matches.length ? `Am găsit ${matches.length} ${matches.length === 1 ? 'traseu' : 'trasee'} potrivit(e) în baza locală. ` : 'Nu am găsit o potrivire perfectă pentru toate criteriile, dar acestea sunt cele mai apropiate opțiuni. ';
  return { text: `${intro}Am luat în calcul ${experience || 'preferința generală'}${hours ? ` și maximum ${hours[1]} ore` : ''}. Verifică întotdeauna vremea, marcajele și accesul înainte de plecare.`, trails };
}

export default function Assistant() {
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: 'Salut! Spune-mi ce fel de drumeție îți dorești. Pot căuta în baza locală după nivel, durată și tip de peisaj.' }]);
  const [input, setInput] = useState(''); const [loading, setLoading] = useState(false);
  const submit = (event?: FormEvent) => { event?.preventDefault(); if (!input.trim() || loading) return; const value = input.trim(); setInput(''); setMessages((m) => [...m, { role: 'user', text: value }]); setLoading(true); window.setTimeout(() => { const result = answerFor(value); setMessages((m) => [...m, { role: 'assistant', ...result }]); setLoading(false); }, 500); };
  return <section className="assistant-box"><div className="assistant-header"><span className="assistant-icon"><Bot size={21} /></span><div><strong>Asistentul Ghid Montan</strong><small><span className="status-dot" /> mod demonstrativ activ</small></div></div><div className="conversation" aria-live="polite">{messages.map((message, i) => <div className={`message-row ${message.role}`} key={`${message.text}-${i}`}><span className="message-avatar">{message.role === 'assistant' ? <Bot size={15} /> : <User size={15} />}</span><div className="message-content"><p>{message.text}</p>{message.trails && <div className="assistant-trails">{message.trails.map((trail) => <Link to={`/trasee/${trail.slug}`} className="assistant-trail" key={trail.id}><div><strong>{trail.name}</strong><small>{trail.mountainRange} · {trail.durationLabel} · {trail.difficulty}</small></div><ArrowRight size={15} /></Link>)}</div>}</div></div>)}{loading && <div className="message-row assistant"><span className="message-avatar"><Bot size={15} /></span><div className="typing"><LoaderCircle size={16} className="spin" /> Caut în trasee...</div></div>}</div><div className="starter-chips">{starters.map((starter) => <button key={starter} onClick={() => setInput(starter)}>{starter}</button>)}</div><form className="assistant-input" onSubmit={submit}><input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Scrie ce fel de drumeție cauți..." aria-label="Mesaj pentru asistent" /><button type="submit" aria-label="Trimite mesaj"><Send size={17} /></button></form></section>;
}
