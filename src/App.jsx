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

function NavLinks() {
  const location = useLocation();

  return (
    <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
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
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-san-martin-b30b32204/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
        </a>
        <a href="mailto:luis17.sanmartin@gmail.com">
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
      <div className="container">
        <header className="header">
          <div className="logo">
            <img
              src={profileImg}
              alt="Profile"
              style={{
                width: "125px",
                height: "125px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Luis San Martin
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
          <div>
            © {new Date().getFullYear()} Luis San Martin. Todos los derechos
            reservados.
          </div>
          <div>Portafolio Minimalista</div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
