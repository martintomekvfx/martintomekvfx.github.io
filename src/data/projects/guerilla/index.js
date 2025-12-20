// Guerilla Projects Index
// Import all guerilla projects from individual files

import slunecnice from './slunecnice.js';
import houpacka from './houpacka.js';
import streetArtGallery from './street-art-gallery.js';
import chompar from './chompar.js';
import panak from './panak.js';
import lavicka from './lavicka.js';

// Planned projects (kept inline for now)
const parklety = {
    id: 'parklety',
    title: 'Parklety',
    subtitle: 'Tactical Urbanism',
    category: 'guerilla',
    description: 'Dočasná přeměna parkovacích míst na prostor pro setkávání — komunitní mikronáměstí před Komerční bankou.',
    artist: 'Martin Tomek, Tomáš Koníček',
    status: 'planned',
    year: '2026',
    location: 'Před pobočkou KB, Palmovka',
    details: ['Dřevěné palety', 'Komunitní náměstí', 'Reversibilní', 'Antropologický výzkum'],
    fullDescription: `PARKLETY — Komunitní mikronáměstí

Reagujeme na antropologický výzkum: Před Komerční bankou je nevyužitý prostor. Asfaltový.

Na jeden den "obsadíme" pár parkovacích míst a vybavíme je dočasným mobiliářem:
• Paletové lavičky
• Stoly
• Květináče s rostlinami
• Deštníky pro stín

Cílem je na vlastní oči vidět, jak lidé reagují, když najednou mají možnost se v místě zastavit.

Palmovce chybí příjemný veřejný prostor k posezení a setkávání.`,
    materials: ['EURO palety', 'Venkovní koberec', 'Stolek', 'Polštáře', 'Květináče'],
    budget: '~3500 Kč',
    timeline: 'Léto 2026',
    image: '/projects/parklety.jpg',
    images: [],
    thumbs: [],
};

const solarniSvetla = {
    id: 'solarni-svetla',
    title: 'Guerilla Světla',
    subtitle: 'Kritika konzumu',
    category: 'guerilla',
    description: 'Instalace recyklovaných LED světel na tmavá místa — kritika jednorázových powerbanek.',
    artist: 'Ptáček',
    status: 'planned',
    year: '2026',
    location: 'Podchody, schody metra, Palmovka',
    details: ['Recyklace Li-ion baterií', 'Bezpečnost', 'Kritika konzumu', 'Solární panel'],
    fullDescription: `GUERILLA SVĚTLA

Projekt reaguje na dvě věci:

1. TMAVÁ MÍSTA:
Podle antropologické zprávy jsou na Palmovce vchody do metra které jsou málo osvětlené. A most u Palmovky.

Tam všude by se dalo nainstalovat dočasné guerilla světlo, které by ukazovalo na to že tam toho světla není dost.

Dá se doplnit nápisem či QR kódem který vysvětlí projekt kolemjdoucím.

2. KRITIKA KONZUMU:
Z lithiových baterií, které se dají extrahovat z jednorázových powerbanek, se dá vytvořit nabíjecí powerbanka.

Nikotinové korporace využívají rechargeable baterky na jedno použití. To není ekologické. Je tam lithium!

Tohle není správný mindset. Nejhorší je že si to lidi neuvědomují.`,
    materials: ['Recyklované Li-ion baterie', 'LED diody', 'Solární panely', 'Vodotěsná krabička'],
    budget: '~750 Kč',
    timeline: 'Zima 2025 → Jaro 2026',
    image: '/projects/solarni-svetla.jpg',
    images: [],
    thumbs: [],
};

const hlasovaciPopelniky = {
    id: 'hlasovaci-popelniky',
    title: 'Hlasovací popelníky',
    subtitle: 'Gamifikace čistoty',
    category: 'guerilla',
    description: 'Experiment s veřejným zapojením skrze herní mechanismus — hlasování nedopalky.',
    artist: 'Martin Tomek, Tomáš Koníček',
    status: 'planned',
    year: '2026',
    location: 'Palmovka, Praha',
    details: ['Gamifikace', 'Čistší prostor', 'Data collection', 'Komunitní dialog'],
    fullDescription: `HLASOVACÍ POPELNÍKY

Zajímavý experiment: Koš na vajgly.

Vajgl kolikrát lidi nevnímají ani jako odpadek a mají to přirozené. Obzvlášť starší generace.

KONCEPT:
Popelník rozdělený na dvě přihrádky s otázkou, na kterou kuřák "hlasuje" tím, že vhodí nedopalek do jedné či druhé části.

Příklad: "Je lepší káva, nebo čaj?"

Tento hravý prvek motivuje kuřáky dávat nedopalek do popelníku, ne na zem, a zároveň je to anketa.

VÝZKUM:
Vzít frekventované místo a vyčistit od vajglů. Udělat to i na druhém místě — na to bychom dali ten hlasovací popelník.

Zajímalo by mě kolik vajglů bychom našli u té u které se dá hlasovat.

Podle mě by to dost pomohlo.`,
    materials: ['Dřevo/kov', 'Průhledný plexisklo', 'Popisky s otázkami'],
    budget: '~1500 Kč',
    timeline: 'Zima 2025 → Jaro 2026',
    image: '/projects/hlasovaci-popelnik/design_thumb.jpg',
    images: ['/projects/hlasovaci-popelnik/design.jpeg'],
    thumbs: ['/projects/hlasovaci-popelnik/design_thumb.jpg'],
};

export const guerillaProjects = [
    slunecnice,
    houpacka,
    panak,
    lavicka,
    streetArtGallery,
    chompar,
    parklety,
    solarniSvetla,
    hlasovaciPopelniky,
];
