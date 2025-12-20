// Game Jam Projects Index
// Import all game jam projects from individual files

import untitledRoachGame from './untitled-roach-game.js';
import agentChaos from './agent-chaos.js';
import besneni from './besneni.js';

// Planned projects (kept inline for now)
const kamerovaHra = {
    id: 'kamerova-hra',
    title: 'Interaktivní kamerová hra',
    subtitle: 'Game Design x Veřejný prostor',
    category: 'gamejam',
    description: 'Spolupráce s game designem na vytvoření interaktivní hry s kamerou.',
    artist: 'Martin Tomek, Michal Tancjura',
    status: 'planned',
    year: '2026',
    location: 'Palmovka',
    details: ['Computer vision', 'Interaktivní instalace', 'Edukace hrou'],
    fullDescription: `Mezioborová spolupráce s Katedrou herního designu FAMU.`,
    materials: ['Webkamera/tablet', 'Display/projekce', 'Počítač', 'Software'],
    budget: '~5000 Kč',
    timeline: '2-3 měsíce',
    image: '/projects/kamerova-hra.jpg',
    images: [],
    thumbs: [],
};

export const gamejamProjects = [
    untitledRoachGame,
    agentChaos,
    besneni,
    kamerovaHra,
];
