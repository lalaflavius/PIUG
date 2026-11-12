import { FormEvent, useState } from 'react';

type AssistantReply = {
  reply: string;
};

export default function Assistant() {
  const [message, setMessage] = useState('');
  const [reply, setReply] = useState('Pune o întrebare despre trasee, echipament sau planificare.');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim() || isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message.trim() }),
      });

      const data = (await response.json()) as AssistantReply & { error?: string };
      if (!response.ok) {
        throw new Error(data.error || 'Asistentul nu a putut răspunde momentan.');
      }

      setReply(data.reply);
    } catch (error) {
      setReply(error instanceof Error ? error.message : 'A apărut o eroare neașteptată.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="card">
      <h2>Asistent montan</h2>
      <form onSubmit={onSubmit} className="stack">
        <label htmlFor="assistant-message">Întrebare</label>
        <textarea
          id="assistant-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={4}
          placeholder="Ex: Ce traseu mediu recomanzi pentru o tură de o zi?"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Se generează...' : 'Trimite'}
        </button>
      </form>
      <p className="assistant-reply" aria-live="polite">
        {reply}
      </p>
    </section>
  );
}
