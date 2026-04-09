import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Home from "./pages/Home";
import About from "./pages/About";
import "./index.css";
import profileImg from "./img/profile.jpeg";
import { Helmet } from "react-helmet";

function NavLinks() {
  const location = useLocation();

  return (
    <div className="nav-area">
      <nav className="site-nav">
        <Link to="/" className={location.pathname === "/" ? "active" : ""}>
          Inicio
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active" : ""}
        >
          Sobre Mí
        </Link>
      </nav>
      <div className="divider"></div>
      <nav className="social-links">
        <a
          href="https://github.com/nachoavi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-san-martin-b30b32204/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a href="mailto:luis17.sanmartin@gmail.com" aria-label="Correo">
          <Mail size={20} />
        </a>
      </nav>
    </div>
  );
}

function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <Router>
      <>
        <Helmet>
          <title>Inicio | Mi Portafolio</title>
        </Helmet>
      </>
      <div className="container">
        <header className="header">
          <div className="brand-block">
            <img
              src={profileImg}
              alt="Luis San Martin"
              className="profile-avatar"
            />
            <Link to="/" className="brand-copy">
              <span className="brand-name">Luis San Martin</span>
              <span className="brand-role">Full Stack Developer</span>
            </Link>
          </div>
          <NavLinks />
        </header>

        <motion.main
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={{ minHeight: "60vh" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>

        <footer className="footer">
          <div>© {new Date().getFullYear()} Luis San Martin.</div>
          <div>Disponible para nuevos desafios</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
