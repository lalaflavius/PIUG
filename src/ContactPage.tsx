import { FormEvent, useState } from 'react';

type ContactResponse = {
  ok: boolean;
  error?: string;
};

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isSending, setIsSending] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) {
      return;
    }

    setIsSending(true);
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = (await response.json()) as ContactResponse;
      if (!response.ok || !data.ok) {
        throw new Error(data.error || 'Mesajul nu a putut fi trimis.');
      }

      setFeedback('Mesaj trimis cu succes.');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setFeedback(error instanceof Error ? error.message : 'A apărut o eroare neașteptată.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="card">
      <h2>Contact</h2>
      <form onSubmit={submit} className="stack">
        <label htmlFor="name">Nume</label>
        <input id="name" value={name} onChange={(event) => setName(event.target.value)} required />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="message">Mesaj</label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <button type="submit" disabled={isSending}>
          {isSending ? 'Se trimite...' : 'Trimite mesajul'}
        </button>
      </form>

      {feedback && (
        <p className="feedback" aria-live="polite">
          {feedback}
        </p>
      )}
    </section>
  );
}
