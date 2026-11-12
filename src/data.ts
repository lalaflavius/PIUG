export type Difficulty = 'ușor' | 'mediu' | 'dificil';
export type Experience = 'începător' | 'intermediar' | 'avansat';

export type Trail = {
  id: string;
  slug: string;
  name: string;
  mountainRange: string;
  difficulty: Difficulty;
  experience: Experience;
  durationHours: number;
  durationLabel: string;
  distanceKm: number;
  elevationGain: number;
  maxAltitude: number;
  routeType: 'dus-întors' | 'circuit';
  start: string;
  landscape: string[];
  summary: string;
  description: string;
  pointsOfInterest: string[];
  equipment: string[];
  warnings: string[];
  images: string[];
  video?: string;
};

const image = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=85`;

export const mountainTrails: Trail[] = [
  {
    id: 'babele-omu', slug: 'babele-varful-omu', name: 'Babele — Vârful Omu', mountainRange: 'Bucegi',
    difficulty: 'mediu', experience: 'intermediar', durationHours: 6, durationLabel: '5–6 ore',
    distanceKm: 14, elevationGain: 620, maxAltitude: 2505, routeType: 'dus-întors',
    start: 'Cabana Piatra Arsă', landscape: ['panorame', 'vârfuri', 'creste'],
    summary: 'Un traseu alpin clasic, cu panorame ample asupra Bucegilor și platoului.',
    description: 'Poteca traversează platoul Bucegilor și formațiunile Babele înainte de urcarea finală spre Vârful Omu. Este o tură lungă, dar logică și foarte fotogenică.',
    pointsOfInterest: ['Babele', 'Sfinxul', 'Vârful Omu', 'Valea Mălăiești'],
    equipment: ['bocanci cu talpă aderentă', 'geacă impermeabilă', 'minimum 2 l apă', 'protecție solară'],
    warnings: ['Vremea se poate schimba rapid pe platou.', 'Porțiunile stâncoase pot fi alunecoase.'],
    images: [image('photo-1464822759023-fed622ff2c3b'), image('photo-1500534623283-312aade485b7'), image('photo-1464278533981-50106e6176b1')],
    video: 'https://www.youtube.com/embed/4p4wZxR5j6A',
  },
  {
    id: 'curmatura', slug: 'zarnesti-cabana-curmatura', name: 'Zărnești — Cabana Curmătura', mountainRange: 'Piatra Craiului',
    difficulty: 'ușor', experience: 'începător', durationHours: 4, durationLabel: '3–4 ore',
    distanceKm: 10, elevationGain: 560, maxAltitude: 1470, routeType: 'dus-întors',
    start: 'Fântâna lui Botorog', landscape: ['păduri', 'panorame'],
    summary: 'O introducere excelentă în drumețiile carpatine, prin pădure și poieni.',
    description: 'Traseul urcă susținut, dar fără pasaje tehnice, până la una dintre cele mai iubite cabane din România. Din poiana cabanei se deschid priveliști către creasta Pietrei Craiului.',
    pointsOfInterest: ['Prăpăstiile Zărneștilor', 'Poiana Curmătura', 'Cabana Curmătura'],
    equipment: ['încălțăminte cu profil aderent', 'hanorac', 'apă și gustare'],
    warnings: ['Respectă marcajul și nu hrăni animalele sălbatice.'],
    images: [image('photo-1448375240586-882707db888b'), image('photo-1511497584788-876760111969'), image('photo-1500530855697-b586d89ba3ee')],
    video: 'https://www.youtube.com/embed/7d3fKpK1p8Q',
  },
  {
    id: 'balea-capra', slug: 'balea-lac-saua-capra', name: 'Bâlea Lac — Șaua Capra', mountainRange: 'Făgăraș',
    difficulty: 'ușor', experience: 'începător', durationHours: 2, durationLabel: '1,5–2 ore',
    distanceKm: 4.5, elevationGain: 250, maxAltitude: 2315, routeType: 'dus-întors',
    start: 'Bâlea Lac', landscape: ['lacuri glaciare', 'panorame'],
    summary: 'Traseu scurt la altitudine, către un punct de belvedere spectaculos.',
    description: 'De la Bâlea Lac urmezi marcajul spre Șaua Capra. Diferența de nivel este moderată, însă altitudinea și vremea pot face traseul mai solicitant decât pare.',
    pointsOfInterest: ['Bâlea Lac', 'Lacul Capra', 'Șaua Capra'],
    equipment: ['bocanci', 'polar', 'geacă de vânt', 'ochelari de soare'],
    warnings: ['Nu porni pe zăpadă fără echipament și experiență adecvată.'],
    images: [image('photo-1500534623283-312aade485b7'), image('photo-1464278533981-50106e6176b1'), image('photo-1500530855697-b586d89ba3ee')],
  },
  {
    id: 'pestera-padina', slug: 'pestera-padina-bolboci', name: 'Peștera — Lacul Bolboci', mountainRange: 'Bucegi',
    difficulty: 'ușor', experience: 'începător', durationHours: 4, durationLabel: '3–4 ore',
    distanceKm: 11, elevationGain: 280, maxAltitude: 1610, routeType: 'circuit', start: 'Complex Peștera',
    landscape: ['lacuri', 'păduri'], summary: 'Circuit relaxat prin platoul Padina, cu lac și chei spectaculoase.',
    description: 'Un circuit potrivit pentru o zi lejeră, care combină drumuri forestiere, poteci umbrite și malul lacului Bolboci.',
    pointsOfInterest: ['Lacul Bolboci', 'Cheile Tătarului', 'Peștera Ialomiței'],
    equipment: ['încălțăminte comodă', 'apă', 'jachetă subțire'], warnings: ['Unele sectoare pot fi noroioase după ploaie.'],
    images: [image('photo-1501854140801-50d01698950b'), image('photo-1441974231531-c6227db76b6e'), image('photo-1511497584788-876760111969')],
  },
  {
    id: 'paltinis-cindrel', slug: 'paltinis-varful-cindrel', name: 'Păltiniș — Vârful Cindrel', mountainRange: 'Cindrel',
    difficulty: 'dificil', experience: 'avansat', durationHours: 8, durationLabel: '7–8 ore',
    distanceKm: 20, elevationGain: 900, maxAltitude: 2244, routeType: 'dus-întors', start: 'Păltiniș',
    landscape: ['creste', 'panorame'], summary: 'Tură de anduranță pe creastă, pentru drumeți bine pregătiți.',
    description: 'Traseul spre Cindrel este lung și solicitant, cu zone expuse la vânt și puține puncte de adăpost. Efortul este răsplătit de priveliștile către munții din sudul Transilvaniei.',
    pointsOfInterest: ['Șaua Șteflești', 'Vârful Cindrel', 'Iezerul Cindrel'], equipment: ['bocanci rigizi', 'echipament de ploaie', 'frontala', 'trusă de prim ajutor'],
    warnings: ['Lungimea și orientarea cer experiență și planificare atentă.', 'Nu există surse sigure de apă pe tot parcursul.'],
    images: [image('photo-1464822759023-fed622ff2c3b'), image('photo-1464278533981-50106e6176b1'), image('photo-1500534623283-312aade485b7')],
  },
  {
    id: 'seven-ladders', slug: 'canionul-sapte-scari', name: 'Canionul Șapte Scări', mountainRange: 'Piatra Mare',
    difficulty: 'mediu', experience: 'intermediar', durationHours: 4, durationLabel: '3–4 ore', distanceKm: 8,
    elevationGain: 500, maxAltitude: 1600, routeType: 'dus-întors', start: 'Dâmbul Morii', landscape: ['cascade', 'păduri'],
    summary: 'Canion spectaculos cu cascade și scări metalice, aproape de Brașov.',
    description: 'Poteca prin pădure ajunge la canionul îngust, unde cascadele sunt traversate pe scări metalice. Segmentul poate fi ocolit dacă este închis sau ud.',
    pointsOfInterest: ['Canionul Șapte Scări', 'Cascada Tamina'], equipment: ['încălțăminte antiderapantă', 'geacă impermeabilă'],
    warnings: ['Verifică accesul în canion înainte de plecare; metalul devine alunecos când este ud.'],
    images: [image('photo-1433086966358-54859d0ed716'), image('photo-1441974231531-c6227db76b6e'), image('photo-1473448912268-2022ce9509d8')],
  },
  {
    id: 'lacul-ursu', slug: 'lacul-ursu-sovata', name: 'Circuitul Lacul Ursu', mountainRange: 'Gurghiu',
    difficulty: 'ușor', experience: 'începător', durationHours: 2, durationLabel: '1–2 ore', distanceKm: 5,
    elevationGain: 150, maxAltitude: 610, routeType: 'circuit', start: 'Sovata', landscape: ['lacuri', 'păduri'],
    summary: 'Plimbare ușoară prin pădure, potrivită pentru familii și începători.',
    description: 'Circuitul amenajat în jurul lacurilor din Sovata oferă o experiență relaxată, cu informații despre geologia și vegetația zonei.',
    pointsOfInterest: ['Lacul Ursu', 'Lacul Aluniș', 'Belvedere Sovata'], equipment: ['încălțăminte sport', 'apă'], warnings: ['Respectă programul și regulile rezervației.'],
    images: [image('photo-1473448912268-2022ce9509d8'), image('photo-1441974231531-c6227db76b6e'), image('photo-1501854140801-50d01698950b')],
  },
  {
    id: 'toaca', slug: 'izvorul-muntelui-varful-toaca', name: 'Izvorul Muntelui — Vârful Toaca', mountainRange: 'Ceahlău',
    difficulty: 'mediu', experience: 'intermediar', durationHours: 6, durationLabel: '5–6 ore', distanceKm: 13,
    elevationGain: 950, maxAltitude: 1904, routeType: 'dus-întors', start: 'Cabana Izvorul Muntelui', landscape: ['panorame', 'vârfuri'],
    summary: 'Urcare susținută spre unul dintre cele mai cunoscute vârfuri din Moldova.',
    description: 'Traseul urcă prin pădure până la platoul înalt al Ceahlăului și continuă spre vârful Toaca, cu trepte amenajate pe ultima porțiune.',
    pointsOfInterest: ['Stânca Dochiei', 'Vârful Toaca', 'Cabana Dochia'], equipment: ['bocanci', 'bețe trekking', 'apă suficientă'], warnings: ['Diferența de nivel este mare pentru durata traseului.'],
    images: [image('photo-1464822759023-fed622ff2c3b'), image('photo-1500530855697-b586d89ba3ee'), image('photo-1500534623283-312aade485b7')],
  },
  {
    id: 'roditnei', slug: 'borsa-pietrosul-rodnei', name: 'Borșa — Vârful Pietrosul Rodnei', mountainRange: 'Munții Rodnei',
    difficulty: 'dificil', experience: 'avansat', durationHours: 9, durationLabel: '8–9 ore', distanceKm: 18,
    elevationGain: 1200, maxAltitude: 2303, routeType: 'dus-întors', start: 'Complexul Turistic Borșa', landscape: ['lacuri glaciare', 'creste', 'vârfuri'],
    summary: 'Ascensiune alpină amplă către cel mai înalt vârf al Carpaților Orientali.',
    description: 'Tură solicitantă, cu diferență mare de nivel și porțiuni de creastă. Recomandată doar drumeților obișnuiți cu efortul prelungit și orientarea montană.',
    pointsOfInterest: ['Lacul Iezer', 'Vârful Pietrosul', 'Rezervația Pietrosul Rodnei'], equipment: ['bocanci de munte', 'frontala', 'hartă offline', 'straturi termice'], warnings: ['Expunere la vânt și lipsa adăpostului pe creastă.', 'Verifică prognoza înainte de plecare.'],
    images: [image('photo-1464822759023-fed622ff2c3b'), image('photo-1464278533981-50106e6176b1'), image('photo-1500530855697-b586d89ba3ee')],
  },
  {
    id: 'ranca-parang', slug: 'ranca-parangul-mic', name: 'Rânca — Parângul Mic', mountainRange: 'Parâng',
    difficulty: 'mediu', experience: 'intermediar', durationHours: 5, durationLabel: '4–5 ore', distanceKm: 10,
    elevationGain: 650, maxAltitude: 2074, routeType: 'dus-întors', start: 'Rânca', landscape: ['creste', 'panorame'],
    summary: 'Traseu de creastă accesibil, cu orizonturi largi și aer de munte.',
    description: 'Din stațiunea Rânca, traseul urmărește culmea spre Parângul Mic. Este o alegere bună pentru cei care vor să guste mersul pe creastă fără o tură extrem de lungă.',
    pointsOfInterest: ['Vârful Păpușa', 'Parângul Mic', 'Culmea principală'], equipment: ['bocanci', 'geacă de vânt', 'ochelari de soare'], warnings: ['Orientarea poate deveni dificilă în ceață.'],
    images: [image('photo-1500534623283-312aade485b7'), image('photo-1464822759023-fed622ff2c3b'), image('photo-1500530855697-b586d89ba3ee')],
  },
];

export const difficultyOrder: Record<Difficulty, number> = { ușor: 1, mediu: 2, dificil: 3 };
export const normalize = (value: string) => value.toLocaleLowerCase('ro').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
