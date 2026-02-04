import React, { useState, useEffect } from "react";
import "./ProductsSection.css";

const ProductsSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="products-section">
      <div
        className="products-background"
        style={{
          backgroundPosition: `center ${offset * 0.5}px`,
        }}
      />
      <div className="products-container">
        <h2>Compramos tus productos</h2>
        <p className="products-subtitle">
          Compramos tus productos ofreciendo amplias facilidades para que puedas
          aprovechar tu trabajo y obtener el rendimiento esperado. Una gran
          oportunidad para crecer.
        </p>
        <div className="products-grid">
          <div className="product-card">
            <h3>MIEL</h3>
            <p>Compramos miel de la más alta calidad</p>
          </div>
          <div className="product-card">
            <h3>CERA</h3>
            <p>Adquisición de cera apícola</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
