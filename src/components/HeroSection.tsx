import React, { useState, useEffect } from "react";
import "./HeroSection.css";

const HeroSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="inicio" className="hero-section">
      <div
        className="hero-background"
        style={{
          backgroundPosition: `center ${offset * 0.5}px`,
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>CAM HONEY BROTHERS</h1>
        <p>Los mejores productos apícolas del mercado</p>
        <a href="#nosotros" className="btn-secondary">
          Descubre más
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
