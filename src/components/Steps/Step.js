/* eslint-disable max-lines */
/* eslint-disable max-len */
const greetings = [
  'Tudo bem? Como posso te auxiliar hoje?',
  'Estou aqui para responder às suas perguntas.',
  'É um prazer ajudar. Como posso ser útil?',
];
const endGreetings = [
  'Obrigado por conversar conosco!',
  'Agradecemos seu tempo e interesse!',
  'Se tiver mais alguma dúvida, fique à vontade para entrar em contato!',
  'Tenha um ótimo dia!',
  'Estamos ansiosos para falar com você novamente!!',
  'Sinta-se à vontade para nos contatar a qualquer momento!',
];
const additionalHelpMessages = [
  'Posso ajudar com mais alguma coisa?',
  'Existe algo mais em que eu possa ajudar?',
  'Precisa de ajuda com alguma outra questão?',
  'Alguma outra dúvida ou informação que posso fornecer?',
  'Estou à disposição se precisar de mais ajuda em algo.',
];

function getRandomGreeting(messages) {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

const steps = [
  {
    id: 'end',
    message: [getRandomGreeting(endGreetings)],
    end: true,
  },
  {
    id: 'what',
    message: ['Me desculpe, não consegui entender o que você me disse, vamos voltar ao menu inicial'],
    trigger: '0',
  },
  {
    id: 'help',
    message: [getRandomGreeting(additionalHelpMessages)],
    options: [
      { value: ['sim', 'claro', 'com certeza', 'certamente', 'sem dúvida', 'é verdade', 'sim, por favor', 'sim, eu aceito'], label: 'Sim', trigger: '0' },
      { value: ['não', 'não, obrigado', 'não quero', 'de jeito nenhum', 'nem pensar', 'não, obrigada'], label: 'Não', trigger: 'end' },
    ],
  },
  {
    id: '0',
    message: ['Olá, eu sou o Chob.', getRandomGreeting(greetings)],
    options: [
      { value: ['⚡ Teste grátis', 'teste grátis', 'free trial', 'teste', 'grátis', 'gratis'], label: '⚡ Teste grátis', trigger: '1' },
      { value: ['💲 Preços', 'preços', 'pricing', 'preco', 'valor', 'preço'], label: '💲 Preços', trigger: '4' },
      { value: ['💻 Contatar vendas', 'contatar vendas', 'sales', 'vendedor', 'atendente'], label: '💻 Contatar vendas', trigger: '5' },
      { value: ['💡 Sobre o Chob', 'sobre o chob', 'about Chob', 'sobre', 'chob'], label: '💡 Sobre o Chob', trigger: '7' },
    ],
  },
  // teste grátis path
  {
    id: '1',
    message: [
      'Você pode testar o Chob por 14 dias grátis sem nenhum compromisso!',
      'Pare de perder Leads, dê uma chance ao Chob!',
    ],
    options: [
      { value: ['Iniciar o teste agora', 'teste', 'iniciar', 'agora'], label: 'Iniciar o teste agora', trigger: '2' },
      { value: ['Tabela de preços', 'preços', 'preco', 'tabela', 'planos', 'preço'], label: 'Tabela de preços', trigger: '4' },
      { value: ['Voltar ao menu', 'menu', 'inicio', 'início'], label: 'Voltar ao menu', trigger: '0' },
    ],
  },
  // Formulário para teste grátis
  {
    id: '2',
    message: ['Maravilha! São 7 dias de teste grátis no plano "Pro", após preencher o formulário, nosso time entrará em contato para montar seu Chatbot Personalizado!'],
    component:
      { value: 'test form', trigger: '3' },

  },
  {
    id: '3',
    message: ['Parabéns! Seu teste grátis foi solicitado. Entraremos em contato em breve com os próximos passos.'],
    trigger: 'help',
  },
  // Tabela de preços
  {
    id: '4',
    message: ['Ótimo, aqui está nossa tabela de preços:'],
    component:
      { value: 'price table' },
  },
  // Formulário para compra
  {
    id: '5',
    message: ['Muito bem, por favor preencha o formulário para prosseguirmos.'],
    component:
      { value: 'test form', trigger: '6' },
  },
  {
    id: '6',
    message: ['Que bacana, nosso time de vendas entrará em contato o mais rápido possível!'],
    trigger: 'help',
  },
  {
    id: '7',
    message: ['Sou um chatbot inteligente para respostas rápidas e personalizadas. Estou aqui para ajudar com informações e suporte.', 'Integro-me perfeitamente ao seu site para atender suas necessidades. Sempre aprendendo e evoluindo.', 'Ofereço recursos de análise e atendimento excepcional. Busco insights valiosos para melhorar sua experiência.'],
    trigger: '0',
  },
];

export function chatbot(nodeId) {
  console.log(nodeId);
  if (!nodeId) {
    return steps.find((step) => step.id === '0');
  }

  return steps.find((step) => step.id === nodeId);
}

export default steps;
