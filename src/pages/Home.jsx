import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    guerillaProjects,
    analogProjects,
    digitalProjects,
    photographyProjects,
    collectiveProjects
} from '../data/projects';

function Home() {
    // Filter out planned projects - only show done or in-progress
    const filterActive = (projects) => projects.filter(p =>
        p.status === 'done' || p.status === 'in-progress'
    );

    const activeGuerilla = filterActive(guerillaProjects);
    const activeAnalog = filterActive(analogProjects);
    const activeDigital = filterActive(digitalProjects);
    const activePhotography = filterActive(photographyProjects);
    const activeCollective = filterActive(collectiveProjects);

    const CategorySection = ({ title, projects }) => (
        projects.length > 0 && (
            <div style={{ marginBottom: 'var(--space-2xl)' }}>
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    style={{
                        marginBottom: 'var(--space-md)',
                        fontSize: '0.875rem',
                        letterSpacing: '0.15em',
                        opacity: 0.6
                    }}
                >
                    {title}
                </motion.h3>
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                to={`/work/${project.id}`}
                                className="project-row"
                            >
                                <div className="project-row-info">
                                    <h3 className="project-row-title">{project.title}</h3>
                                    <span className="project-row-subtitle">{project.subtitle}</span>
                                </div>
                                <div className="project-row-meta">
                                    <span className="project-row-year">{project.year}</span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        )
    );

    return (
        <div>
            {/* Hero Section */}
            <section className="hero">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="hero-title">
                        MARTIN<br />TOMEK
                    </h1>
                </motion.div>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                >
                    FILM, INSTALLATION, GUERILLA ART
                </motion.p>

                <motion.div
                    className="hero-scroll"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    Scroll
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about" className="section inverted">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: 'var(--space-xl)' }}
                    >
                        ABOUT
                    </motion.h2>

                    <div className="about-grid">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="about-bio"
                        >
                            <p>
                                Zásadním východiskem mého současného uvažování je koncept města jako galerie.
                                Ulice a veřejná prostranství chápu jako otevřený výstavní prostor.
                            </p>
                            <p style={{ marginTop: 'var(--space-md)' }}>
                                Svá díla záměrně situuji do městských zákoutí a na opomíjená místa – tak, aby
                                je mohlo objevit náhodné kolemjdoucí publikum.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="about-details"
                        >
                            <div className="about-block">
                                <h4>Education</h4>
                                <p>FAMU / CAS Magisterský program<br />2025-2027</p>
                            </div>
                            <div className="about-block">
                                <h4>Focus</h4>
                                <p>Guerilla Art, Documentary Film, Tactical Urbanism, Participatory Art</p>
                            </div>
                            <div className="about-block">
                                <h4>Contact</h4>
                                <p><a href="mailto:martin.tomek@famu.cz">martin.tomek@famu.cz</a></p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Festivals */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        style={{ marginTop: 'var(--space-2xl)' }}
                    >
                        <h3 style={{ marginBottom: 'var(--space-md)' }}>FESTIVAL COLLABORATIONS</h3>
                        <p style={{ opacity: 0.8 }}>
                            Future Gate / Konťák / Marienbad Film Festival
                        </p>
                    </motion.div>

                    {/* Workshops */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        style={{ marginTop: 'var(--space-xl)' }}
                    >
                        <h3 style={{ marginBottom: 'var(--space-md)' }}>WORKSHOPS</h3>
                        <p style={{ opacity: 0.8 }}>
                            AI Tools / Analog VJing
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Work Section */}
            <section id="work" className="section">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        style={{ marginBottom: 'var(--space-xl)' }}
                    >
                        WORK
                    </motion.h2>

                    <CategorySection title="GUERILLA" projects={activeGuerilla} />
                    <CategorySection title="ANALOG" projects={activeAnalog} />
                    <CategorySection title="DIGITAL" projects={activeDigital} />
                    <CategorySection title="PHOTOGRAPHY" projects={activePhotography} />
                    <CategorySection title="COLLECTIVE" projects={activeCollective} />
                </div>
            </section>
        </div>
    );
}

export default Home;
