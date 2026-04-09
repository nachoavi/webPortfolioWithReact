import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Mail, Sparkles } from "lucide-react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchProjects = async () => {
        try {
          const response = await fetch("http://localhost:5001/api/projects");
          if (response.ok) {
            const data = await response.json();
            setProjects(data);
          }
        } catch (error) {
          console.error("Error fetching projects:", error);
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
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const recruiterHighlights = [
    { label: "Tiempo de respuesta", value: "24h" },
    { label: "Proyectos reales", value: "10+" },
    { label: "Stack principal", value: "React + Node" },
  ];

  return (
    <>
      <motion.section className="hero" variants={itemVariants}>
        <span className="hero-badge">
          <Sparkles size={16} />
          Disponible para nuevos desafios
        </span>
        <h1>Desarrollador Full Stack enfocado en producto y resultados</h1>
        <p>
          Construyo experiencias web rapidas, mantenibles y orientadas al
          negocio. Mi enfoque combina codigo limpio, buenas practicas de
          arquitectura y una comunicacion clara con equipos tecnicos y no
          tecnicos.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="mailto:luis17.sanmartin@gmail.com">
            <Mail size={18} />
            Contactar
          </a>
          <a
            className="btn btn-secondary"
            href="https://www.linkedin.com/in/luis-san-martin-b30b32204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BriefcaseBusiness size={18} />
            Ver LinkedIn
          </a>
        </div>
        <div className="highlight-grid">
          {recruiterHighlights.map((item) => (
            <div key={item.label} className="highlight-card">
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="section-title">Trabajos Destacados</h2>
        <p className="section-intro">
          Proyectos donde priorizo performance, experiencia de usuario y
          mantenibilidad para escalar en entornos reales.
        </p>

        {loading ? (
          <div className="projects-status">Cargando proyectos...</div>
        ) : projects.length === 0 ? (
          <div className="projects-status">
            No hay proyectos cargados por ahora. Puedes revisar mis repositorios
            en GitHub para ver mas ejemplos.
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project) => (
              <motion.a
                href={project.url || "#"}
                className="project-card"
                key={project.id}
                variants={itemVariants}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    <ArrowUpRight size={18} color="var(--text-secondary)" />
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-stack">
                    {(Array.isArray(project.technologies)
                      ? project.technologies
                      : []
                    ).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
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
