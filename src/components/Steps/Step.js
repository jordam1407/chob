/* eslint-disable max-lines */
/* eslint-disable max-len */
const greetings = [
  'Tudo bem? Como posso te auxiliar hoje?',
  'Estou aqui para responder às suas perguntas.',
  'É um prazer ajudar. Como posso ser útil?',
];

function getRandomGreeting() {
  const randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

const greeting = getRandomGreeting();

const steps = [
  {
    id: '0',
    title: 'Olá, eu sou o Chob.',
    message: greeting,
    options: [
      { value: ['⚡ Teste grátis', 'teste grátis', 'free trial', 'teste', 'grátis', 'gratis'], label: '⚡ Teste grátis', trigger: '1' },
      { value: ['💲 Preços', 'preços', 'pricing', 'preco', 'valor', 'preço'], label: '💲 Preços', trigger: '2' },
      { value: ['💻 Contatar vendas', 'contatar vendas', 'sales', 'vendedor', 'atendente'], label: '💻 Contatar vendas', trigger: '3' },
      { value: ['💡 Sobre o Chob', 'sobre o chob', 'about Chob', 'sobre', 'chob'], label: '💡 Sobre o Chob', trigger: '4' },
    ],
  },
  {
    id: '1',
    title: 'Pare de perder Leads, dê uma chance ao Chob!',
    message: [
      'Você pode testar o Chob por 14 dias grátis sem nenhum compromisso!',
    ],
    options: [
      { value: ['Iniciar o teste agora', 'teste', 'iniciar', 'agora'], label: 'Iniciar o teste agora', trigger: '5' },
      { value: ['Tabela de preços', 'preços', 'preco', 'tabela', 'planos', 'preço'], label: 'Tabela de preços', trigger: '6' },
      { value: ['Voltar ao menu', 'menu', 'inicio', 'início'], label: 'Voltar ao menu', trigger: '0' },
    ],
  },
  {
    id: '2',
    title: 'Nós temos o melhor Custo x Benefício do Mercado!',
    message: 'Veja nossos planos e preços detalhados:',
    options: [
      { value: ['Plano Básico'], label: 'Plano Básico', trigger: '7' },
      { value: ['Plano Avançado'], label: 'Plano Avançado', trigger: '8' },
      { value: ['Plano Premium'], label: 'Plano Premium', trigger: '9' },
    ],
  },
  {
    id: '3',
    title: 'Pare de perder Leads, dê uma chance ao Chob',
    message: 'Entre em contato com nossa equipe de vendas para mais informações.',
    // Add other properties as needed
    options: [
      { value: ['Telefone'], label: 'Telefone', trigger: '10' },
      { value: ['Email'], label: 'Email', trigger: '11' },
    ],
  },
  {
    id: '4',
    message: 'Conheça mais sobre o Chob e nossa missão.',
    // Add other properties as needed
    options: [
      { value: ['História da Empresa'], label: 'História da Empresa', trigger: '12' },
      { value: ['Equipe'], label: 'Equipe', trigger: '13' },
    ],
  },
  {
    id: '5',
    message: 'Iniciando o teste agora. Como posso te ajudar?',
    // Add other properties as needed
    options: [
      { value: ['Opção 1'], label: 'Opção 1', trigger: '14' },
      { value: ['Opção 2'], label: 'Opção 2', trigger: '15' },
    ],
  },
  {
    id: '6',
    message: 'Aqui está a tabela de preços dos nossos planos.',
    // Add other properties as needed
    options: [
      { value: ['Opção 1'], label: 'Opção 1', trigger: '16' },
      { value: ['Opção 2'], label: 'Opção 2', trigger: '17' },
    ],
  },
];

export function chatbot(nodeId) {
  if (!nodeId) {
    return steps[0];
  }

  return steps[nodeId];
}

export default steps;
