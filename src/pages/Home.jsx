import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch projects from the backend
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/projects');
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <>
      <motion.section className="hero" variants={itemVariants}>
        <h1>Desarrollador Full Stack</h1>
        <p>Construyendo aplicaciones web minimalistas, rápidas y confiables. Apasionado por el código limpio y las interfaces con un gran diseño visual.</p>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="section-title">Trabajos Destacados</h2>

        {loading ? (
          <div style={{ color: 'var(--text-secondary)', padding: '2rem 0' }}>Cargando proyectos...</div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.a
                href="#"
                className="project-card"
                key={project.id}
                variants={itemVariants}
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="project-title">{project.title}</h3>
                    <ArrowUpRight size={18} color="var(--text-secondary)" />
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-stack">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </motion.section>
    </>
  );
}
