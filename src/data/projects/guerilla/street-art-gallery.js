// Street Art Gallery - Pouliční galerie
// https://martintomekvfx.github.io/work/street-art-gallery

export default {
  id: 'street-art-gallery',
  title: 'Street Art Gallery',
  subtitle: 'Obrazy v ulicích',
  category: 'guerilla',

  description: 'Město jako galerie. Různé techniky guerilla artu propojené s rozšířenou realitou skrze projekt Chomp AR.',

  artist: 'Ptáček + kolektiv',
  status: 'in-progress',
  year: '2024-2025',
  location: 'Palmovka, Kolbenka, Anifilm Třeboň',

  details: ['Paste-upy', 'Stickery', 'Instalace', 'AR integrace', 'Anifilm Scans'],

  // Custom layout flag
  customLayout: 'street-art',
  galleryLayout: 'mixed',

  fullDescription: `Projekt vychází z premisy, že město samo o sobě představuje galerii a jeho ulice jsou výstavními stěnami. Pracuji s množstvím opuštěných informačních prostor, které ztratily původní účel.

Záměrně využívám umění svých přátel i kohokoliv, kdo se chce připojit. Ulice je všech. Práce nemusí procházet tradičním kurátorským výběrem, protože veřejný prostor patří každému.

Výrazným prvkem projektu jsou "Chomps" – postavičky, které propojují fyzický street art s digitálním světem. Tato galerie slouží jako rozcestník pro projekt [Chomp AR](/work/chompar), kde naleznete kompletní teoretický rámec i samotnou AR aplikaci.`,

  // Subcategories for different techniques
  subcategories: [
    {
      title: 'Paste-upy a Chomps',
      description: 'Vylepované grafické práce a postavičky Chomp. Tato sekce je přímo propojena s AR hrou Chomp AR. Každý paste-up funguje jako marker pro rozšířenou realitu.',
      images: [
        { url: '/projects/streetart/IMG_4740_web.jpg', title: 'Klasický street art v interakci s městem' },
        { url: '/projects/gallery/IMG_5449_web.jpg', title: 'Chomp v urbanistickém detailu' },
        { url: '/projects/gallery/IMG_5462_web.jpg', title: 'Vylepování postaviček' },
        { url: '/projects/gallery/IMG_6184_2_web.jpg', title: 'Chomp stencil v šedé zóně' },
        { url: '/projects/gallery/IMG_6190_web.jpg', title: 'Detail sprejového artu' },
        { url: '/projects/gallery/IMG_6192_web.jpg', title: 'Barevná intervence' },
        { url: '/projects/gallery/IMG_6203_web.jpg', title: 'Chomp na nečekaném místě' },
        { url: '/projects/gallery/IMG_5328_web.jpg', title: 'Paste-up proces' },
        { url: '/projects/gallery/IMG_5335_web.jpg', title: 'Finální vylepení' },
        { url: '/projects/gallery/IMG_5565_web.jpg', title: 'Dialog s okolím' },
        { url: '/projects/gallery/IMG_5568_web.jpg', title: 'Street art fragment' }
      ]
    },
    {
      title: 'Skener - Anifilm',
      description: 'Stickers naskenované pro návštěvníky festivalu Anifilm. Projekt zkoumá přenos syrového street artu do formátu festivalového dárku.',
      images: [
        { url: '/projects/gallery/IMG_1719_web.jpg', title: 'Skenování jako metoda zachování artu' },
        { url: '/projects/gallery/F6A9BAC1-8AB4-4E93-9032-B338D0CE4676_web.jpg', title: 'Digitální archivace nálepky' }
      ]
    },
    {
      title: 'Instalace z recyklovaných materiálů',
      description: 'Site-specific intervence z nalezených materiálů. Práce s nálezovými objekty a geometrickými strukturami.',
      images: [
        { url: '/projects/gallery/IMG_5464_web.jpg', title: 'Recyklovaná instalace' },
        { url: '/projects/gallery/E168AFDE-5124-411C-BCE3-3EEF4737634B_web.jpg', title: 'Textilní zásah do plotu' },
        { url: '/projects/gallery/IMG_4788_web.jpg', title: 'Nalezený objekt jako umění' },
        { url: '/projects/gallery/IMG_4842_web.jpg', title: 'Intervence v detailu' },
        { url: '/projects/gallery/IMG_5016_web.jpg', title: 'Práce s odpadem' },
        { url: '/projects/gallery/IMG_5134_web.jpg', title: 'Geometrie v ulici' },
        { url: '/projects/gallery/IMG_5760_web.jpg', title: 'Instalace na Palmovce' },
        { url: '/projects/gallery/IMG_5776_web.jpg', title: 'Urbanistický dialog' }
      ]
    }
  ],

  materials: [
    'Grafické tisky',
    'Samolepky',
    'Paste-upy',
    'Recyklovaný materiál'
  ],
  budget: '~1750 Kč',
  timeline: 'Průběžně',

  videoUrl: 'https://youtu.be/P-Wx6zbYfiE',
  videoDescription: 'Video dokumentace stickerů, které byly naskenované a rozdávané návštěvníkům festivalu Anifilm. Záznam zachycuje jejich reakce při objevování a snahu o zprostředkování syrového pocitu ze street artu. Video mělo premiéru na akci Prase-ní.',

  image: '/projects/streetart/IMG_4740_thumb.jpg',
  images: [],
  thumbs: [],

  relatedProject: 'chompar',

  references: [
    'Rob Walker — The Art of Noticing',
    'Jacques Rancière — Rozdělení smyslového',
    'Brian O\'Doherty — Uvnitř bílé krychle'
  ],
};
