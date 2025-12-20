import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
    // Generate a placeholder gradient for projects without images
    const placeholderStyle = {
        background: project.category === 'guerilla'
            ? 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)'
            : project.category === 'special'
                ? 'linear-gradient(135deg, #000 0%, #1a1a1a 100%)'
                : 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '3rem',
        color: project.category === 'official' ? '#000' : '#fff',
        letterSpacing: '-0.02em',
        fontWeight: 800,
        textTransform: 'uppercase',
    };

    const getStatusLabel = (status) => {
        switch (status) {
            case 'done': return 'REALIZOVÁNO';
            case 'in-progress': return 'PROBÍHÁ';
            case 'planned': return 'V PLÁNU';
            default: return status.toUpperCase();
        }
    };

    return (
        <Link to={`/work/${project.id}`} className="project-card">
            {project.images && project.images.length > 0 ? (
                <img
                    src={project.images[0]}
                    alt={project.title}
                    className="project-card-image"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        const placeholder = e.target.parentElement.querySelector('.placeholder');
                        if (placeholder) placeholder.style.display = 'flex';
                    }}
                />
            ) : (
                <div className="project-card-image placeholder" style={placeholderStyle}>
                    {project.title.charAt(0)}
                </div>
            )}

            <div className="project-card-overlay">
                <span
                    className={`status ${project.status === 'done' ? 'status-done' : 'status-progress'}`}
                    style={{
                        marginBottom: 'var(--space-sm)',
                        alignSelf: 'flex-start',
                        opacity: 0,
                        transform: 'translateY(20px)',
                        transition: 'all 0.3s ease 0.15s'
                    }}
                >
                    {getStatusLabel(project.status)}
                </span>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-subtitle">{project.subtitle}</p>
            </div>
        </Link>
    );
}

export default ProjectCard;
