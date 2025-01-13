import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSection from './componentes/about';
import ServicosSection from './componentes/servicos';
import ContactUs from './componentes/contacto';
import ServicosDetalhados from './servicosPage.jsx';
import QRCodeGenerator from './QRCodeGenerator';

// Importar os ícones do react-icons
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const App = () => {
    const styles = {
        body: {
            margin: '0',
            padding: '0',
            fontFamily: "'Arial', sans-serif",
            backgroundColor: '#f5f5f5',
        },
        hero: {
            backgroundImage: 'url(./imagens/jardim.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '600px',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: '#fff',
            textAlign: 'left',
            padding: '0 50px',
            overflow: 'hidden',
            position: 'relative',
        },
        heroOverlay: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 0,
        },
        heroContent: {
            position: 'relative',
            zIndex: 1,
            paddingBottom: '60px',
        },
        logo: {
            width: '120px',
            marginBottom: '15px',
        },
        title: {
            fontSize: '2.8rem',
            fontWeight: 'bold',
            lineHeight: '1.1',
            textTransform: 'uppercase',
            textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)',
        },
        subTitle: {
            fontSize: '1.2rem',
            fontWeight: '300',
            marginTop: '10px',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.2)',
        },
        buttonsContainer: {
            display: 'flex',
            gap: '15px',
            marginTop: '25px',
        },
        button: {
            backgroundColor: '#32a852',
            color: '#fff',
            padding: '12px 25px',
            fontSize: '0.9rem',
            borderRadius: '30px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 'bold',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
        },
        contactButton: {
            backgroundColor: 'transparent',
            color: '#fff',
            padding: '12px 25px',
            fontSize: '0.9rem',
            borderRadius: '30px',
            textTransform: 'uppercase',
            textDecoration: 'none',
            fontWeight: 'bold',
            border: '2px solid #8B4513',
            transition: 'background-color 0.3s ease',
            cursor: 'pointer',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        },
        contactButtonHover: {
            backgroundColor: 'rgba(139, 69, 19, 0.2)',
        },
        buttonHover: {
            backgroundColor: '#1f8c3a',
        },
        socialIconsContainer: {
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            zIndex: 2,
        },
        socialIcons: {
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
        },
        icon: {
            width: '35px',
            height: '35px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '2px solid #8B4513',
            cursor: 'pointer',
            transition: 'transform 0.3s ease',
        },
        iconHover: {
            transform: 'scale(1.1)',
        },
    };

    const handleButtonHover = (e) => {
        if (e.target.classList.contains('contact-button')) {
            e.target.style.backgroundColor = styles.contactButtonHover.backgroundColor;
            return;
        }
        e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
    };
    const handleButtonOut = (e) => {
        if (e.target.classList.contains('contact-button')) {
            e.target.style.backgroundColor = 'transparent';
            return;
        }
        e.target.style.backgroundColor = '#32a852';
    };

    return (
        <Router>
            <div style={styles.body}>
              
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>  <Navbar />
                                <section id="home" style={styles.hero}>
                                    <div style={styles.heroOverlay}></div>
                                    <div style={styles.heroContent}>
                                       <br />
                                       <br />
                                       <br />
                                       <br />
                                       <br />
                                       <br />
                                       <br />
                                       <br />
                                        <h1 style={styles.title}>
                                            Projetos de<br />
                                            Execução &<br />
                                            Manutenção de Jardins
                                        </h1>
                                        <p style={styles.subTitle}>
                                            Transformando seu espaço em um paraíso
                                        </p>
                                        <div style={styles.buttonsContainer}>
                                            <a
                                                href="/servicos-detalhados"
                                                // Link to="/servicos-detalhados" className="btn-saber-mais">Saber Mais</Link>
                                                style={styles.button}
                                                onMouseOver={handleButtonHover}
                                                onMouseOut={handleButtonOut}
                                            >
                                                Nossos Projetos
                                            </a>
                                            <a
                                                href="#contact"
                                                style={styles.contactButton}
                                                onMouseOver={handleButtonHover}
                                                onMouseOut={handleButtonOut}
                                                className="contact-button"
                                            >
                                                Contacto
                                            </a>
                                        </div>
                                    </div>
                                    <div style={styles.socialIconsContainer}>
                                        <div style={styles.socialIcons}>
                                            <div
                                                style={styles.icon}
                                                onMouseOver={(e) =>
                                                    (e.target.style.transform = styles.iconHover.transform)
                                                }
                                                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                                            >
                                                <FaFacebookF size={20}  href='https://web.facebook.com/people/Mega-JarPais/61571023850635/?mibextid=ZbWKwL' color="#fff"/> {/* Ícone Branco */}
                                            </div>
                                            <div
                                                style={styles.icon}
                                                onMouseOver={(e) =>
                                                    (e.target.style.transform = styles.iconHover.transform)
                                                }
                                                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                                            >
                                                <FaInstagram size={20} href='https://www.instagram.com/megajarpais/?igsh=NGRsejhqNGt0cGds' color="#fff" /> {/* Ícone Branco */}
                                            </div>
                                            <div
                                                style={styles.icon}
                                                onMouseOver={(e) =>
                                                    (e.target.style.transform = styles.iconHover.transform)
                                                }
                                                onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
                                            >
                                                <FaWhatsapp size={20} href='"https://wa.me/258876018098"' color="#fff" /> {/* Ícone Branco */}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <AboutSection />
                                <ServicosSection />
                                <ContactUs />
                            </>
                        }
                    />
                    <Route path="/servicos-detalhados" element={<ServicosDetalhados />} />
                    <Route path="/gerador-qr" element={<QRCodeGenerator />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;