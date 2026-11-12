import 'dotenv/config';
import express from 'express';
import nodemailer from 'nodemailer';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = Number(process.env.API_PORT || 3001);

app.use(express.json());

async function loadKnowledge() {
  try {
    const content = await readFile(join(__dirname, 'mountain-knowledge.json'), 'utf-8');
    return JSON.parse(content);
  } catch {
    return [];
  }
}

function getMissingEnv(keys) {
  return keys.filter((key) => !process.env[key]);
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/assistant', async (req, res) => {
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';
  if (!message) {
    return res.status(400).json({ error: 'Mesajul este obligatoriu.' });
  }

  const knowledge = await loadKnowledge();
  const missing = getMissingEnv(['AZURE_OPENAI_ENDPOINT', 'AZURE_OPENAI_MODEL', 'AZURE_OPENAI_API_KEY']);

  if (missing.length > 0) {
    return res.json({
      reply:
        'Asistentul Azure OpenAI nu este configurat complet. Completează variabilele de mediu pe server. ' +
        `Între timp, recomandare generală: planifică traseul după nivel și verifică marcajele. Context local disponibil: ${knowledge.length} intrări.`,
    });
  }

  try {
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT.replace(/\/$/, '');
    const apiVersion = '2024-08-01-preview';
    const response = await fetch(`${endpoint}/openai/deployments/${process.env.AZURE_OPENAI_MODEL}/chat/completions?api-version=${apiVersion}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.AZURE_OPENAI_API_KEY,
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content:
              'Ești un asistent de drumeție pentru Carpații Românești. Oferă recomandări prudente, fără a inventa starea în timp real a traseelor.',
          },
          { role: 'user', content: message },
        ],
        temperature: 0.4,
      }),
    });

    const payload = await response.json();
    const answer = payload?.choices?.[0]?.message?.content;

    if (!response.ok || typeof answer !== 'string') {
      return res.status(502).json({ error: 'Serviciul AI nu a returnat un răspuns valid.' });
    }

    return res.json({ reply: answer });
  } catch {
    return res.status(500).json({ error: 'Eroare internă la apelul asistentului.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : '';
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : '';

  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'Completează toate câmpurile formularului.' });
  }

  const missing = getMissingEnv([
    'SMTP_HOST',
    'SMTP_PORT',
    'SMTP_SECURE',
    'SMTP_USER',
    'SMTP_PASS',
    'CONTACT_FROM_EMAIL',
    'CONTACT_TO_EMAIL',
  ]);

  if (missing.length > 0) {
    return res.status(503).json({
      ok: false,
      error: `Emailul nu poate fi trimis deoarece lipsesc setări SMTP (${missing.join(', ')}).`,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: String(process.env.SMTP_SECURE).toLowerCase() === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `Mesaj nou de la ${name}`,
      text: message,
    });

    return res.json({ ok: true });
  } catch {
    return res.status(500).json({ ok: false, error: 'Trimiterea emailului a eșuat.' });
  }
});

app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
