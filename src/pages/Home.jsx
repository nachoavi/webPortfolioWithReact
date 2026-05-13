import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const taskFlowProject = {
  id: 1,
  title: "TaskFlow - Sistema de Gestión de Tareas",
  images: [
    "/TaskProjectIMGs/TaskManager.png",
    "/TaskProjectIMGs/Login.png",
    "/TaskProjectIMGs/MyTask.png",
    "/TaskProjectIMGs/UserManager.png",
  ],
  url: "https://task-project-front-psi.vercel.app/login",
  repoUrl: "https://github.com/nachoavi/taskProyectAPI",
  repoFrontUrl: "https://github.com/nachoavi/taskProjectFront",
  description:
    "Aplicación de gestión de tareas con autenticación segura, gestión de usuarios y panel administrativo. Los usuarios pueden crear, editar y organizar sus tareas, mientras los administradores gestionan usuarios, monitorean actividad y asignar tareas.",
  technologies: [
    "Node.js",
    "Express",
    "React",
    "JSON Web Token",
    "Prisma",
    "PostgreSQL",
  ],
  detailedDescription: {
    backend:
      "El backend está construido con Node.js y Express, utilizando Prisma como ORM para interactuar con PostgreSQL. Implementa autenticación robusta con JWT (JSON Web Token) que incluye refresh tokens para mantener sesiones seguras. La API RESTful proporciona endpoints para gestión de usuarios, tareas, y estadísticas del sistema.",
    frontend:
      "El frontend en React gestiona el estado global con Context API, ofreciendo una interfaz fluida para crear, editar y organizar tareas. Incluye filtrado por estado, prioridad y fecha, con animaciones suaves gracias a Framer Motion. El diseño responsivo se adapta a dispositivos móviles y escritorio.",
    database:
      "PostgreSQL almacena usuarios, tareas y registros de actividad. Prisma facilita las migraciones y queries tipadas. El schema incluye relaciones entre usuarios y tareas, con índices optimizados para búsquedas frecuentes.",
    security:
      " JWT con tokens de acceso y refresh, hash de contraseñas con bcrypt, protección CORS y rate limiting. Validación de datos con Zod en el backend.",
  },
};

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };
  const next = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };
  const goToSlide = (e, index) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      <button className="carousel-btn carousel-btn-prev" onClick={prev}>
        <ChevronLeft size={20} />
      </button>
      <button className="carousel-btn carousel-btn-next" onClick={next}>
        <ChevronRight size={20} />
      </button>
      <div className="carousel-dots">
        {images.map((_, i) => (
          <span
            key={i}
            className={`carousel-dot ${i === currentIndex ? "active" : ""}`}
            onClick={(e) => goToSlide(e, i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
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
          <a
            className="btn btn-primary"
            href="mailto:luis17.sanmartin@gmail.com"
          >
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

        <div className="projects-grid">
          <motion.a
            href={taskFlowProject.url}
            className="project-card"
            key={taskFlowProject.id}
            variants={itemVariants}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageCarousel images={taskFlowProject.images} />
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{taskFlowProject.title}</h3>
                <ArrowUpRight size={18} color="var(--text-secondary)" />
              </div>
              <p className="project-desc">{taskFlowProject.description}</p>
              <div className="project-links">
                <a
                  href={taskFlowProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Ver App Desplegada
                </a>
                <a
                  href={taskFlowProject.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Repositorio API
                </a>
                <a
                  href={taskFlowProject.repoFrontUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Repositorio Frontend
                </a>
              </div>
              <div className="tech-details">
                <div className="tech-section">
                  <h4>Backend</h4>
                  <p>{taskFlowProject.detailedDescription.backend}</p>
                </div>
                <div className="tech-section">
                  <h4>Frontend</h4>
                  <p>{taskFlowProject.detailedDescription.frontend}</p>
                </div>
                <div className="tech-section">
                  <h4>Base de Datos</h4>
                  <p>{taskFlowProject.detailedDescription.database}</p>
                </div>
                <div className="tech-section">
                  <h4>Seguridad</h4>
                  <p>{taskFlowProject.detailedDescription.security}</p>
                </div>
              </div>
              <div className="tech-stack">
                {taskFlowProject.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        </div>
      </motion.section>
    </>
  );
}
