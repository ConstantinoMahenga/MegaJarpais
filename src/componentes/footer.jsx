import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaGlobe, FaWhatsapp, FaHome, FaSearch, FaCog, FaEnvelopeOpen, FaPhone } from 'react-icons/fa';

const Footer = () => {
  const styles = {
    contactLink: {
      color: "#ffffff", // Cor primária
      textDecoration: "none",
      fontWeight: "500",
    },
    contactLinkHover: {
      textDecoration: "underline",
    },
  };

  return (
    <footer
      style={{
        backgroundColor: '#0f3d0f', // Cor de fundo
        color: '#ffffff',
        textAlign: 'justify',
        backgroundImage: 'url("../imagens/imagem6.jpg")', // Caminho da imagem de fundo
        backgroundSize: 'cover', // Troque para 'contain' se quiser ajustar a imagem ao espaço
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundRepeat: 'no-repeat', // Não repete a imagem
        padding: '4rem 0', // Adiciona espaço ao redor
        position: 'relative', // Necessário para a camada de sobreposição
        overflow: 'hidden', // Evita que o conteúdo ultrapasse os limites do footer
        minHeight: '400px', // Define uma altura mínima para exibir a imagem completamente
      }}
      className="py-4"
    >
      {/* Sombra sobre a imagem de fundo */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Sombra escura
          zIndex: 1, // Coloca a camada de sombra abaixo do conteúdo
        }}
      ></div>

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row>
          {/* Seção de informações */}
          <Col md={4} xs={12} className="text-center text-md-start">
            <h5 style={{ color: '#0edf0e' }}>Informações</h5>
            <ul className="list-unstyled">
              <p><FaGlobe />{" "} Rua Correia de Brito, Ponta-gea</p>
              <p><FaPhone />{" "}
                <a href="tel:+258876018098" style={styles.contactLink}>
                  +258 87 601 8098
                </a>
              </p>
              <p> <FaPhone />{" "}
              <a href="tel:+25821285651" style={styles.contactLink}>
                  +258 82 128 5651
                </a>               
              </p>
              <p>
                <FaEnvelopeOpen />{" "}
                <a href="mailto:megajarpais@gmail.com" style={styles.contactLink}>
                  megaJarpais@gmail.com
                </a>
              </p>  
              <p>
                <FaEnvelopeOpen />{" "}
                <a href="mailto:Geral@Megajarpais.com" style={styles.contactLink}>
                  Geral@Megajarpais.com
                </a>
              </p>
            </ul>
          </Col>

          {/* Links úteis */}
          <Col md={4} xs={12} className="text-center text-md-start">
            <h5 style={{ color: '#0edf0e' }}>Links</h5>
            <ul className="list-unstyled">
              <li className="text-justify">
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: '#0edf0e' }}
                >
                  <FaHome /> Home
                </a>
              </li>
              <li className="text-justify">
                <a
                  href="/"
                  className="text-decoration-none"
                  style={{ color: '#0edf0e' }}
                >
                  <FaSearch /> Quem Somos
                </a>
              </li>
              <li className="text-justify">
                <a
                  href="/servicos"
                  className="text-decoration-none"
                  style={{ color: '#0edf0e' }}
                >
                  <FaCog /> Serviços
                </a>
              </li>
              <li className="text-justify">
                <a
                  href="/contato"
                  className="text-decoration-none"
                  style={{ color: '#0edf0e' }}
                >
                  <FaPhone /> Contacto
                </a>
              </li>
            </ul>
          </Col>

          {/* Ícones sociais */}
          <Col md={4} xs={12} className="text-center text-md-start">
            <h5 style={{ color: '#0edf0e' }}>Atendimento Rápido</h5>
            <div className="d-flex justify-content-center justify-content-md-start gap-3">
              <a
                href="https://web.facebook.com/people/Mega-JarPais/61571023850635/?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                style={{ color: '#0edf0e' }}
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/258876018098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                style={{ color: '#0edf0e' }}
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/megajarpais/?igsh=NGRsejhqNGt0cGds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                style={{ color: '#0edf0e' }}
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-light" />
        <Row>
          <Col className="text-center">
            <small>
              Desenvolvido por{' '}
              <span><a href='www.turing.co.mz' style={{ color: '#0edf0e' }}>Turing Tech</a></span> &copy;{' '}
              {new Date().getFullYear()}
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
