# Ghid Montan

Aplicație React + TypeScript pentru descoperirea traseelor din Carpații Românești. Interfața este în limba română, responsive și include modul demonstrativ de recomandări conversaționale.

## Rulare locală

```bash
npm install
npm run dev
```

Aplicația frontend pornește pe portul Vite, iar API-ul local pe `3001`. Build-ul de producție se verifică prin:

```bash
npm run build
```

## Pagini

- `/` — prezentare, trasee recomandate și pașii de alegere
- `/trasee` — căutare, filtre și sortare
- `/trasee/:slug` — galerie, date tehnice, echipament, avertismente și video
- `/recomandari` — formular de recomandare în pași
- `/asistent` — asistent demonstrativ bazat pe datele locale
- `/despre` — motivația proiectului și formular de contact

## Configurare opțională

Variabilele din `.env.example` permit activarea Azure OpenAI și SMTP pe server. Fără ele, asistentul rămâne în modul demonstrativ, iar formularul afișează transparent mesajul de configurare necesar.

`VITE_GA_MEASUREMENT_ID` este opțional. Când este setat, bannerul cere consimțământul înainte de a încărca Google Analytics 4. Nu există un identificator implicit în proiect.

Datele traseelor sunt demonstrative/orientative; înainte de o drumeție trebuie verificate sursele oficiale, prognoza, marcajele și condițiile locale.
