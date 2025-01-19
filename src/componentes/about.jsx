import React from 'react';
import '../estilo/about.css'; // Arquivo de CSS externo para estilização
import Carousel from 'react-bootstrap/Carousel'; // Certifique-se de instalar react-bootstrap

const AboutSection = () => {
  return (
    <section id="about" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Quem Somos</h2>
        <div className="about-content">
          {/* Div Carrossel */}
          <div className="carousel-container">
            <Carousel>
            <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../imagens/imagem2.jpg" // Substitua pelo caminho correto da sua imagem
                  alt="Imagem 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../imagens/imagem6.jpg" // Substitua pelo caminho correto da sua imagem
                  alt="Imagem 1"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../imagens/imagem7.jpeg" // Substitua pelo caminho correto da sua imagem
                  alt="Imagem 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../imagens/cachoeiras.jpg" // Substitua pelo caminho correto da sua imagem
                  alt="Imagem 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../imagens/imagem8.jpeg" // Substitua pelo caminho correto da sua imagem
                  alt="Imagem 4"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../imagens/oip.jpg" // Substitua pelo caminho correto da sua imagem
                  alt="Imagem 4"
                />
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Div Texto */}
          <div className="text-container">
            <h3>Missão</h3>
            <p>
              Nossa missão é oferecer soluções personalizadas que atendam às necessidades estéticas,
funcionais e ambientais de cada cliente, sempre com um compromisso firme e inabalável com a
sustentabilidade e as melhores práticas do setor de jardinagem e paisagismo. 
            </p>
            <p>
            Na Mega JarPais.Lda temos um firme compromisso com a sustentabilidade e com o uso
responsável dos recursos naturais. Acreditamos que cada projeto representa uma valiosa
oportunidade para gerar um impacto positivo no meio ambiente, ao mesmo tempo em que
buscamos melhorar a qualidade de vida das pessoas através da criação de espaços que
promovem o bem-estar e a harmonia com a natureza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
