const DAY_SECONDS = 24 * 60 * 60;
const JWT_EXPIRATION_DAYS = 7;
export const JWT_EXPIRATION_TIME = DAY_SECONDS * JWT_EXPIRATION_DAYS;

export const LIMIT = 10;

export const products = [
  "Soja",
  "Milho",
  "Açaí",
  "Mandioca",
  "Algodão",
  "Cacau",
  "Banana",
  "Cana",
  "Abacaxi",
  "Dendê",
  "Café",
  "Arroz",
  "Feijão",
  "Outros",
];

export const practicesData = [
  {
    name: "Rotação de Culturas",
    advantage:
      "Melhora a qualidade do solo e reduz a necessidade de fertilizantes químicos.",
    description:
      "Alterna diferentes culturas em uma sequência planejada para evitar o esgotamento do solo.",
    products: [1, 2],
  },
  {
    name: "Plantio Direto",
    advantage: "Previne a erosão do solo e economiza tempo e recursos",
    description:
      "Semeia diretamente sobre a cobertura vegetal existente, sem revolvimento do solo.",
    products: [1, 2, 4, 5, 8, 12],
  },
  {
    name: "Uso de Sementes Certificadas",
    advantage:
      "Aumenta a produtividade e a resistência das culturas a doenças.",
    description:
      "Utiliza sementes de alta qualidade e certificadas para garantir o vigor das plantas.",
    products: [1],
  },
  {
    name: "Controle Integrado de Pragas",
    advantage: "Reduz o uso de pesticidas e minimiza danos às culturas.",
    description:
      "Combina várias técnicas para controlar pragas, incluindo uso de predadores naturais e práticas culturais.",
    products: [1, 5, 11],
  },
  {
    name: "Manejo Sustentável das Palmeiras",
    advantage:
      "Preserva a biodiversidade e garante a disponibilidade contínua do açaí e do dendê.",
    description:
      "Realiza a colheita seletiva de frutos, evitando danos às palmeiras.",
    products: [1, 5, 11],
  },
  {
    name: "Cultivo Consorciado com Leguminosas",
    advantage:
      "Melhora o solo, aumenta a produtividade e reduz a necessidade de fertilizantes.",
    description:
      "Planta diferentes culturas juntas para beneficiar o solo e aumentar a biodiversidade.",
    products: [2, 13],
  },
  {
    name: "Manejo Integrado de Nutrientes",
    advantage:
      "Maximiza a eficiência do uso de fertilizantes e reduz a lixiviação de nutrientes",
    description:
      "Monitora e ajusta o uso de fertilizantes com base nas necessidades das culturas.",
    products: [2, 7, 11],
  },
  {
    name: "Manejo Adequado da Água",
    advantage: "Evita o desperdício de água e a degradação do solo.",
    description:
      "Utiliza técnicas para evitar desperdício de água, como irrigação eficiente.",
    products: [4, 8, 9],
  },

  {
    name: "Uso de Algodão Transgênico de Baixo Impacto",
    advantage: "Reduz o uso de pesticidas e aumenta a produtividade.",
    description: "Planta algodão transgênico resistente a pragas.",
    products: [5],
  },
  {
    name: "Agroflorestamento",
    advantage:
      "Promove a conservação da biodiversidade, sequestro de carbono e gera receita adicional com produtos florestais.",
    description:
      "Integra árvores em sistemas de cultivo para benefícios ambientais e econômicos.",
    products: [6, 11],
  },
  {
    name: "Sombreamento com Árvores Nativas",
    advantage:
      "Melhora a qualidade do café e protege contra o estresse térmico.",
    description: "Planta árvores nativas para fornecer sombra às culturas.",
    products: [6, 10],
  },
  {
    name: "Práticas Orgânicas",
    advantage:
      "Reduz a exposição a produtos químicos tóxicos e promove alimentos mais saudáveis.",
    description:
      "Evita o uso de pesticidas e fertilizantes sintéticos, priorizando métodos naturais.",
    products: [6, 11],
  },
  {
    name: "Cultivo em Áreas Já Degradadas",
    advantage:
      "Recupera áreas degradadas, contribuindo para a restauração ecológica.",
    description:
      "Recupera áreas degradadas através de técnicas de revegetação.",
    products: [10],
  },
  {
    name: "Plantio Consorciado com Outras Culturas",
    advantage: "Aumenta a diversificação da produção e reduz riscos agrícolas",
    description:
      "Cultiva diferentes culturas juntas para maximizar o uso da terra.",
    products: [7, 13],
  },
];
