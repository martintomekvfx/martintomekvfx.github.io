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

    // Parse description with styled sections
    const renderDescription = (text) => {
        const lines = text.split('\n');
        const elements = [];
        let currentParagraph = [];

        lines.forEach((line, index) => {
            // Section headers (═══)
            if (line.includes('═══════')) {
                if (currentParagraph.length > 0) {
                    elements.push(
                        <p key={`p-${index}`} className="project-paragraph">
                            {currentParagraph.join(' ')}
                        </p>
                    );
                    currentParagraph = [];
                }
                elements.push(<hr key={`hr-${index}`} className="project-divider" />);
            }
            // Main headers (ALL CAPS with colon or standalone)
            else if (line.match(/^[A-ZĚŠČŘŽÝÁÍÉÚŮĎŤŇ\s—]+:?$/) && line.length > 3) {
                if (currentParagraph.length > 0) {
                    elements.push(
                        <p key={`p-${index}`} className="project-paragraph">
                            {currentParagraph.join(' ')}
                        </p>
                    );
                    currentParagraph = [];
                }
                elements.push(
                    <h3 key={`h-${index}`} className="project-section-title">
                        {line.replace(':', '')}
                    </h3>
                );
            }
            // Bullet points
            else if (line.trim().startsWith('•') || line.trim().startsWith('→')) {
                if (currentParagraph.length > 0) {
                    elements.push(
                        <p key={`p-${index}`} className="project-paragraph">
                            {currentParagraph.join(' ')}
                        </p>
                    );
                    currentParagraph = [];
                }
                elements.push(
                    <div key={`b-${index}`} className="project-bullet">
                        {line}
                    </div>
                );
            }
            // Numbered items
            else if (line.match(/^\d+\./)) {
                if (currentParagraph.length > 0) {
                    elements.push(
                        <p key={`p-${index}`} className="project-paragraph">
                            {currentParagraph.join(' ')}
                        </p>
                    );
                    currentParagraph = [];
                }
                elements.push(
                    <div key={`n-${index}`} className="project-numbered">
                        {line}
                    </div>
                );
            }
            // Empty lines = paragraph break
            else if (line.trim() === '') {
                if (currentParagraph.length > 0) {
                    elements.push(
                        <p key={`p-${index}`} className="project-paragraph">
                            {currentParagraph.join(' ')}
                        </p>
                    );
                    currentParagraph = [];
                }
            }
            // Regular text
            else {
                currentParagraph.push(line);
            }
        });

        // Flush remaining paragraph
        if (currentParagraph.length > 0) {
            elements.push(
                <p key="p-final" className="project-paragraph">
                    {currentParagraph.join(' ')}
                </p>
            );
        }

        return elements;
    };

    // Determine gallery layout based on image count
    const getGalleryClass = () => {
        if (!project.images) return '';
        if (project.images.length >= 10) return 'gallery-grid';
        if (project.images.length >= 4) return 'gallery-masonry';
        return 'gallery-stack';
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
                    <Link to="/#work" className="back-link">← Back</Link>

                    <h1 className="project-main-title">{project.title}</h1>
                    <p className="project-subtitle-simple">{project.subtitle}</p>

                    <div className="project-meta-simple">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.location}</span>
                        <span>•</span>
                        <span className={`status-tag status-${project.status}`}>
                            {getStatusLabel(project.status)}
                        </span>
                    </div>

                    {/* Tags */}
                    {project.details && (
                        <div className="project-tags">
                            {project.details.map((tag, i) => (
                                <span key={i} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Hero Image */}
            {project.image && (
                <section className="project-hero-image">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    />
                </section>
            )}

            {/* Description */}
            <section className="project-content-styled">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="project-description-content"
                >
                    {renderDescription(project.fullDescription)}
                </motion.div>
            </section>

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
                <section className={`project-gallery ${getGalleryClass()}`}>
                    {project.images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={image}
                                alt={`${project.title} ${index + 1}`}
                                loading="lazy"
                            />
                        </motion.div>
                    ))}
                </section>
            )}

            {/* Itch.io Embed */}
            {project.itchEmbed && (
                <section className="project-game-embed">
                    <div className="game-frame">
                        <iframe
                            src={project.itchEmbed}
                            width="100%"
                            height="620"
                            frameBorder="0"
                            allowFullScreen
                            title={`${project.title} - Play Game`}
                        />
                    </div>
                    {project.externalUrl && (
                        <p className="game-link">
                            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                🎮 Otevřít na itch.io →
                            </a>
                        </p>
                    )}
                </section>
            )}

            {/* External Link Button (for non-embedded) */}
            {project.externalUrl && !project.itchEmbed && (
                <section className="project-cta">
                    <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button"
                    >
                        {project.isAR ? '🚀 Launch AR Experience' : '🎮 Play on itch.io'}
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

            {/* Details Footer */}
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

            {/* Related Project */}
            {project.relatedProject && (
                <section className="project-related">
                    <Link to={`/work/${project.relatedProject}`} className="related-link">
                        → View Related Project
                    </Link>
                </section>
            )}
        </div>
    );
}

export default Project;
