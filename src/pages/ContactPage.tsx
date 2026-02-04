import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí se enviaría el formulario a un servidor
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1>Contactanos</h1>
          <p>Estamos aquí para responder todas tus preguntas</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-info-section">
            <h2>Información de Contacto</h2>

            <div className="contact-info-card">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h3>Ubicación</h3>
                <p>
                  Barrio Ferroviario 33 M.C
                  <br />
                  Junín, Buenos Aires 6000
                  <br />
                  Argentina
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:Info@camhoneybrothers.com">
                    Info@camhoneybrothers.com
                  </a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h3>Teléfono</h3>
                <p>
                  <a href="tel:+541146734480">+54 9 11 4673-4480</a>
                  <br />
                  <a href="tel:+34683223746">+34 683 22 37 46</a>
                </p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon">🕐</div>
              <div className="contact-details">
                <h3>Horario de Atención</h3>
                <p>
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábado: 9:00 - 13:00
                  <br />
                  Domingo: Cerrado
                </p>
              </div>
            </div>

            <div className="social-section">
              <h3>Síguenos</h3>
              <div className="social-links">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  f
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  𝕏
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  📷
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <h2>Envíanos un Mensaje</h2>
            {submitted && (
              <div className="success-message">
                ¡Mensaje enviado correctamente! Nos pondremos en contacto
                pronto.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nombre *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+54 9 11 XXXX-XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Asunto *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="consulta">Consulta General</option>
                  <option value="compra-miel">Compra de Miel</option>
                  <option value="compra-cera">Compra de Cera</option>
                  <option value="exportacion">Exportación</option>
                  <option value="partnership">Partnership</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Mensaje *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Cuéntanos más sobre tu consulta..."
                  rows={5}
                />
              </div>

              <button type="submit" className="btn-submit">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <h2>Ubicación</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.2481566476747!2d-60.388889!3d-34.585556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d5c5c5c5c5c5%3A0x0!2sBar rio%20Ferroviario%2C%20Jun%C3%ADn%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
