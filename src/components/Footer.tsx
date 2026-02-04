import React from "react";
import "./Footer.css";

interface FooterProps {
  setCurrentPage?: (page: "home" | "contact") => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage("contact");
    }
  };

  return (
    <footer id="contacto" className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Info de contacto</h3>
          <p>📍 Barrio Ferroviario 33 M.C</p>
          <p>Junín, Buenos Aires 6000</p>
          <p>
            📧{" "}
            <a href="mailto:Info@camhoneybrothers.com">
              Info@camhoneybrothers.com
            </a>
          </p>
          <p>📞 +54 9 11 4673-4480 / +34 683 22 37 46</p>
        </div>

        <div className="footer-section">
          <h3>Menú de navegación</h3>
          <ul className="footer-nav">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (setCurrentPage) setCurrentPage("home");
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros">Nosotros</a>
            </li>
            <li>
              <a href="#exportacion">Exportación</a>
            </li>
            <li>
              <a href="#" onClick={handleContactClick}>
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; 2026 Cam Honey Brothers S.A. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
