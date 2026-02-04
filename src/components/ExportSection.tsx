import React, { useState, useEffect } from "react";
import "./ExportSection.css";

const ExportSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="exportacion" className="export-section">
      <div
        className="export-background"
        style={{
          backgroundPosition: `center ${offset * 0.5}px`,
        }}
      />
      <div className="export-container">
        <div className="export-content">
          <h2>Líderes en exportación</h2>
          <p className="export-description">
            La miel producida en nuestro país es considerada una de las de mejor
            calidad en el mundo. Nuestra Misión, proporcionar productos
            derivados del rubro alimenticio tanto en el mercado local como
            internacional trabajando día a día en la obtención y desarrollo de
            nuevas unidades de negocios y mercados.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
          alt="Exportación de miel"
          className="export-image"
        />
      </div>
    </section>
  );
};

export default ExportSection;
