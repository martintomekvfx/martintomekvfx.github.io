import { motion } from 'framer-motion';

function About() {
    return (
        <div className="project-detail">
            {/* Hero */}
            <section className="about-hero">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1>MARTIN TOMEK</h1>
                    <p style={{
                        marginTop: 'var(--space-md)',
                        fontSize: '1.25rem',
                        opacity: 0.7,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                    }}>
                        Film / Installation / Guerilla Art
                    </p>
                </motion.div>
            </section>

            {/* Main Content */}
            <section className="about-content">
                {/* Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <p className="about-bio">
                        Zásadním východiskem mého současného uvažování je koncept města jako galerie.
                        Ulice a veřejná prostranství chápu jako otevřený výstavní prostor, kde stěny
                        domů mohou fungovat podobně jako galerijní zdi.
                    </p>
                    <p className="about-bio" style={{ marginTop: 'var(--space-lg)' }}>
                        Svá díla záměrně situuji do městských zákoutí a na opomíjená místa – tak, aby
                        je mohlo objevit náhodné kolemjdoucí publikum, nejen návštěvníci oficiálních
                        kulturních institucí.
                    </p>
                    <p className="about-bio" style={{ marginTop: 'var(--space-lg)' }}>
                        Chci tím jednak zpřístupnit umění širší veřejnosti, jednak povzbudit obyvatele,
                        aby si svého okolí více všímali. Současná městská zkušenost je totiž často
                        charakterizována vizuálním přetížením a návykovou slepotou.
                    </p>
                    <p className="about-bio" style={{ marginTop: 'var(--space-lg)' }}>
                        Mým cílem je tuto apatii narušit – nalézat místa, která zdánlivě k ničemu
                        nejsou a ničemu už neslouží, a vdechnout jim druhý život tak, aby znovu
                        přinášela hodnotu.
                    </p>
                </motion.div>

                {/* Details */}
                <motion.div
                    className="about-details"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Education */}
                    <div>
                        <h4 className="about-section-title">Education</h4>
                        <ul className="about-list">
                            <li className="about-list-item">FAMU / CAS Magisterský program</li>
                            <li className="about-list-item">Mentor: Georgy Bagdasarov</li>
                            <li className="about-list-item">2025-2027</li>
                        </ul>
                    </div>

                    {/* Focus Areas */}
                    <div>
                        <h4 className="about-section-title">Focus Areas</h4>
                        <ul className="about-list">
                            <li className="about-list-item">Guerilla Art / Tactical Urbanism</li>
                            <li className="about-list-item">Documentary Film</li>
                            <li className="about-list-item">Participatory Art</li>
                            <li className="about-list-item">Urban Interventions</li>
                            <li className="about-list-item">Game Design x Public Space</li>
                        </ul>
                    </div>

                    {/* Current Project */}
                    <div>
                        <h4 className="about-section-title">Current Project</h4>
                        <ul className="about-list">
                            <li className="about-list-item">Guerillové intervence ve veřejném prostoru</li>
                            <li className="about-list-item">Palmovka, Praha 8</li>
                            <li className="about-list-item">Experimentální dokumentární film</li>
                        </ul>
                    </div>

                    {/* Collaborators */}
                    <div>
                        <h4 className="about-section-title">Collaborators</h4>
                        <ul className="about-list">
                            <li className="about-list-item">Jiří Kejkula / Produkce</li>
                            <li className="about-list-item">Tomáš Vrána / Umělec</li>
                            <li className="about-list-item">Michal Tancjura / Game Design FAMU</li>
                            <li className="about-list-item">Tomáš Koníček / Řemeslný spoluautor</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="about-section-title">Contact</h4>
                        <ul className="about-list">
                            <li className="about-list-item">
                                <a href="mailto:martin.tomek@famu.cz" style={{ textDecoration: 'underline' }}>
                                    martin.tomek@famu.cz
                                </a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </section>

            {/* Quote Section */}
            <section className="section inverted">
                <div className="container">
                    <motion.blockquote
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{
                            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                            lineHeight: 1.3,
                            maxWidth: '900px',
                            fontWeight: 600
                        }}
                    >
                        "Je fascinující, že je společensky přijatelnější veřejný prostor ničit,
                        než ho svévolně vylepšovat či opravovat."
                    </motion.blockquote>
                </div>
            </section>

            {/* Approach Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ marginBottom: 'var(--space-xl)' }}>APPROACH</h2>
                    </motion.div>

                    <div className="grid grid-2" style={{ gap: 'var(--space-2xl)' }}>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ marginBottom: 'var(--space-md)' }}>OFFICIAL</h3>
                            <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                                Veřejně podepsané intervence pod reálným jménem Martin Tomek. Tyto
                                projekty jsou transparentní, zaměřené na urbánní mobiliář, komunitní
                                aktivity a herní instalace. Cílem je pozitivní změna prostoru s možností
                                oficiální spolupráce s městem.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 style={{ marginBottom: 'var(--space-md)' }}>GUERILLA ART</h3>
                            <p style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                                Neoficiální intervence pod pseudonymem "Ptáček". Tyto akce jsou anonymní,
                                spontánní a často kritické vůči současnému stavu veřejného prostoru.
                                Guerilla art umožňuje svobodnější vyjádření bez nutnosti oficiálních povolení.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Video Documentation */}
            <section className="section" style={{ backgroundColor: 'var(--color-gray-light)' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ marginBottom: 'var(--space-lg)' }}>VIDEO DOCUMENTATION</h3>
                        <div className="video-container">
                            <iframe
                                src="https://youtube.com/embed/AKgS2maI94k"
                                title="Rozhovory s ulicí"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        <p style={{
                            marginTop: 'var(--space-md)',
                            fontSize: '0.875rem',
                            opacity: 0.6
                        }}>
                            Rozhovory s ulicí / Video dokumentace guerillových intervencí na Palmovce
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

export default About;
