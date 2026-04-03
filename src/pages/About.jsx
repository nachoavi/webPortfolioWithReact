import { motion } from 'framer-motion';
import { GraduationCap, Database, Code, BrainCircuit, Rocket } from 'lucide-react';

export default function About() {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
      }}
    >
      <motion.section className="hero" variants={itemVariants} style={{ paddingBottom: '3rem', borderBottom: 'none', marginBottom: '1rem' }}>
        <h1>Sobre Mí</h1>
        <p>Conectando el desarrollo de software tradicional con la innovación en inteligencia artificial. Transformo problemas complejos en soluciones digitales escalables y minimalistas.</p>
      </motion.section>

      <motion.section variants={itemVariants} style={{ marginBottom: '5rem' }}>
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <GraduationCap size={24} color="var(--text-primary)" /> Trayectoria Académica
        </h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" style={{ borderColor: '#ffffff' }}></div>
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
        <h2 className="section-title" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Code size={24} color="var(--text-primary)" /> Stack Tecnológico & IA
        </h2>
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon"><Rocket size={26} /></div>
            <h3>Ecosistema Frontend</h3>
            <p>Construcción de interfaces dinámicas, responsivas y atractivas utilizando <strong>JavaScript moderno</strong> y el ecosistema de <strong>React</strong>.</p>
          </div>

          <div className="skill-card">
            <div className="skill-icon"><Database size={26} /></div>
            <h3>Backend & Datos</h3>
            <p>Desarrollo de APIs eficientes con <strong>Node.js</strong> y <strong>Express</strong>, complementado con gestión de datos altamente escalable en entornos <strong>NoSQL</strong>.</p>
          </div>

          <div className="skill-card" style={{ borderColor: 'rgba(168, 85, 247, 0.2)' }}>
            <div className="skill-icon" style={{ color: '#a855f7' }}><BrainCircuit size={26} /></div>
            <h3 style={{ color: '#e9d5ff' }}>Integración de IA</h3>
            <p>Desarrollo a la vanguardia utilizando y orquestando LLMs como <strong>Claude</strong> y <strong>Gemini</strong> para potenciar y automatizar soluciones digitales avanzadas.</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
