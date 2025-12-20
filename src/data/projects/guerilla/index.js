// Guerilla Projects Index
// Import all guerilla projects from individual files

import slunecnice from './slunecnice.js';
import houpacka from './houpacka.js';
import streetArtGallery from './street-art-gallery.js';
import chompar from './chompar.js';

// Planned projects (kept inline for now)
const parklety = {
    id: 'parklety',
    title: 'Parklety',
    subtitle: 'Tactical Urbanism',
    category: 'guerilla',
    description: 'Dočasná přeměna parkovacích míst na prostor pro setkávání.',
    artist: 'Martin Tomek, Tomáš Koníček',
    status: 'planned',
    year: '2026',
    location: 'Před pobočkou KB, Palmovka',
    details: ['Dřevěné palety', 'Komunitní náměstí', 'Reversibilní'],
    fullDescription: `Parklet a komunitní mikronáměstí`,
    materials: ['EURO palety', 'Venkovní koberec', 'Stolek', 'Polštáře'],
    budget: '~3500 Kč',
    timeline: 'Léto 2026',
    image: '/projects/parklety.jpg',
    images: [],
    thumbs: [],
};

const solarniSvetla = {
    id: 'solarni-svetla',
    title: 'Dočasná solární světla',
    subtitle: 'Tactical Urbanism',
    category: 'guerilla',
    description: 'Instalace recyklovaných LED světel na tmavá místa.',
    artist: 'Ptáček',
    status: 'planned',
    year: '2026',
    location: 'Podchody, schody metra, Palmovka',
    details: ['Recyklace baterií', 'Bezpečnost', 'Ekologický aktivismus'],
    fullDescription: `Instalace dočasných pouličních světel na tmavá místa.`,
    materials: ['Recyklované baterie', 'LED diody', 'Solární panely'],
    budget: '~750 Kč',
    timeline: 'Zima 2025 → Jaro 2026',
    image: '/projects/solarni-svetla.jpg',
    images: [],
    thumbs: [],
};

export const guerillaProjects = [
    slunecnice,
    houpacka,
    streetArtGallery,
    chompar,
    parklety,
    solarniSvetla,
];
