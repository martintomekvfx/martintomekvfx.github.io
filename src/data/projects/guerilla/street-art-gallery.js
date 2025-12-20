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

  fullDescription: `Projekt vychází z premisy, že město samo o sobě představuje galerii a jeho ulice jsou výstavními stěnami. Pracuji s množstvím opuštěných informačních prostor, které ztratily původní účel.

Záměrně využívám umění svých přátel i kohokoliv, kdo se chce připojit. Ulice je všech. Práce nemusí procházet tradičním kurátorským výběrem, protože veřejný prostor patří každému.

Výrazným prvkem projektu jsou "Chomps" – postavičky, které propojují fyzický street art s digitálním světem. Tato galerie slouží jako rozcestník pro projekt [Chomp AR](/work/chompar), kde naleznete kompletní teoretický rámec i samotnou AR aplikaci.`,

  // Subcategories for different techniques
  subcategories: [
    {
      title: 'Paste-upy a Chomps',
      description: 'Vylepované grafické práce a postavičky Chomp. Tato sekce je přímo propojena s AR hrou Chomp AR. Každý paste-up funguje jako marker pro rozšířenou realitu. Fotky zachycují proces vylepování i finální umístění v urbanistickém kontextu.',
      images: [
        '/projects/streetart/IMG_4740_web.jpg', // První je street art
        '/projects/gallery/IMG_5449_web.jpg',   // Chomp přesunutý z instalací
        '/projects/gallery/IMG_5462_web.jpg',   // Chomp přesunutý z instalací
        '/projects/gallery/IMG_6184_2_web.jpg', // První z bývalého spray artu (taky Chomp)
        '/projects/gallery/IMG_6190_web.jpg',
        '/projects/gallery/IMG_6192_web.jpg',
        '/projects/gallery/IMG_6203_web.jpg',
        '/projects/gallery/IMG_5328_web.jpg',
        '/projects/gallery/IMG_5335_web.jpg',
        '/projects/gallery/IMG_5565_web.jpg',
        '/projects/gallery/IMG_5568_web.jpg',
      ]
    },
    {
      title: 'Skener - Anifilm',
      description: 'Dokumentace samolepek, které byly naskenovány a transformovány pro interakci s diváky. Tento proces zkoumá přenos pouličního umění do digitální a kurátorské podoby festivalu.',
      images: [
        '/projects/gallery/IMG_1719_web.jpg', // Původně třetí v paste-upech
        '/projects/gallery/F6A9BAC1-8AB4-4E93-9032-B338D0CE4676_web.jpg',
      ]
    },
    {
      title: 'Instalace z recyklovaných materiálů',
      description: 'Využití nalezeného materiálu k vytvoření site-specific intervencí. Práce s tím, co město samo nabízí – nálezové objekty, textilní prvky a geometrické struktury vpletené do plotů.',
      images: [
        '/projects/gallery/IMG_5464_web.jpg',
        '/projects/gallery/E168AFDE-5124-411C-BCE3-3EEF4737634B_web.jpg',
        '/projects/gallery/IMG_4788_web.jpg',
        '/projects/gallery/IMG_4842_web.jpg',
        '/projects/gallery/IMG_5016_web.jpg',
        '/projects/gallery/IMG_5134_web.jpg',
        '/projects/gallery/IMG_5760_web.jpg',
        '/projects/gallery/IMG_5776_web.jpg',
      ]
    }
  ],

  materials: [
    'Grafické tisky vlastní i od přátel',
    'Linorytové matrice',
    'Samolepky',
    'Paste-upy',
    'Recyklovaný materiál'
  ],
  budget: '~1750 Kč',
  timeline: 'Průběžně',

  videoUrl: 'https://youtu.be/P-Wx6zbYfiE',
  videoDescription: 'Video dokumentace stickerů, které byly naskenované a rozdávané návštěvníkům festivalu Anifilm. Záznam zachycuje jejich reakce při objevování umění a snahu o zprostředkování syrového pocitu ze street artu v prostředí festivalu. Video mělo premiéru na akci Prase-ní.',

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
