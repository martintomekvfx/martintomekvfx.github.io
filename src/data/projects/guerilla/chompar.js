// ChompAR - Street Art AR Game
// https://martintomekvfx.github.io/work/chompar

export default {
  id: 'chompar',
  title: 'ChompAR',
  subtitle: 'Street Art AR Game',
  category: 'guerilla',

  description: 'Street artová AR hra využívající gamifikaci ke cvičení pozornosti a apropriaci veřejného prostoru.',

  artist: 'Martin Tomek',
  status: 'in-progress',
  year: '2025',
  location: 'Praha, Anifilm 2026',

  details: ['Augmented Reality', 'Gamifikace', 'Privacy-first', 'Ekologie pozornosti'],

  fullDescription: `ChompAR představuje street artovou hru využívající rozšířenou realitu k podpoře pozornosti a apropriaci veřejného prostoru. Projekt stojí na třech pilířích, které reagují na současnou situaci ve městech.

Prvním pilířem je ekologie pozornosti. Lidé se přestávají dívat okolo sebe, pohrouženi do svých mobilních telefonů nebo mentálně vypnutí kvůli přehlcení vizuálními podněty. Hra je navržena tak, aby hráče motivovala k aktivnímu vnímání okolí.

Druhým pilířem je právo na město vycházející z myšlenek Henri Lefebvra. Obyvatelé často nepovažují veřejný prostor za svůj vlastní a chybí jim pocit sounáležitosti s místy, kterými denně procházejí. ChompAR umožňuje symbolické přivlastnění těchto míst prostřednictvím herních mechanik.

Třetím pilířem je détournement neboli využití technologie proti technologii. Mobilní telefon, který obvykle odvádí pozornost od okolí, se stává nástrojem pro její zaměření na fyzický svět.

Hra nabízí dva oddělené režimy. Solo mód má ambientní charakter a funguje jako cvičení pozornosti. Hráč sbírá virtuální objekty zvané Chompy do osobní sbírky, přičemž vlastnictví zůstává trvalé. Neexistuje zde žádný časový tlak a cesta se stává cílem.

Battle mód přináší kompetitivní rozměr a funguje jako nástroj apropriace veřejného prostoru. Dva týmy soupeří o kontrolu nad městem prostřednictvím claimování jednotlivých lokací. Kontrola je přechodná a může být přebrána soupeřem.

Projekt klade důraz na ochranu soukromí. Hra nesleduje GPS polohu hráčů, profil je uložen lokálně v prohlížeči bez nutnosti registrace. Mapa zobrazuje aktivitu s dvacetiminutovým zpožděním jako ochranné opatření. Mobilní telefon je vnímán jako sekundární nástroj, ne jako primární fokus pozornosti.

Pro festival Anifilm 2026 je plánována speciální verze v podobě AR treasure hunt. Po areálu festivalu bude rozmístěno dvanáct paste-upů, každý obsahující jeden snímek animace. Sesbíráním všech vznikne dvousekundová animace, která se objeví na kolektivním CRT displeji.`,

  materials: [
    'Webová aplikace',
    'MindAR framework',
    'Paste-upy a street art markery'
  ],
  budget: 'N/A',
  timeline: '2025-2026',

  image: '/projects/chomps/chomp.png',
  images: [],
  thumbs: [],

  videoUrl: 'https://www.youtube.com/watch?v=10wKtTf7WmA',
  externalUrl: 'https://chompar.vercel.app',
  isAR: true,

  references: [
    'Henri Lefebvre — Právo na město',
    'Situacionistický détournement',
    'MindAR documentation'
  ],
};
