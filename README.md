# Ghid Montan

Aplicație pentru descoperirea traseelor din Carpații Românești, cu asistent conversațional Azure OpenAI și formular de contact cu trimitere prin SMTP.

## Rulare locală

1. Instalează Node.js 22 sau mai nou.
2. Rulează `npm install`.
3. Copiază `.env.example` în `.env` și completează setările necesare. Nu pune chei în variabile `VITE_*`.
4. Rulează `npm run dev`; Vite servește interfața, iar API-ul local rulează pe portul 3001.
5. Pentru build-ul frontend: `npm run build`. Backend-ul pornește separat cu `npm run start:api` când este publicat/servit în producție.

## Asistent Azure OpenAI

Configurează pe server `AZURE_OPENAI_ENDPOINT`, `AZURE_OPENAI_MODEL` (numele deployment-ului Azure) și `AZURE_OPENAI_API_KEY`. Endpoint-ul folosește ruta Azure OpenAI v1 Chat Completions. Nu încorpora cheia în client, în istoricul Git sau în capturi de ecran. Dacă o cheie a fost publicată într-un chat ori alt canal, revoc-o și emite una nouă.

Asistentul primește datele curente din `src/data.ts` și context recuperat din `server/mountain-knowledge.json`. Înregistrările locale nu sunt o enciclopedie completă și nu furnizează vreme sau starea traseelor în timp real. Răspunsurile includ ID-uri verificate contra traseelor existente.

## Formular de contact

Pagina `/contact` trimite cererile prin endpoint-ul server către `CONTACT_TO_EMAIL`. Completează `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_FROM_EMAIL` și `CONTACT_TO_EMAIL`. Fără aceste setări, serverul returnează o eroare clară și nu pretinde că mesajul a fost trimis.

## Alte setări

- `VITE_GA_MEASUREMENT_ID` este opțional; Analytics rămâne condiționat de consimțământul utilizatorului.
- `API_PORT` schimbă portul backendului (implicit 3001).

## Fișiere relevante

- `src/App.tsx` — navigație, layout și rute.
- `src/Assistant.tsx` — interfața conversației.
- `src/ContactPage.tsx` — formularul de contact.
- `src/data.ts` — baza locală de trasee.
- `server/index.mjs` — endpoint-urile AI și email.
- `server/mountain-knowledge.json` — baza locală de cunoștințe.
- `src/styles.css` — design și layout responsive.

Valorile tehnice ale traseelor sunt demonstrative/orientative și trebuie verificate cu surse oficiale înainte de folosirea în teren. Capturile pentru documentația universitară trebuie realizate după rularea efectivă a site-ului.
