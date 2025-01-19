import React from 'react';
import '../estilo/contacto.css'; // Arquivo CSS para estilos
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelopeOpen, FaPhone } from 'react-icons/fa';

const ContactUs = () => {
  const styles = {
    contactLink: {
      color: "#2f6a3e", // Cor primária
      textDecoration: "none",
      fontWeight: "500",
    },
    contactLinkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Primeira Div: Frases de Transformação */}
          <div className="col-md-4 col-12 text-center text-md-start transform-section d-flex flex-column justify-content-center">
            <h3 className="highlight-text">Transformação</h3>
            <div className="transformation-phrases">
              <p>"A transformação começa quando você decide agir!"</p>
              <p>"Transforme o seu espaço com soluções criativas"</p>
              <p>"A mudança começa com um simples passo."</p>
            </div>
          </div>

          {/* Segunda Div: Contato-nos com ícones e informações */}
          <div className="col-md-8 col-12 d-flex flex-column justify-content-between align-items-end text-end contact-section">
            <h3 className="highlight-text underline-title">Contacte-nos</h3>
            <p>Entre em contacto para mais informações.</p>
      
            <p>
              <FaPhone />{" "}
              <a href="tel:+258876018098" style={styles.contactLink}>
                 +258 87 601 8098
                
              </a>
            </p>
    
            <p>
              <FaEnvelopeOpen />{" "}
              <a href="mailto:megajarpais@gmail.com" style={styles.contactLink}>
                megajarpais@gmail.com
              </a>
            </p>
            <p>
                <FaEnvelopeOpen />{" "}
                <a href="mailto:Geral@Megajarpais.com" style={styles.contactLink}>
                  Geral@Megajarpais.com
                </a>
              </p>
            <div className="social-icons">
              <a
                href="https://web.facebook.com/people/Mega-JarPais/61571023850635/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/258876018098"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/megajarpais/?igsh=NGRsejhqNGt0cGds"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FaInstagram />
              </a>
            </div>

            {/* Texto "Mega Jarpais" no fundo à direita */}
            <div className="contact-info">
              <p>Mega Jarpais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
