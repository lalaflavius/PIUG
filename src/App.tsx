import { Link, Route, Routes } from 'react-router-dom';
import Assistant from './Assistant';
import ContactPage from './ContactPage';
import { mountainTrails } from './data';

function HomePage() {
  return (
    <>
      <section className="card">
        <h2>Trasee recomandate</h2>
        <ul className="trail-list">
          {mountainTrails.map((trail) => (
            <li key={trail.id}>
              <h3>{trail.name}</h3>
              <p>
                <strong>{trail.mountainRange}</strong> · dificultate {trail.difficulty} · aproximativ{' '}
                {trail.durationHours}h
              </p>
              <p>{trail.summary}</p>
              <small>ID traseu: {trail.id}</small>
            </li>
          ))}
        </ul>
      </section>
      <Assistant />
    </>
  );
}

export default function App() {
  return (
    <div className="layout">
      <header>
        <h1>Ghid Montan</h1>
        <p>Alege-ți următoarea potecă în Carpații Românești.</p>
        <nav>
          <Link to="/">Acasă</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </div>
  );
}
