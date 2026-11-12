export type Trail = {
  id: string;
  name: string;
  mountainRange: string;
  difficulty: 'ușor' | 'mediu' | 'dificil';
  durationHours: number;
  summary: string;
};

export const mountainTrails: Trail[] = [
  {
    id: 'bucegi-babele-omu',
    name: 'Babele — Vârful Omu',
    mountainRange: 'Bucegi',
    difficulty: 'mediu',
    durationHours: 4,
    summary: 'Traseu alpin panoramic, potrivit pentru drumeți cu experiență minimă pe teren stâncos.',
  },
  {
    id: 'fagaras-balea-lac-capra',
    name: 'Bâlea Lac — Șaua Capra',
    mountainRange: 'Făgăraș',
    difficulty: 'ușor',
    durationHours: 2,
    summary: 'Traseu scurt, ideal pentru acomodare la altitudine în sezonul de vară.',
  },
  {
    id: 'pietra-craiului-zarnesti-curmatura',
    name: 'Zărnești — Cabana Curmătura',
    mountainRange: 'Piatra Craiului',
    difficulty: 'mediu',
    durationHours: 5,
    summary: 'Urcare clasică prin pădure, cu diferență de nivel constantă și puncte de belvedere.',
  },
];
