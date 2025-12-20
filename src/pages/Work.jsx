import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { officialProjects, guerillaProjects, specialProjects } from '../data/projects';

function Work() {
    // Combine all projects and filter out planned ones
    const allProjects = [...officialProjects, ...guerillaProjects, ...specialProjects]
        .filter(p => p.status !== 'planned');

    return (
        <div className="work-minimal">
            <main className="work-list">
                {allProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.03 }}
                    >
                        <Link to={`/work/${project.id}`} className="work-list-item">
                            <span className="work-list-title">{project.title}</span>
                            <span className="work-list-year">{project.year}</span>
                        </Link>
                    </motion.div>
                ))}
            </main>
        </div>
    );
}

export default Work;
