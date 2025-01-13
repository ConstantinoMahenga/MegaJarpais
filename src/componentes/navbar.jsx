import React, { useState, useEffect } from 'react';
import '../estilo/navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg ${scrolled ? 'bg-dark navbar-dark' : 'bg-transparent navbar-light'} fixed-top`}
      style={{ padding: '0.8rem 2rem' }} // Ajustando o padding da navbar para dar mais espaço
    >
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img 
            src="../imagens/logo.png"  // Substitua pelo caminho real do seu logotipo
            alt="Logotipo" 
            style={{ height: '250px' }} // Aumentando o tamanho do logotipo
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Quem Somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Serviços
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
