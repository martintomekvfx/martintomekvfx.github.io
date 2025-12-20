// Analog Projects Index
// Import all analog projects from individual files

import vjing from './vjing.js';
import originalCopy from './original-copy.js';
import photo35mm from './35mm-photo.js';

// Planned projects (kept inline for now)
const betonoveBanany = {
    id: 'betonove-banany',
    title: 'Betonové banány',
    subtitle: 'Lavičky / Mobiliář',
    category: 'analog',
    description: 'Série betonových laviček ve tvaru banánů.',
    artist: 'Martin Tomek',
    status: 'planned',
    year: '2026',
    location: 'Křižovatka před KB, Palmovka',
    details: ['Recyklovaný beton', 'Veřejné sedání', 'Tropical Palmbeach'],
    fullDescription: `Koncept: Tropical Palmbeach`,
    materials: ['Rychletuhnoucí beton', 'Forma na odlévání', 'Pletivo pro výztuž'],
    budget: '~3000 Kč',
    timeline: 'Zima 2025 → Léto 2026',
    image: '/projects/betonove-banany.jpg',
    images: [],
    thumbs: [],
};

const hlasovaciPopelniky = {
    id: 'hlasovaci-popelniky',
    title: 'Hlasovací popelníky',
    subtitle: 'Interaktivní mobiliář',
    category: 'analog',
    description: 'Experiment s veřejným zapojením skrze herní mechanismus.',
    artist: 'Martin Tomek, Tomáš Koníček',
    status: 'planned',
    year: '2026',
    location: 'Palmovka, Praha',
    details: ['Gamifikace', 'Zapojení komunity', 'Čistší prostor'],
    fullDescription: `Hlasovací popelník — gamifikace likvidace nedopalků.`,
    materials: ['Dřevo/kov', 'Průhledný plexisklo', 'Popisky'],
    budget: '~1500 Kč',
    timeline: 'Zima 2025 → Jaro 2026',
    image: '/projects/hlasovaci-popelnik/design_thumb.jpg',
    images: ['/projects/hlasovaci-popelnik/design.jpeg'],
    thumbs: ['/projects/hlasovaci-popelnik/design_thumb.jpg'],
};

export const analogProjects = [
    vjing,
    originalCopy,
    photo35mm,
    betonoveBanany,
    hlasovaciPopelniky,
];
