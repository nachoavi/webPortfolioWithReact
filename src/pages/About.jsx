import { motion } from "framer-motion";
import {
  GraduationCap,
  Database,
  Code,
  BrainCircuit,
  Rocket,
  Handshake,
  TimerReset,
} from "lucide-react";

export default function About() {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
      <motion.section className="hero hero-about" variants={itemVariants}>
        <h1>Sobre Mi</h1>
        <p>
          Conecto desarrollo de software con innovacion en inteligencia
          artificial para construir soluciones escalables, claras y faciles de
          mantener en equipos reales.
        </p>
      </motion.section>

      <motion.section variants={itemVariants} className="value-grid">
        <article className="value-card">
          <TimerReset size={20} />
          <h3>Entrega continua</h3>
          <p>Iteraciones cortas con foco en impacto medible y feedback rapido.</p>
        </article>
        <article className="value-card">
          <Handshake size={20} />
          <h3>Trabajo colaborativo</h3>
          <p>Comunicacion clara con stakeholders, diseno y equipos tecnicos.</p>
        </article>
        <article className="value-card">
          <BrainCircuit size={20} />
          <h3>IA aplicada</h3>
          <p>Automatizacion y asistentes inteligentes integrados al producto.</p>
        </article>
      </motion.section>

      <motion.section variants={itemVariants} className="about-section-gap">
        <h2 className="section-title section-title-with-icon">
          <GraduationCap size={24} color="var(--text-primary)" /> Trayectoria Académica
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot timeline-dot-active"></div>
            <div className="timeline-content">
              <h3>Analista Programador</h3>
              <span className="timeline-date">2024 • CFT Inacap</span>
              <p>Especialización en desarrollo de software, algoritmos avanzados, metodologías ágiles y creación de aplicaciones robustas preparadas para la industria tecnológica actual.</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Administrador General</h3>
              <span className="timeline-date">2022 • Instituto IPG</span>
              <p>Formación gerencial con una sólida base en gestión de proyectos, organización estratégica, y optimización de recursos, aportando una visión integral de negocio al desarrollo técnico.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="section-title section-title-with-icon">
          <Code size={24} color="var(--text-primary)" /> Stack Tecnológico & IA
        </h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <Rocket size={26} />
            </div>
            <h3>Ecosistema Frontend</h3>
            <p>
              Construccion de interfaces dinamicas, responsivas y atractivas
              utilizando <strong>JavaScript moderno</strong> y el ecosistema de
              <strong> React</strong>.
            </p>
          </div>

          <div className="skill-card">
            <div className="skill-icon">
              <Database size={26} />
            </div>
            <h3>Backend & Datos</h3>
            <p>
              Desarrollo de APIs eficientes con <strong>Node.js</strong> y
              <strong> Express</strong>, complementado con gestion de datos
              escalable en entornos <strong>NoSQL</strong>.
            </p>
          </div>

          <div className="skill-card skill-card-featured">
            <div className="skill-icon skill-icon-featured">
              <BrainCircuit size={26} />
            </div>
            <h3 className="skill-title-featured">Integracion de IA</h3>
            <p>
              Desarrollo con LLMs como <strong>Claude</strong> y
              <strong> Gemini</strong> para potenciar productos, optimizar flujos
              y acelerar la entrega de valor.
            </p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
