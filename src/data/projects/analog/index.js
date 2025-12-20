// Analog Projects Index
// Import all analog projects from individual files

import vjing from './vjing.js';
import originalCopy from './original-copy.js';
import photo35mm from './35mm-photo.js';
import scannerSeries from './scanner-series.js';
import glitchArt from './glitch-art.js';

// Planned projects
const betonoveBanany = {
    id: 'betonove-banany',
    title: 'Betonové banány',
    subtitle: 'Lavičky a mobiliář',
    category: 'analog',
    description: 'Série betonových laviček ve tvaru banánů jako součást konceptu Tropical Palmbeach.',
    artist: 'Martin Tomek',
    status: 'planned',
    year: '2026',
    location: 'Křižovatka před KB, Palmovka',
    details: ['Recyklovaný beton', 'Veřejné sedání', 'Tropical Palmbeach'],
    fullDescription: `Projekt Betonové banány představuje sérii laviček ve tvaru tropického ovoce jako součást širšího konceptu nazvaného Tropical Palmbeach. Tento koncept pracuje s názvem lokality Palmovka a ironicky jej transformuje do tropické estetiky.

Lavičky budou odlity z rychletuhnoucího betonu s využitím forem vytvořených speciálně pro tento účel. Vnitřní struktura bude vyztužena pletivem pro zajištění dostatečné pevnosti. Výsledné objekty nabídnou neformální posezení v prostoru, který v současnosti postrádá jakýkoli mobiliář pro pěší.

Umístění je plánováno na křižovatku před pobočkou Komerční banky, která byla antropologickým výzkumem identifikována jako nevyužitá asfaltová plocha vhodná pro urbánní intervenci.`,
    materials: ['Rychletuhnoucí beton', 'Forma na odlévání', 'Pletivo pro výztuž'],
    budget: 'přibližně 3000 Kč',
    timeline: 'Zima 2025 až léto 2026',
    image: '/projects/betonove-banany.jpg',
    images: [],
    thumbs: [],
};

export const analogProjects = [
    vjing,
    originalCopy,
    photo35mm,
    scannerSeries,
    glitchArt,
    betonoveBanany,
];
