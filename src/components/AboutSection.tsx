import React, { useState, useEffect } from "react";
import "./AboutSection.css";

const AboutSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="nosotros" className="about-section">
      <div
        className="about-background"
        style={{
          backgroundPosition: `center ${offset * 0.5}px`,
        }}
      />
      <div className="about-container">
        <div className="about-content">
          <h2>Nosotros</h2>
          <p>
            Cam Honey Brothers S.A. nace en 2014 con el objetivo de suministrar
            productos de calidad tanto en el mercado nacional como
            internacional. Nos caracteriza la experiencia y compromiso sumando
            al Know-How aplicado fruto de años de experiencia en el sector
            Apícola atendiendo los requerimientos y necesidades de nuestros
            clientes.
          </p>
          <p>
            Nuestra visión, ser líderes en el mercado de exportación de miel,
            cera y demás productos derivados brindando la máxima calidad,
            desarrollado por un equipo de profesionales idóneos en la materia y
            sustentado a lo largo del tiempo a través de las buenas prácticas de
            manufactura, técnicas y comerciales.
          </p>
          <a href="#contacto" className="btn-primary">
            Conocé más
          </a>
        </div>
        <div className="about-image">
          <img
            src="https://camhoneybrothers.com/wp-content/uploads/2024/01/apiary-1866740_1280-e1631677567705-400x400.jpg"
            alt="Apiary"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
