import React from "react";
import { useNavigate } from "react-router-dom";
import { FaLeaf, FaHandHoldingWater, FaPaintBrush, FaTools, FaTree, FaSeedling, FaGlobe, FaHome } from "react-icons/fa";

const COLORS = {
  primary: "#2f6a3e",
  secondary: "#a8d08d",
  textLight: "#fff",
  overlay: "rgba(0, 0, 0, 0.7)",
  cardShadow: "rgba(0, 0, 0, 0.1)",
  hoverShadow: "rgba(0, 0, 0, 0.2)",
  cardHover: "#3d7c4c",
};

const FONT_FAMILY = "'Roboto', sans-serif";

const services = [
  {
    title: "Consultoria e Projetos de Paisagismo",
    icon: <FaLeaf />,
    items: [
      "Consultoria ambiental: análise do espaço e sugestões para o uso sustentável.",
      "Elaboração de projetos paisagísticos: design de jardins, áreas externas e espaços verdes.",
      "Planejamento de irrigação: cálculo de sistemas eficientes de irrigação.",
    ],
  },
  {
    title: "Execução de Projetos de Paisagismo",
    icon: <FaHandHoldingWater />,
    items: [
      "Implantação de jardins: plantio de gramados, arbustos, flores e árvores.",
      "Criação de jardins temáticos: zen, mediterrâneos, tropicais, etc.",
      "Instalação de sistemas de irrigação: adequados às necessidades do jardim.",
      "Construção de elementos decorativos: fontes, esculturas, pérgolas, etc.",
    ],
  },
  {
    title: "Manutenção de Jardins",
    icon: <FaTools />,
    items: [
      "Corte de grama: manutenção periódica do gramado.",
      "Poda e roçagem: podas de plantas e arbustos.",
      "Controle de pragas e doenças.",
      "Adubação e recuperação de solos.",
    ],
  },
  {
    title: "Instalação de Paisagismo em Áreas Externas",
    icon: <FaPaintBrush />,
    items: [
      "Implantação de jardins verticais.",
      "Criação de áreas de lazer e convivência.",
      "Hortas e jardins comestíveis.",
      "Iluminação externa.",
    ],
  },
  {
    title: "Projetos Especiais e Sustentáveis",
    icon: <FaTree />,
    items: [
      "Jardins sustentáveis: uso de plantas nativas, técnicas de captação de água pluvial e compostagem.",
      "Projeto de jardins ecológicos: integração com a biodiversidade local e escolha de plantas adaptadas ao clima.",
      "Telhados verdes: implantação de jardins em telhados para promover o isolamento térmico e a sustentabilidade.",
    ],
  },
  {
    title: "Serviços de Jardinagem Especializada",
    icon: <FaSeedling />,
    items: [
      "Cuidados com plantas raras ou exóticas: manutenção de plantas que exigem cuidados especiais.",
      "Criação de aquários e lagos ornamentais: instalação de pequenos lagos, fontes ou aquários com plantas aquáticas.",
      "Manutenção de bonsais: cuidados especializados para essas plantas que exigem poda e modelagem.",
    ],
  },
  {
    title: "Serviços Comerciais",
    icon: <FaGlobe />,
    items: [
      "Paisagismo corporativo: criação e manutenção de jardins e áreas externas de empresas, escritórios e condomínios.",
      "Instalação de fachadas verdes: criação de jardins verticais ou fachada ajardinada em prédios e estabelecimentos comerciais.",
    ],
  },
  {
    title: "Reforma e Revitalização de Jardins",
    icon: <FaHome />,
    items: [
      "Revitalização de jardins antigos: renovação de espaços que precisam de novos projetos ou reparos.",
      "Troca de plantas e realinhamento de canteiros: adaptação ao novo clima ou estação.",
      "Substituição de sistemas de irrigação e drenagem: melhoria da eficiência do sistema de água do jardim.",
    ],
  }
];

const ServicePage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = COLORS.cardHover;
  };

  const handleButtonOut = (e) => {
    e.target.style.backgroundColor = COLORS.secondary;
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Serviços Mega JarPais</h1>
        <p style={styles.subheader}>Transformando seu espaço em um paraíso</p>
        <button
          style={styles.backButton}
          onClick={handleBackClick}
          onMouseOver={handleButtonHover}
          onMouseOut={handleButtonOut}
        >
          Voltar para o site
        </button>
      </div>
      <div style={styles.servicesContainer}>
        {services.map((service, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <div style={styles.icon}>{service.icon}</div>
              <h2 style={styles.cardTitle}>{index + 1}. {service.title}</h2>
            </div>
            <ul style={styles.list}>
              {service.items.map((item, idx) => (
                <li key={idx} style={styles.listItem}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: FONT_FAMILY,
    backgroundImage: "url(../imagens/imagem5.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    minHeight: "100vh",
    color: COLORS.textLight,
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
    backgroundColor: COLORS.overlay,
    padding: "20px",
    borderRadius: "10px",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  subheader: {
    fontSize: "1.2rem",
    marginTop: "10px",
    fontWeight: "300",
  },
  backButton: {
    backgroundColor: COLORS.secondary,
    color: COLORS.textLight,
    fontSize: "1rem",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
    transition: "background-color 0.3s",
    zIndex: 10, // Garantir que o botão fique acima de outros elementos
  },
  servicesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  card: {
    backgroundColor: COLORS.primary,
    color: COLORS.textLight,
    borderRadius: "10px",
    boxShadow: `0 4px 12px ${COLORS.cardShadow}`,
    padding: "20px",
    transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "2.5rem",
    marginRight: "15px",
    color: COLORS.secondary,
  },
  cardTitle: {
    fontSize: "1.5rem",
    fontWeight: "500",
    textAlign: "center",
  },
  list: {
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "1rem",
    marginBottom: "8px",
    fontWeight: "300",
  },
};

export default ServicePage;
