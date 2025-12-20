// ChompAR - Street Art AR Game
// https://martintomekvfx.github.io/work/chompar

export default {
  id: 'chompar',
  title: 'ChompAR',
  subtitle: 'Street Art AR Game',
  category: 'guerilla',

  description: 'Street artová hra využívající gamifikaci ke cvičení pozornosti a apropriaci veřejného prostoru.',

  artist: 'Martin Tomek',
  status: 'in-progress',
  year: '2025',
  location: 'Praha, Anifilm 2026',

  details: ['Augmented Reality', 'Gamifikace', 'Privacy-first', 'Ekologie pozornosti'],

  // Custom layout flag
  customLayout: 'chompar',

  // Hero section
  heroImage: '/projects/chomps/scan.gif',

  // Three pillars
  pillars: [
    {
      icon: '/projects/chomps/badge-1.png',
      title: 'Ekologie pozornosti',
      description: 'Lidé se nedívají okolo sebe.'
    },
    {
      icon: '/projects/chomps/badge-2.png',
      title: 'Právo na město',
      description: 'Lidé nepovažují město za jejich.'
    },
    {
      icon: '/projects/chomps/badge-3.png',
      title: 'Détournement',
      description: 'Využívání technologie proti technologii.'
    }
  ],

  // Game modes
  modes: [
    {
      title: 'Solo mód',
      type: 'Ambientní',
      points: [
        'Sbírej Chompy do osobní sbírky.',
        'Vlastnictví zůstává navždy.',
        'Žádný tlak. Cesta je cíl.'
      ],
      meaning: 'Cvičení pozornosti'
    },
    {
      title: 'Battle mód',
      type: 'Kompetitivní',
      points: [
        'Red vs Blue.',
        'Claimni = tenhle kus města je tvůj.',
        'Dá se přebírat.'
      ],
      meaning: 'Apropriace veřejného prostoru'
    }
  ],

  // Privacy features
  privacy: [
    { title: 'Žádná GPS', description: 'Netrackujeme polohu.' },
    { title: 'Lokální profil', description: 'Data v prohlížeči. Žádná registrace.' },
    { title: '20min delay', description: 'Anti-predator ochrana na mapě.' }
  ],

  fullDescription: `ChompAR představuje street artovou hru využívající rozšířenou realitu k podpoře pozornosti a apropriaci veřejného prostoru.

Projekt stojí na třech teoretických pilířích. Prvním je ekologie pozornosti reagující na skutečnost, že lidé se přestávají dívat okolo sebe, pohrouženi do mobilních telefonů nebo mentálně vypnutí kvůli přehlcení vizuálními podněty.

Druhým pilířem je právo na město vycházející z myšlenek Henri Lefebvra. Obyvatelé často nepovažují veřejný prostor za svůj vlastní a chybí jim pocit sounáležitosti s místy, kterými denně procházejí.

Třetím pilířem je détournement neboli využití technologie proti technologii. Mobilní telefon, který obvykle odvádí pozornost od okolí, se stává nástrojem pro její zaměření na fyzický svět.

Hra nabízí dva oddělené režimy. Solo mód má ambientní charakter a funguje jako cvičení pozornosti. Battle mód přináší kompetitivní rozměr s týmy Red a Blue soupeřícími o kontrolu nad městem.

Projekt klade důraz na ochranu soukromí. Hra nesleduje GPS polohu, profil je uložen lokálně bez registrace a mapa zobrazuje aktivitu s dvacetiminutovým zpožděním.

Pro festival Anifilm 2026 je plánována speciální verze AR treasure hunt s dvanácti paste-upy po areálu festivalu.`,

  materials: [
    'Webová aplikace',
    'MindAR framework',
    'Paste-upy a street art markery'
  ],
  budget: 'N/A',
  timeline: '2025-2026',

  image: '/projects/chomps/chumper.png',
  images: [],
  thumbs: [],

  videoUrl: 'https://www.youtube.com/watch?v=10wKtTf7WmA',
  externalUrl: 'https://chompar.vercel.app',
  isAR: true,

  relatedProject: 'street-art-gallery',

  references: [
    'Henri Lefebvre — Právo na město',
    'Situacionistický détournement',
    'Rob Walker — The Art of Noticing'
  ],
};
