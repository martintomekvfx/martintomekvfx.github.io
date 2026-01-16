// Spider - Conceptual Short Film
// https://martintomekvfx.github.io/work/spider

export default {
    id: 'spider',
    title: 'Spider',
    subtitle: 'Seed',
    category: 'analog',

    description: 'A short film visualizing the architecture of algorithmic recommendation through the act of web scraping itself.',

    artist: 'Martin Tomek',
    status: 'done',
    year: '2025',
    location: 'Praha',

    // Custom artistic layout for film presentation
    customLayout: 'hybaj-film',

    // Bilingual descriptions - Short
    descriptionCz: `Krátký film vizualizuje architekturu algoritmického doporučování skrze samotný akt webového scrapování. Scraper prochází českou streamovací platformou, každý pořad se objevuje jako uzel v rostoucí síti. Pavouk se pohybuje, spojuje, zachycuje. Nevidíme obsah, ale kostru jeho distribuce. Portrét infrastruktury pozornosti.`,

    descriptionEn: `A short film visualizing the architecture of algorithmic recommendation through the act of web scraping itself. A crawler traverses a Czech streaming platform, each show appearing as a node in a growing network. The spider moves, links, captures. What appears is not content but the skeleton of its delivery. A portrait of attention infrastructure.`,

    // Full descriptions - Long
    fullDescriptionEn: `Seed / Spider captures traversal. A web crawler moves through the database of the streaming platform Oneplay and the film renders this movement. Television programs appear as nodes, connections between them form a network of recommendations. The spider does not distinguish between documentary and reality show, between original production and licensed format. Everything is an equivalent data point.

We see the architecture of selection that precedes our decision-making. Streaming interfaces present content as a neutral offering, but the structure of this offering is itself a curatorial gesture. The film makes this structure visible by rendering it literally.

The network structure references the original promise of decentralization, from which the contemporary internet is receding. Large platforms centralize but do not archive. The promise of a universal library for a monthly fee proves fragile. Content disappears, licenses expire, services shut down.

The source code of the scraper and visualization tool is part of the work. Data flows in the opposite direction. Each node in the network is also a reminder of the possibility of becoming an endpoint oneself. Not returning to the center, but building one's own archive. The film is a trace of this process.

The tools are published as open source — Privateer for downloading and archiving content, and the visualization renderer that transforms crawl data into moving image. Releasing the code is not an afterthought but integral to the work. The film documents a process; the repositories enable its replication. Anyone can build their own archive, run their own spider, render their own portrait of a platform.`,

    fullDescription: `Seed / Spider zachycuje procházení. Webový crawler prochází databází streamovací platformy Oneplay a film vykresluje tento pohyb. Televizní pořady se zjevují jako uzly, propojení mezi nimi tvoří síť doporučení. Pavouk nerozlišuje mezi dokumentem a reality show, mezi původní tvorbou a licencovaným formátem. Všechno je ekvivalentní datový bod.

Vidíme architekturu výběru, která předchází našemu rozhodování. Rozhraní streamovacích služeb prezentují obsah jako neutrální nabídku, ale struktura této nabídky je už sama o sobě kurátorským gestem. Film tuto strukturu zviditelňuje tím, že ji doslovně vykresluje.

Struktura sítě odkazuje k původnímu slibu decentralizace, od kterého se současný internet vzdaluje. Velké platformy centralizují, ale nearchivují. Příslib univerzální knihovny za měsíční poplatek se ukazuje jako křehký. Obsah mizí, licence končí, služby zanikají.

Zdrojový kód scraperu i vizualizačního nástroje je součástí díla. Data putují opačným směrem. Každý uzel v síti je také připomínkou možnosti stát se koncovým bodem sám. Nebýt závislý na platformě, ale budovat vlastní archiv. Film je stopou tohoto procesu.

Nástroje jsou zveřejněny jako open source — Privateer pro stahování a archivaci obsahu, a vizualizační renderer, který transformuje data z crawlování do pohyblivého obrazu. Zveřejnění kódu není dodatečný nápad, ale integrální součást díla. Film dokumentuje proces; repozitáře umožňují jeho replikaci. Kdokoli si může vybudovat vlastní archiv, spustit vlastního pavouka, vykreslit vlastní portrét platformy.`,

    // YouTube video
    videoUrl: 'https://www.youtube.com/watch?v=gQzE46PQ524',

    // Film details for chips
    filmDetails: {
        director: 'Martin Tomek',
        technique: 'Generative Data Visualization',
        tools: 'Python, Custom Renderer',
        country: 'Czech Republic',
        color: 'Color',
    },

    // GitHub source code - part of the work
    sourceCode: [
        {
            name: 'Privateer',
            description: 'Web scraper & content archiver',
            url: 'https://github.com/Themolx/Privateer',
        },
        {
            name: 'Scraping Visualizer',
            description: 'Crawl data to moving image renderer',
            url: 'https://github.com/Themolx/scraping-visualizer',
        },
    ],

    // Themes/concepts
    concepts: [
        'Data Sovereignty',
        'Algorithmic Recommendation',
        'Decentralization',
        'Digital Archive',
        'Open Source',
        'FAMU',
    ],

    // No images - video only
    image: null,
    images: [],
    thumbs: [],
};

