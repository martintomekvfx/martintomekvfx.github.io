// ChompAR - Street Art AR Game  
// https://martintomekvfx.github.io/work/chompar

export default {
  id: 'chompar',
  title: 'ChompAR',
  subtitle: 'Street Art AR Game',
  category: 'guerilla',

  description: 'Lokační hra v rozšířené realitě. Prozkoumej město, skenuj street art a ulov Chompy pro svůj tým.',

  artist: 'Martin Tomek',
  status: 'in-progress',
  year: '2025',
  location: 'Praha • Anifilm 2026',

  details: ['Augmented Reality', 'Location Game', 'Street Art', 'Red vs Blue'],

  // Custom layout flag
  customLayout: 'chompar',

  // Hero assets
  heroAnimation: '/projects/chomps/eat.gif',
  scanAnimation: '/projects/chomps/scan.gif',

  // Game URL
  gameUrl: 'https://postptacek.github.io/chomps/',

  // Lore / Story
  lore: {
    title: 'Příběh Chompů',
    paragraphs: [
      'Chomps jsou malé bytosti, které obývají městský prostor a jsou viditelné pouze přes rozšířenou realitu. Živí se kreativní energií, kterou čerpají z okolního street artu.',
      'Dva kmeny – Červení a Modří – soupeří o teritoria po celé Praze. Každý ulovený Chomp rozšiřuje vliv tvého týmu a posiluje jeho síť.',
      'Hra propojuje digitální a fyzický svět. Aby mohl hráč ulovit Chompa, musí být skutečně na místě, kde se nachází, a naskenovat reálný street art.'
    ]
  },

  // Map config - shows real chomp locations
  mapConfig: {
    center: [50.105, 14.490],
    zoom: 13,
    tileUrl: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
  },

  // All chomp locations from the actual game
  chompLocations: [
    // Vysočany / Hloubětín cluster
    { id: 'art-01', name: 'Kolbenova 1', location: [50.110192, 14.503811], size: 'medium', area: 'Vysočany' },
    { id: 'art-02', name: 'Kolbenova 2', location: [50.110203, 14.503764], size: 'small', area: 'Vysočany' },
    { id: 'art-03', name: 'Kolbenova 3', location: [50.109847, 14.504250], size: 'medium', area: 'Vysočany' },
    { id: 'art-05', name: 'Kolbenova 5', location: [50.109764, 14.505742], size: 'large', area: 'Vysočany' },
    { id: 'art-07', name: 'Hloubětín 1', location: [50.110383, 14.508192], size: 'medium', area: 'Hloubětín' },
    { id: 'art-08', name: 'Hloubětín 2', location: [50.110508, 14.509567], size: 'large', area: 'Hloubětín' },
    { id: 'art-14', name: 'Vysočany 6', location: [50.109736, 14.508125], size: 'large', area: 'Vysočany' },
    { id: 'art-19', name: 'Hloubětín 5', location: [50.110717, 14.509906], size: 'large', area: 'Hloubětín' },
    { id: 'art-20', name: 'Harfa', location: [50.109428, 14.498994], size: 'medium', area: 'Vysočany' },
    // Palmovka / Libeň
    { id: 'art-22', name: 'Karlín', location: [50.091603, 14.440019], size: 'large', area: 'Karlín' },
    { id: 'art-23', name: 'Palmovka 1', location: [50.103611, 14.464650], size: 'medium', area: 'Palmovka' },
    { id: 'art-24', name: 'Libeň 1', location: [50.110244, 14.477544], size: 'small', area: 'Libeň' },
    { id: 'art-27', name: 'Palmovka 4', location: [50.103608, 14.470750], size: 'medium', area: 'Palmovka' },
    { id: 'art-28', name: 'Vysočany 9', location: [50.111042, 14.503097], size: 'large', area: 'Vysočany' },
    // Centrum
    { id: 'art-46', name: 'Centrum 1', location: [50.091525, 14.440142], size: 'medium', area: 'Florenc' },
    { id: 'art-48', name: 'Centrum 3', location: [50.087811, 14.432578], size: 'large', area: 'Karlín' },
    { id: 'art-53', name: 'Centrum 8', location: [50.082172, 14.418336], size: 'large', area: 'Centrum' },
    // Poděbrady
    { id: 'art-34', name: 'Poděbrady 1', location: [50.145850, 15.117822], size: 'medium', area: 'Poděbrady' },
    { id: 'art-36', name: 'Poděbrady 3', location: [50.148750, 15.121333], size: 'large', area: 'Poděbrady' },
    { id: 'art-39', name: 'Poděbrady 6', location: [50.148353, 15.124464], size: 'large', area: 'Poděbrady' },
    { id: 'art-43', name: 'Poděbrady 10', location: [50.145967, 15.124406], size: 'large', area: 'Poděbrady' },
  ],

  // Stats
  stats: {
    totalChomps: 57,
    areas: ['Vysočany', 'Hloubětín', 'Palmovka', 'Libeň', 'Karlín', 'Centrum', 'Poděbrady'],
    teams: ['Červení', 'Modří']
  },

  // Simple 3-step how it works
  howItWorks: [
    {
      step: 'NAJDI',
      desc: 'Prozkoumej mapu a najdi Chompy v ulicích.',
      icon: '/projects/chomps/badge-4.png'
    },
    {
      step: 'SKENUJ',
      desc: 'Namiř kameru na street art a odhal Chompa.',
      icon: '/projects/chomps/badge-7.png'
    },
    {
      step: 'ULOV',
      desc: 'Získej body a zabír teritorium pro svůj tým.',
      icon: '/projects/chomps/badge-1.png'
    }
  ],

  // Gallery - mix of street chomps and app screenshots
  galleryImages: [
    { url: '/projects/gallery/IMG_5449_web.jpg', title: 'Chomp v urbanistickém detailu' },
    { url: '/projects/gallery/IMG_5462_web.jpg', title: 'Vylepování postaviček' },
    { url: '/projects/chomps/screenshot_1.png', title: 'Herní mapa' },
    { url: '/projects/gallery/IMG_5464_web.jpg', title: 'Chomp v instalaci' },
    { url: '/projects/gallery/F6A9BAC1-8AB4-4E93-9032-B338D0CE4676_web.jpg', title: 'Digitální Chomp' },
    { url: '/projects/chomps/app_1.jpg', title: 'AR skenování' }
  ],

  // Video
  videoUrl: 'https://www.youtube.com/watch?v=10wKtTf7WmA',
  videoDescription: 'Ukázka hry: skenování, územní boj a týmová strategie.',

  // Thumbnail
  image: '/projects/chomps/chumper.png',
  images: [],
  thumbs: [],

  relatedProject: 'street-art-gallery',
};
