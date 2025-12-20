// Guerilla Projects Index
// Import all guerilla projects from individual files

import slunecnice from './slunecnice.js';
import houpacka from './houpacka.js';
import streetArtGallery from './street-art-gallery.js';
import chompar from './chompar.js';
import panak from './panak.js';

// Planned projects
const parklety = {
    id: 'parklety',
    title: 'Parklety',
    subtitle: 'Tactical Urbanism',
    category: 'guerilla',
    description: 'Dočasná přeměna parkovacích míst na prostor pro setkávání a odpočinek.',
    artist: 'Martin Tomek, Tomáš Koníček',
    status: 'planned',
    year: '2026',
    location: 'Před pobočkou KB, Palmovka',
    details: ['Dřevěné palety', 'Komunitní náměstí', 'Reversibilní', 'Antropologický výzkum'],
    fullDescription: `Projekt reaguje na antropologický výzkum Palmovky, který identifikoval nevyužitý asfaltový prostor před pobočkou Komerční banky. Na jeden den plánujeme obsadit několik parkovacích míst a vybavit je dočasným mobiliářem zahrnujícím paletové lavičky, stoly, květináče s rostlinami a deštníky poskytující stín.

Cílem je pozorovat reakce kolemjdoucích, když najednou získají možnost se v místě zastavit a posedět. Palmovce dlouhodobě chybí příjemný veřejný prostor vhodný k setkávání. Intervence má ověřit předpoklad, že i minimální zásah může výrazně změnit charakter místa a způsob jeho využívání.

Výsledky pozorování poslouží jako podklad pro případnou komunikaci s městskou částí o trvalejších úpravách prostranství.`,
    materials: ['EURO palety', 'Venkovní koberec', 'Stolek', 'Polštáře', 'Květináče'],
    budget: '~3500 Kč',
    timeline: 'Léto 2026',
    image: '/projects/parklety.jpg',
    images: [],
    thumbs: [],
};

const solarniSvetla = {
    id: 'solarni-svetla',
    title: 'Guerilla Světla',
    subtitle: 'Kritika konzumu',
    category: 'guerilla',
    description: 'Instalace recyklovaných LED světel na nedostatečně osvětlená místa jako kritika jednorázového konzumu.',
    artist: 'Ptáček',
    status: 'planned',
    year: '2026',
    location: 'Podchody, schody metra, Palmovka',
    details: ['Recyklace Li-ion baterií', 'Bezpečnost', 'Kritika konzumu', 'Solární panel'],
    fullDescription: `Projekt reaguje na dva odlišné problémy spojené do jednoho řešení.

Prvním problémem je nedostatečné osvětlení určitých míst na Palmovce. Antropologická zpráva identifikovala vchody do metra a okolí mostu jako prostory, kde chybí adekvátní světlo. Instalací dočasných guerillových světel by bylo možné na tento nedostatek upozornit a současně prostor reálně zlepšit. Součástí by byl nápis či QR kód vysvětlující záměr projektu.

Druhým problémem je ekologicky problematické využívání lithiových baterií v jednorázových elektronických cigaretách. Nikotinové korporace používají nabíjecí baterie pouze jednou, přestože by mohly sloužit mnohem déle. Z extrahovaných baterií je možné sestavit funkční powerbanku nebo právě guerillové osvětlení.

Projekt tak spojuje praktické zlepšení veřejného prostoru s kritikou konzumní společnosti a jejího plýtvání zdroji.`,
    materials: ['Recyklované Li-ion baterie', 'LED diody', 'Solární panely', 'Vodotěsná krabička'],
    budget: '~750 Kč',
    timeline: 'Zima 2025 → Jaro 2026',
    image: '/projects/solarni-svetla.jpg',
    images: [],
    thumbs: [],
};

const hlasovaciPopelniky = {
    id: 'hlasovaci-popelniky',
    title: 'Hlasovací popelníky',
    subtitle: 'Gamifikace čistoty',
    category: 'guerilla',
    description: 'Experiment využívající herní mechanismus k motivaci kuřáků odkládat nedopalky do popelníků.',
    artist: 'Martin Tomek, Tomáš Koníček',
    status: 'planned',
    year: '2026',
    location: 'Palmovka, Praha',
    details: ['Gamifikace', 'Čistší prostor', 'Sběr dat', 'Komunitní dialog'],
    fullDescription: `Nedopalky cigaret představují specifický problém veřejného prostoru. Mnoho lidí, zejména ze starší generace, nevnímá nedopalek jako odpadek a považuje jeho odhození na zem za přirozené chování.

Koncept hlasovacího popelníku pracuje s jednoduchou gamifikací. Popelník je rozdělen na dvě přihrádky, nad nimiž je umístěna otázka. Kuřák hlasuje tím, do které části vhodí nedopalek. Příkladem může být otázka jako Je lepší káva nebo čaj. Tento hravý prvek motivuje k použití popelníku namísto odhození nedopalku na zem a současně generuje zajímavá data o preferencích kolemjdoucích.

Pro ověření efektivity je plánován kontrolovaný experiment. Na dvou srovnatelných lokalitách by se provedlo důkladné vyčištění od nedopalků. Na jednu by se umístil hlasovací popelník, druhá by sloužila jako kontrolní. Po určité době by se srovnalo množství nedopalků na zemi u obou míst.`,
    materials: ['Dřevo nebo kov', 'Průhledný plexisklo', 'Popisky s otázkami'],
    budget: '~1500 Kč',
    timeline: 'Zima 2025 → Jaro 2026',
    image: '/projects/hlasovaci-popelnik/design_thumb.jpg',
    images: ['/projects/hlasovaci-popelnik/design.jpeg'],
    thumbs: ['/projects/hlasovaci-popelnik/design_thumb.jpg'],
};

export const guerillaProjects = [
    slunecnice,
    streetArtGallery,
    chompar,
    houpacka,
    panak,
    parklety,
    solarniSvetla,
    hlasovaciPopelniky,
];
