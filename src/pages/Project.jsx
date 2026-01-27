import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import ChompMap from '../components/ChompMap';
import TreesMap from '../components/TreesMap';
import FootprintVisualization from '../components/visualizations/FootprintVisualization';

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

    // Hybaj Film - artistic festival presentation
    if (project.customLayout === 'hybaj-film') {
        return <HybajFilmLayout project={project} />;
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

            {/* Media Rendering Helper */}
            {(() => {
                // For video-masonry layout, combine images and videos in one gallery
                const isVideoMasonry = project.galleryLayout === 'video-masonry';
                const hasImages = project.images && project.images.length > 0;
                const hasVideos = project.videos && project.videos.length > 0;

                // For video-only galleries (video-masonry with no images)
                const videoOnlyGallery = isVideoMasonry && !hasImages && hasVideos && (
                    <section className={`project-gallery gallery-video-masonry`}>
                        {project.videos.map((video, idx) => {
                            const videoPath = typeof video === 'string' ? video : video.url;
                            const isLocalVideo = videoPath.endsWith('.mp4') || videoPath.endsWith('.webm');

                            if (!isLocalVideo) return null;

                            return (
                                <motion.div
                                    key={`vid-${idx}`}
                                    className="gallery-item"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: idx * 0.03 }}
                                    viewport={{ once: true, margin: "100px" }}
                                >
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="none"
                                    >
                                        <source src={videoPath} type="video/mp4" />
                                    </video>
                                </motion.div>
                            );
                        })}
                    </section>
                );

                const gallerySection = (
                    hasImages && (
                        <section className={`project-gallery ${project.mobileGame ? 'gallery-phone' : getGalleryClass()}`}>
                            {project.images.map((image, index) => {
                                const imgUrl = typeof image === 'string' ? image : image.url;
                                const imgTitle = typeof image === 'string' ? null : image.title;

                                return (
                                    <motion.div
                                        key={`img-${index}`}
                                        className="gallery-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.02 }}
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

                            {/* Include videos in the same gallery for video-masonry layout */}
                            {isVideoMasonry && project.videos && project.videos.map((video, idx) => {
                                const videoPath = typeof video === 'string' ? video : video.url;
                                const isLocalVideo = videoPath.endsWith('.mp4') || videoPath.endsWith('.webm');

                                if (!isLocalVideo) return null;

                                return (
                                    <motion.div
                                        key={`vid-${idx}`}
                                        className="gallery-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: (project.images.length + idx) * 0.02 }}
                                        viewport={{ once: true }}
                                    >
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            preload="none"
                                        >
                                            <source src={videoPath} type="video/mp4" />
                                        </video>
                                    </motion.div>
                                );
                            })}
                        </section>
                    )
                );

                // Skip separate video section for video-masonry (videos are in gallery)
                const videoSection = (
                    !isVideoMasonry && (project.videoUrl || (project.videos && project.videos.length > 0)) && (
                        <section className="project-videos">
                            {/* Render legacy videoUrl if no videos array */}
                            {project.videoUrl && !project.videos && (
                                <div className="project-video">
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
                                </div>
                            )}

                            {/* Render multiple videos from array */}
                            {project.videos && project.videos.map((video, idx) => {
                                // Support both string paths and object format
                                const videoPath = typeof video === 'string' ? video : video.url;
                                const videoDesc = typeof video === 'string' ? null : video.description;
                                const isLocalVideo = videoPath.endsWith('.mp4') || videoPath.endsWith('.webm') || videoPath.endsWith('.mov');

                                return (
                                    <motion.div
                                        key={idx}
                                        className="project-video-item"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        {isLocalVideo ? (
                                            <video
                                                controls
                                                preload="metadata"
                                                className="local-video"
                                            >
                                                <source src={videoPath} type="video/mp4" />
                                                Your browser does not support the video tag.
                                            </video>
                                        ) : (
                                            <div className="video-container">
                                                <iframe
                                                    src={videoPath.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/').split('&')[0]}
                                                    title={`${project.title} video ${idx + 1}`}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                />
                                            </div>
                                        )}
                                        {videoDesc && (
                                            <p className="video-description">{videoDesc}</p>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </section>
                    )
                );

                if (videoOnlyGallery) {
                    return videoOnlyGallery;
                }

                if (project.videoFirst) {
                    return (
                        <>
                            {videoSection}
                            {gallerySection}
                        </>
                    );
                } else {
                    return (
                        <>
                            {gallerySection}
                            {videoSection}
                        </>
                    );
                }
            })()}

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

            {/* Related Projects - support both single and array */}
            {(project.relatedProject || project.relatedProjects) && (
                <section className="project-related">
                    <h3 className="related-title">Související projekty</h3>
                    <div className="related-links">
                        {project.relatedProject && (
                            <Link to={`/work/${project.relatedProject}`} className="related-link">
                                → {project.relatedProject}
                            </Link>
                        )}
                        {project.relatedProjects && project.relatedProjects.map((relId, idx) => (
                            <Link key={idx} to={`/work/${relId}`} className="related-link">
                                → {relId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                            </Link>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}

// ChompAR - Simple, Clean Layout
function ChompARLayout({ project, getStatusLabel }) {
    return (
        <div className="project-detail chompar-layout">
            {/* Hero Section - White background, clean */}
            <section className="chompar-hero">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="chompar-hero-content"
                >
                    <Link to="/#work" className="back-link">← Back</Link>

                    <div className="chompar-hero-grid">
                        <div className="chompar-hero-visual">
                            <motion.img
                                src={project.heroAnimation || project.image}
                                alt="Chomp Animation"
                                className="chompar-eat-anim"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
                            />
                        </div>
                        <div className="chompar-hero-text">
                            <p className="chompar-meta">{project.year} • {project.location}</p>
                            <h1 className="chompar-title">{project.title}</h1>
                            <p className="chompar-description">{project.description}</p>

                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Lore Section */}
            {project.lore && (
                <section className="chompar-lore">
                    <div className="chompar-container">
                        <h2 className="chompar-section-title">{project.lore.title}</h2>
                        <div className="chompar-lore-content">
                            {project.lore.paragraphs.map((para, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {para}
                                </motion.p>
                            ))}
                        </div>
                        {project.stats && (
                            <div className="chompar-stats">
                                <div className="chompar-stat">
                                    <span className="chompar-stat-number">{project.stats.totalChomps}</span>
                                    <span className="chompar-stat-label">Chompů</span>
                                </div>
                                <div className="chompar-stat">
                                    <span className="chompar-stat-number">{project.stats.areas.length}</span>
                                    <span className="chompar-stat-label">Oblastí</span>
                                </div>
                                <div className="chompar-stat">
                                    <span className="chompar-stat-number">2</span>
                                    <span className="chompar-stat-label">Týmy</span>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Map Section */}
            {project.chompLocations && project.chompLocations.length > 0 && (
                <section className="chompar-map-section">
                    <div className="chompar-container">
                        <h2 className="chompar-section-title">Mapa Chompů</h2>
                        <p className="chompar-map-subtitle">
                            {project.stats?.totalChomps} lokací v Praze a okolí
                        </p>
                        <div className="chompar-map-wrapper">
                            <ChompMap />
                        </div>
                    </div>
                </section>
            )}

            {/* How It Works - 3 simple steps */}
            {project.howItWorks && (
                <section className="chompar-how">
                    <div className="chompar-container">
                        <h2 className="chompar-section-title">Jak to funguje</h2>
                        <div className="chompar-steps">
                            {project.howItWorks.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="chompar-step"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={item.icon} alt={item.step} className="chompar-step-icon" />
                                    <h3>{item.step}</h3>
                                    <p>{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Play Section - above gallery */}
            {project.gameUrl && (
                <section className="chompar-play-section">
                    <div className="chompar-container">
                        <a
                            href={project.gameUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="chompar-play-btn chompar-play-btn-large"
                        >
                            ▶ PLAY GAME
                        </a>
                    </div>
                </section>
            )}

            {/* Gallery - Street Chomps + App Screenshots */}
            {project.galleryImages && project.galleryImages.length > 0 && (
                <section className="chompar-gallery-section">
                    <div className="chompar-container">
                        <h2 className="chompar-section-title">Galerie</h2>
                        <div className="chompar-gallery-grid">
                            {project.galleryImages.map((img, i) => (
                                <motion.div
                                    key={i}
                                    className="chompar-gallery-item"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: i * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <img src={img.url} alt={img.title} />
                                    <span className="chompar-gallery-caption">{img.title}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Video */}
            {project.videoUrl && (
                <section className="chompar-video-section">
                    <div className="chompar-container">
                        <div className="chompar-video-wrapper">
                            <iframe
                                src={project.videoUrl.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/').split('&')[0]}
                                title={project.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                        {project.videoDescription && (
                            <p className="chompar-video-desc">{project.videoDescription}</p>
                        )}
                    </div>
                </section>
            )}

            {/* Related */}
            {project.relatedProject && (
                <section className="chompar-related">
                    <div className="chompar-container">
                        <Link to={`/work/${project.relatedProject}`} className="chompar-related-link">
                            → Street Art Gallery
                        </Link>
                    </div>
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
                            <div className={`project-gallery gallery-${project.galleryLayout || 'mixed'}`}>
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

            {/* Videos */}
            {(project.videoUrl || (project.videos && project.videos.length > 0)) && (
                <section className="project-videos">
                    {/* Render legacy videoUrl if no videos array */}
                    {project.videoUrl && !project.videos && (
                        <div className="project-video">
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
                        </div>
                    )}

                    {/* Render multiple videos from array */}
                    {project.videos && project.videos.map((video, idx) => (
                        <div key={idx} className="project-video-item">
                            <div className="project-video">
                                <div className="video-container">
                                    <iframe
                                        src={video.url.replace('youtu.be/', 'youtube.com/embed/').replace('watch?v=', 'embed/').split('&')[0]}
                                        title={`${project.title} video ${idx + 1}`}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                {video.description && (
                                    <p className="video-description">{video.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
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

// Hybaj Film - Artistic Festival Layout
function HybajFilmLayout({ project }) {
    // Extract YouTube video ID
    const getYouTubeId = (url) => {
        const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
        return match ? match[1] : null;
    };

    const videoId = project.videoUrl ? getYouTubeId(project.videoUrl) : null;

    // Animated cursor state
    const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 });
    const [cursorVisible, setCursorVisible] = React.useState(false);

    React.useEffect(() => {
        if (!project.customCursor) return;

        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
            setCursorVisible(true);
        };

        const handleMouseLeave = () => setCursorVisible(false);
        const handleMouseEnter = () => setCursorVisible(true);

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [project.customCursor]);

    return (
        <div className={`hybaj-layout ${project.customCursor ? 'custom-cursor-active' : ''}`}>
            {/* Animated Cursor - follows mouse, hides system cursor */}
            {project.customCursor && cursorVisible && (
                <div
                    className="animated-cursor"
                    style={{
                        position: 'fixed',
                        left: cursorPos.x - 16,
                        top: cursorPos.y - 16,
                        width: 32,
                        height: 32,
                        pointerEvents: 'none',
                        zIndex: 9999,
                    }}
                >
                    <img src={project.customCursor} alt="" style={{ width: '100%', height: '100%' }} />
                </div>
            )}
            {/* Frameless Video Hero */}
            <section className="hybaj-video-hero">
                {videoId && (
                    <div className="hybaj-video-container">
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&controls=1&showinfo=0&color=white`}
                            title={project.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                )}
            </section>

            {/* Title */}
            <section className="hybaj-title-section">
                <motion.h1
                    className="hybaj-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    {project.title}
                </motion.h1>
                {project.subtitle && (
                    <motion.p
                        className="hybaj-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        {project.subtitle}
                    </motion.p>
                )}
            </section>

            {/* Content: Text + Chips Sidebar */}
            <section className="hybaj-content-section">
                {/* Text on the left - USE LONG DESCRIPTIONS */}
                <motion.div
                    className="hybaj-text-column"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* English long description first */}
                    <div className="hybaj-text-block">
                        {(project.fullDescriptionEn || project.descriptionEn || '').split('\n\n').map((para, i) => (
                            <p key={`en-${i}`} className="hybaj-paragraph hybaj-primary">
                                {para}
                            </p>
                        ))}
                    </div>

                    {/* Czech long description */}
                    <div className="hybaj-text-block hybaj-secondary">
                        {(project.fullDescription || project.descriptionCz || '').split('\n\n').map((para, i) => (
                            <p key={`cz-${i}`} className="hybaj-paragraph">
                                {para}
                            </p>
                        ))}
                    </div>
                </motion.div>

                {/* Chips on the right */}
                {project.filmDetails && (
                    <motion.div
                        className="hybaj-chips-column"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {project.filmDetails.technique && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Technique</span>
                                <span className="hybaj-chip-value">{project.filmDetails.technique}</span>
                            </div>
                        )}
                        {project.filmDetails.director && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Director</span>
                                <span className="hybaj-chip-value">{project.filmDetails.director}</span>
                            </div>
                        )}
                        {project.filmDetails.camera && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Camera</span>
                                <span className="hybaj-chip-value">{project.filmDetails.camera}</span>
                            </div>
                        )}
                        {project.filmDetails.tools && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Tools</span>
                                <span className="hybaj-chip-value">{project.filmDetails.tools}</span>
                            </div>
                        )}
                        {project.filmDetails.duration && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Duration</span>
                                <span className="hybaj-chip-value">{project.filmDetails.duration}</span>
                            </div>
                        )}
                        {project.year && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Year</span>
                                <span className="hybaj-chip-value">{project.year}</span>
                            </div>
                        )}
                        {project.filmDetails.country && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Country</span>
                                <span className="hybaj-chip-value">{project.filmDetails.country}</span>
                            </div>
                        )}
                        {project.filmDetails.color && (
                            <div className="hybaj-chip">
                                <span className="hybaj-chip-label">Color</span>
                                <span className="hybaj-chip-value">{project.filmDetails.color}</span>
                            </div>
                        )}

                        {/* Source Code Links - in chips column */}
                        {project.sourceCode && (
                            <div className="hybaj-source-section">
                                <div className="hybaj-chip hybaj-chip-source">
                                    <span className="hybaj-chip-label">Source Code</span>
                                    <div className="hybaj-chip-links">
                                        {Array.isArray(project.sourceCode) ? (
                                            project.sourceCode.map((repo, i) => (
                                                <a
                                                    key={i}
                                                    href={repo.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="hybaj-chip-link"
                                                >
                                                    {repo.name}
                                                </a>
                                            ))
                                        ) : (
                                            <a
                                                href={project.sourceCode}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hybaj-chip-link"
                                            >
                                                GitHub
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </motion.div>
                )}
            </section>

            {/* Footprint Visualization */}
            {project.id === 'footprint' && (
                <section className="hybaj-visualization-section" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: 'var(--space-xl) var(--space-md)',
                    marginBottom: 'var(--space-xxl)'
                }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <FootprintVisualization
                            width={window.innerWidth < 850 ? window.innerWidth - 40 : 800}
                            height={600}
                            autoPlay={true}
                            soundEnabled={true}
                        />
                    </motion.div>
                </section>
            )}

            {/* Map Section - for projects with location data */}
            {project.showMap && (
                <section className="hybaj-map-section">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <TreesMap />
                    </motion.div>
                </section>
            )}

            {/* Photo Gallery - for image-based projects */}
            {project.images && project.images.length > 0 && (
                <section className="hybaj-gallery-section">
                    <div className="hybaj-gallery">
                        {project.images.map((img, i) => (
                            <motion.div
                                key={i}
                                className="hybaj-gallery-item"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <img src={img} alt={`${project.title} - ${i + 1}`} loading="lazy" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Animated Texture - if present */}
            {project.animatedTexture && (
                <section className="hybaj-texture-section">
                    <motion.div
                        className="hybaj-texture"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                    >
                        <img src={project.animatedTexture} alt="Animated texture" />
                    </motion.div>
                </section>
            )}

            {/* Back Link */}
            <section className="hybaj-back-section">
                <Link to="/#work" className="hybaj-back-link">
                    ←
                </Link>
            </section>
        </div>
    );
}

export default Project;

