// Street Art Gallery - Pouliční galerie
// https://martintomekvfx.github.io/work/street-art-gallery

export default {
  id: 'street-art-gallery',
  title: 'Street Art Gallery',
  subtitle: 'Obrazy v ulicích',
  category: 'guerilla',

  description: 'Město jako galerie. Různé techniky guerilla artu od paste-upů přes kresby až po stickery.',

  artist: 'Ptáček + kolektiv',
  status: 'in-progress',
  year: '2024-2025',
  location: 'Palmovka, Kolbenka, Anifilm Třeboň',

  details: ['Paste-upy', 'Instalace', 'Kresby', 'Stickery', 'Spray art'],

  // Custom layout flag
  customLayout: 'street-art',

  fullDescription: `Projekt vychází z premisy, že město samo o sobě představuje galerii a jeho ulice jsou výstavními stěnami. Pracuji s množstvím opuštěných informačních prostor, které ztratily původní účel.

Záměrně využívám umění svých přátel i kohokoliv, kdo se chce připojit. Ulice je všech. Práce nemusí procházet tradičním kurátorským výběrem, protože veřejný prostor patří každému.

Zajímavou okolností je blízkost mnoha intervencí ke Galerii Pragovka. Vzniká tak implicitní srovnání mezi oficiálním galerijním prostorem a pouliční galerií.`,

  // Subcategories for different techniques
  subcategories: [
    {
      title: 'Paste-upy a Chomps',
      description: 'Vylepované grafické práce a animované Chompy propojené s AR hrou ChompAR. Každý paste-up funguje jako AR marker pro rozšířenou realitu.',
      images: [
        '/projects/streetart/IMG_4740_web.jpg',
        '/projects/gallery/IMG_1694_web.jpg',
        '/projects/gallery/IMG_1719_web.jpg',
      ]
    },
    {
      title: 'Instalace z recyklovaných materiálů',
      description: 'Využití nalezeného materiálu k vytvoření site-specific instalací. Práce s tím, co město samo nabízí.',
      images: [
        '/projects/gallery/IMG_2332_web.jpg',
      ]
    },
    {
      title: 'Kresby na odpad',
      description: 'Transformace vyhozeného odpadu na umělecké objekty. Karton, dřevo, cokoli co čeká na popelnice.',
      images: [
        '/projects/gallery/IMG_4702_web.jpg',
      ]
    },
    {
      title: 'Sticker art',
      description: 'Samolepky jako nejdostupnější forma guerilla artu. Rychlé, nenápadné, všudypřítomné.',
      images: []
    },
    {
      title: 'Spray art',
      description: 'Klasická forma street artu. Šablony a freehand práce na legálních i šedých plochách.',
      images: []
    }
  ],

  materials: [
    'Grafické tisky vlastní i od přátel',
    'Linorytové matrice',
    'Samolepky',
    'Paste-upy',
    'Spreje a šablony',
    'Recyklovaný materiál'
  ],
  budget: '~1750 Kč',
  timeline: 'Průběžně',

  videoUrl: 'https://youtu.be/P-Wx6zbYfiE',

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
