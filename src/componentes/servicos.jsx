import React from 'react';
import { Link } from 'react-router-dom'; // Importe Link para redirecionar
import '../estilo/servicos.css'; // Arquivo de CSS externo para estilização

const ServicosSection = () => {
  return (
    <section id="services" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Nossos Serviços</h2>
        <div className="services-content row justify-content-center">
          {/* Serviço 1 */}
          <div className="service-item col-md-6 col-lg-3 text-center mb-4">
            <h3>Jardins sustentáveis</h3>
            <p>uso de plantas nativas, técnicas de captação de água pluvial e
            compostagem.</p>
            <br />
            <Link to="/servicos-detalhados" className="btn-saber-mais">Saber Mais</Link>
          </div>

          {/* Serviço 2 */}
          <div className="service-item col-md-6 col-lg-3 text-center mb-4">
            <h3>Paisagismo</h3>
            <p>Implantação de jardins: plantio de gramados, arbustos, flores e árvores de acordo com o
            projeto.</p>
            
            <Link to="/servicos-detalhados" className="btn-saber-mais">Saber Mais</Link>
          </div>

          {/* Serviço 3 */}
          <div className="service-item col-md-6 col-lg-3 text-center mb-4">
            <h3>Manutenção de Jardins</h3>
            <p>Recuperação de solos: adição de compostos ou correção do solo para melhorar qualidade</p>
            <Link to="/servicos-detalhados" className="btn-saber-mais">Saber Mais</Link>
          </div>

          {/* Serviço 4 */}
          <div className="service-item col-md-6 col-lg-3 text-center mb-4">
            <h3>Serviços Comerciais</h3>
            <p>Paisagismo corporativo: criação e manutenção de jardins e áreas externas de empresas,
            escritórios e condomínios.</p>
            <Link to="/servicos-detalhados" className="btn-saber-mais">Saber Mais</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicosSection;
