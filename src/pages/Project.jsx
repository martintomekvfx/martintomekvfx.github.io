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

    // Determine gallery layout based on image count
    const getGalleryClass = () => {
        if (project.galleryLayout) return `gallery-${project.galleryLayout}`;
        if (!project.images) return '';
        if (project.images.length >= 10) return 'gallery-grid';
        if (project.images.length >= 4) return 'gallery-masonry';
        return 'gallery-stack';
    };

    // ChompAR custom layout
    if (project.customLayout === 'chompar') {
        return <ChompARLayout project={project} getStatusLabel={getStatusLabel} />;
    }

    // Street Art Gallery custom layout
    if (project.customLayout === 'street-art') {
        return <StreetArtLayout project={project} getStatusLabel={getStatusLabel} getGalleryClass={getGalleryClass} />;
    }

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

                    {project.details && (
                        <div className="project-tags">
                            {project.details.map((tag, i) => (
                                <span key={i} className="project-tag">{tag}</span>
                            ))}
                        </div>
                    )}
                </motion.div>
            </section>

            {/* Hero Image - show for all projects including games */}
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
                    {project.fullDescription.split('\n\n').map((para, i) => (
                        <p key={i} className="project-paragraph">{para}</p>
                    ))}
                </motion.div>
            </section>

            {/* Gallery - use phone gallery for mobile games */}
            {project.images && project.images.length > 0 && (
                <section className={`project-gallery ${project.mobileGame ? 'gallery-phone' : getGalleryClass()}`}>
                    {project.images.map((image, index) => {
                        const imgUrl = typeof image === 'string' ? image : image.url;
                        const imgTitle = typeof image === 'string' ? null : image.title;

                        return (
                            <motion.div
                                key={index}
                                className="gallery-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src={imgUrl}
                                    alt={imgTitle || `${project.title} ${index + 1}`}
                                    loading="lazy"
                                />
                                {imgTitle && <div className="gallery-caption">{imgTitle}</div>}
                            </motion.div>
                        );
                    })}
                </section>
            )}

            {/* Itch.io Embed - centered phone-width for mobile games */}
            {project.itchEmbed && (
                <section className={`project-game-embed-full ${project.mobileGame ? 'mobile-game-embed' : ''}`}>
                    <h2 className="embed-title">Zahraj si</h2>
                    <div className="game-frame">
                        <iframe
                            src={project.itchEmbed}
                            width="100%"
                            height="660"
                            frameBorder="0"
                            allowFullScreen
                            title={`${project.title} - Play Game`}
                        />
                    </div>
                    {project.externalUrl && (
                        <p className="game-link">
                            <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                                🎮 Fullscreen na itch.io →
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
                    {project.videoDescription && (
                        <p className="video-description">{project.videoDescription}</p>
                    )}
                </section>
            )}

            {/* Related Project */}
            {project.relatedProject && (
                <section className="project-related">
                    <Link to={`/work/${project.relatedProject}`} className="related-link">
                        → Související projekt
                    </Link>
                </section>
            )}
        </div>
    );
}

// ChompAR Presentation-style Layout
function ChompARLayout({ project, getStatusLabel }) {
    return (
        <div className="project-detail chompar-layout">
            {/* Hero Section */}
            <section className="chompar-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="chompar-hero-content"
                >
                    <Link to="/#work" className="back-link">← Back</Link>

                    <div className="chompar-hero-grid">
                        <div className="chompar-hero-image">
                            <motion.img
                                src={project.heroImage || project.image}
                                alt="AR Scanning"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                            />
                        </div>
                        <div className="chompar-hero-text">
                            <p className="chompar-meta">FAMU • {project.year}</p>
                            <h1 className="chompar-title">{project.title}</h1>
                            <p className="chompar-description">{project.description}</p>

                            <a
                                href={project.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button chompar-cta"
                            >
                                🚀 Launch AR Experience
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Three Pillars */}
            {project.pillars && (
                <section className="chompar-pillars">
                    <p className="section-meta">TEORETICKÝ RÁMEC</p>
                    <h2 className="section-title">Tři pilíře</h2>

                    <div className="pillars-grid">
                        {project.pillars.map((pillar, i) => (
                            <motion.div
                                key={i}
                                className="pillar-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <img src={pillar.icon} alt={pillar.title} className="pillar-icon" />
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Game Modes */}
            {project.modes && (
                <section className="chompar-modes">
                    <p className="section-meta">HERNÍ DESIGN</p>
                    <h2 className="section-title">Dva módy</h2>

                    <div className="modes-grid">
                        {project.modes.map((mode, i) => (
                            <motion.div
                                key={i}
                                className={`mode-card ${i === 0 ? 'mode-light' : 'mode-dark'}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h3>{mode.title}</h3>
                                <p className="mode-type">{mode.type}</p>
                                <div className="mode-points">
                                    {mode.points.map((point, j) => (
                                        <p key={j}>{point}</p>
                                    ))}
                                </div>
                                <div className="mode-meaning">
                                    = {mode.meaning}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Privacy Features */}
            {project.privacy && (
                <section className="chompar-privacy">
                    <p className="section-meta">DESIGN</p>
                    <h2 className="section-title">Privacy-first</h2>

                    <div className="privacy-grid">
                        {project.privacy.map((feature, i) => (
                            <motion.div
                                key={i}
                                className="privacy-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                    <p className="privacy-note">Mobil jako <strong>sekundární nástroj</strong>.</p>
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

            {/* Full Description */}
            <section className="project-content-styled">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="project-description-content"
                >
                    {project.fullDescription.split('\n\n').map((para, i) => (
                        <p key={i} className="project-paragraph">{para}</p>
                    ))}
                </motion.div>
            </section>

            {/* Related Project */}
            {project.relatedProject && (
                <section className="project-related">
                    <Link to={`/work/${project.relatedProject}`} className="related-link">
                        → Street Art Gallery
                    </Link>
                </section>
            )}
        </div>
    );
}

// Street Art Gallery Layout with Subcategories
function StreetArtLayout({ project, getStatusLabel, getGalleryClass }) {
    return (
        <div className="project-detail street-art-layout">
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
                    </div>
                </motion.div>
            </section>

            {/* Intro */}
            <section className="project-content-styled">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="project-description-content"
                >
                    {project.fullDescription.split('\n\n').map((para, i) => (
                        <p key={i} className="project-paragraph">{para}</p>
                    ))}
                </motion.div>
            </section>

            {/* Subcategories */}
            {project.subcategories && project.subcategories.map((sub, i) => (
                <section key={i} className="street-art-section">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="street-art-section-title">{sub.title}</h2>
                        <p className="street-art-section-desc">{sub.description}</p>

                        {sub.images && sub.images.length > 0 && (
                            <div className="gallery-masonry">
                                {sub.images.map((image, j) => {
                                    const imgUrl = typeof image === 'string' ? image : image.url;
                                    const imgTitle = typeof image === 'string' ? null : image.title;

                                    return (
                                        <div key={j} className="gallery-item">
                                            <img
                                                src={imgUrl}
                                                alt={imgTitle || `${sub.title} ${j + 1}`}
                                                loading="lazy"
                                            />
                                            {imgTitle && <div className="gallery-caption">{imgTitle}</div>}
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </motion.div>
                </section>
            ))}

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
                    {project.videoDescription && (
                        <p className="video-description">{project.videoDescription}</p>
                    )}
                </section>
            )}

            {/* Related Project */}
            {project.relatedProject && (
                <section className="project-related">
                    <Link to={`/work/${project.relatedProject}`} className="related-link">
                        → ChompAR
                    </Link>
                </section>
            )}
        </div>
    );
}

export default Project;
