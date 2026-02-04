import React from "react";
import "./Header.css";

interface HeaderProps {
  currentPage?: "home" | "contact";
  setCurrentPage?: (page: "home" | "contact") => void;
}

const Header: React.FC<HeaderProps> = ({
  currentPage = "home",
  setCurrentPage,
}) => {
  const handleNavClick = (page: "home" | "contact") => {
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1
            onClick={() => handleNavClick("home")}
            style={{ cursor: "pointer" }}
          >
            CAM HONEY BROTHERS
          </h1>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("home");
                }}
                className={currentPage === "home" ? "active" : ""}
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                className={currentPage === "contact" ? "active" : ""}
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className="language-selector">
          <span>ES</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
