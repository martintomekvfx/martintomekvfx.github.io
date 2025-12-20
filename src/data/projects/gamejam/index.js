// Game Jam Projects Index
// Import all game jam projects from individual files

import untitledRoachGame from './untitled-roach-game.js';
import agentChaos from './agent-chaos.js';
import besneni from './besneni.js';

// Planned projects
const kamerovaHra = {
    id: 'kamerova-hra',
    title: 'Interaktivní kamerová hra',
    subtitle: 'Game Design a veřejný prostor',
    category: 'gamejam',
    description: 'Mezioborová spolupráce s katedrou game designu na interaktivní instalaci využívající počítačové vidění.',
    artist: 'Martin Tomek a Michal Tancjura',
    status: 'planned',
    year: '2026',
    location: 'Palmovka, Praha',
    details: ['Computer vision', 'Interaktivní instalace', 'Edukace hrou'],
    fullDescription: `Projekt představuje mezioborovou spolupráci s Katedrou herního designu FAMU zaměřenou na vytvoření interaktivní instalace pro veřejný prostor.

Instalace bude využívat počítačové vidění k rozpoznávání pohybu a gest kolemjdoucích. Výstup se bude promítat na veřejně viditelnou plochu, čímž vznikne interaktivní prostředí reagující na přítomnost lidí.

Cílem je vytvořit herní zážitek přístupný široké veřejnosti bez nutnosti vlastnit speciální zařízení či instalovat aplikace. Kolemjdoucí se stanou součástí hry pouhým procházením prostorem.`,
    materials: ['Webkamera nebo tablet', 'Display nebo projekce', 'Počítač', 'Vlastní software'],
    budget: 'přibližně 5000 Kč',
    timeline: 'dva až tři měsíce vývoje',
    image: '/projects/kamerova-hra.jpg',
    images: [],
    thumbs: [],
};

export const gamejamProjects = [
    besneni,
    untitledRoachGame,
    agentChaos,
    kamerovaHra,
];
