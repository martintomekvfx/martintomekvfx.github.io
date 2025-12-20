import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';

function Project() {
    const { projectId } = useParams();
    const project = getProjectById(projectId);

    if (!project) {
        return (
            <div className="project-detail">
                <div className="container" style={{
                    minHeight: '60vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <h2>PROJECT NOT FOUND</h2>
                    <Link to="/" style={{ marginTop: 'var(--space-lg)' }}>Back</Link>
                </div>
            </div>
        );
    }

    const getStatusLabel = (status) => {
        switch (status) {
            case 'done': return 'Realizováno';
            case 'in-progress': return 'Probíhá';
            case 'planned': return 'V plánu';
            default: return status;
        }
    };

    return (
        <div className="project-detail">
            {/* Header */}
            <section className="project-header-simple">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/#work" className="back-link">Back</Link>

                    <h1>{project.title}</h1>
                    <p className="project-subtitle-simple">{project.subtitle}</p>

                    <div className="project-meta-simple">
                        <span>{project.year}</span>
                        <span>{project.location}</span>
                        <span>{getStatusLabel(project.status)}</span>
                    </div>
                </motion.div>
            </section>

            {/* Images */}
            {project.images && project.images.length > 0 && (
                <section className="project-images">
                    {project.images.map((image, index) => (
                        <motion.img
                            key={index}
                            src={image}
                            alt={`${project.title} ${index + 1}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        />
                    ))}
                </section>
            )}

            {/* Description */}
            <section className="project-content-simple">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    {project.fullDescription.split('\n\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </motion.div>
            </section>

            {/* Itch.io Embed */}
            {project.itchEmbed && (
                <section className="project-game-embed">
                    <iframe
                        src={project.itchEmbed}
                        width="100%"
                        height="620"
                        frameBorder="0"
                        allowFullScreen
                        title={`${project.title} - Play Game`}
                    />
                    {project.externalUrl && (
                        <p style={{ textAlign: 'center', marginTop: 'var(--space-md)', opacity: 0.7 }}>
                            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                🎮 Otevřít na itch.io →
                            </a>
                        </p>
                    )}
                </section>
            )}

            {/* External Link (for non-embedded games) */}
            {project.externalUrl && !project.itchEmbed && (
                <section style={{ textAlign: 'center', padding: 'var(--space-lg)' }}>
                    <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: 'var(--space-md) var(--space-xl)',
                            background: 'var(--color-text)',
                            color: 'var(--color-bg)',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        🎮 Hrát na itch.io →
                    </a>
                </section>
            )}

            {/* Video */}
            {project.videoUrl && (
                <section className="project-video">
                    <div className="video-container">
                        <iframe
                            src={project.videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/').split('&')[0]}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </section>
            )}

            {/* Second Video */}
            {project.videoUrl2 && (
                <section className="project-video">
                    <div className="video-container">
                        <iframe
                            src={project.videoUrl2.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/').split('&')[0]}
                            title={`${project.title} - video 2`}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </section>
            )}

            {/* Details */}
            <section className="project-details-simple">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="details-grid"
                >
                    {project.materials && (
                        <div className="detail-block">
                            <h4>Materials</h4>
                            <ul>
                                {project.materials.map((m, i) => <li key={i}>{m}</li>)}
                            </ul>
                        </div>
                    )}
                    <div className="detail-block">
                        <h4>Budget</h4>
                        <p>{project.budget}</p>
                    </div>
                    <div className="detail-block">
                        <h4>Timeline</h4>
                        <p>{project.timeline}</p>
                    </div>
                </motion.div>
            </section>

            {/* External Link */}
            {project.externalUrl && (
                <section className="project-cta">
                    <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        Launch Experience
                    </a>
                </section>
            )}
        </div>
    );
}

export default Project;
