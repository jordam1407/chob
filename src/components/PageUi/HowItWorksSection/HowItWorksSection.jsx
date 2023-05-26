/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { withAnimation } from '../../hocs';
import bgWhite from '../../../assets/pattern-white.svg';

const boxes = [
  {
    title: 'Atendimento Instantâneo',
    description: 'Interaja com seus visitantes de forma imediata, fornecendo respostas rápidas e personalizadas.',
  },
  {
    title: 'Suporte 24h',
    description: 'Esteja disponível para seus clientes a qualquer hora do dia, oferecendo suporte contínuo e confiável.',
  },
  {
    title: 'Automação Inteligente',
    description: 'Automatize tarefas repetitivas e complexas, economizando tempo e aumentando a eficiência.',
  },
  {
    title: 'Coleta de Dados Precisos',
    description: 'Obtenha insights valiosos sobre seus clientes, coletando e analisando dados relevantes em tempo real.',
  },
  {
    title: 'Personalização Avançada',
    description: 'Crie experiências personalizadas para cada usuário, adaptando-se às suas necessidades e preferências.',
  },
  {
    title: 'Integrações Simplificadas',
    description: 'Integre facilmente o Chob com suas ferramentas e plataformas favoritas, ampliando suas capacidades.',
  },
];

function HowItWorksSection() {
  return (
    <section
      className="py-24 bg-gray-900 font-custom font-light"
      style={ {
        backgroundImage: `url(${bgWhite})`,
        backgroundColor: 'red',
        backgroundPosition: 'center',
      } }
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-16 md:mb-24">
          <span className="inline-block py-px px-2 mb-4 text-md leading-5 text-orange-500 bg-orange-100 font-medium uppercase rounded-full shadow-sm">
            Como funciona
          </span>
          <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter">
            Pare de Perder Vendas por Falta de Atendimento, nosso Chat Automatizado Vende por Você
          </h2>
          <p className="text-lg md:text-xl text-gray-500 font-medium">
            Maximize a produtividade da sua equipe e encante seus clientes com a tecnologia avançada de chatbot do Chob.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          {boxes.map(({ title, description }, i) => (
            <div key={ `how-it-works-${i}` } className="w-full md:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="relative h-full px-8 pt-14 pb-8 bg-gray-50 rounded-md shadow-md">
                <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-flex items-center justify-center h-16 w-16 rounded-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full text-xl font-semibold text-white shadow-md">
                    {i + 1}
                  </div>
                </div>
                <h3 className="md:w-64 mb-4 text-lg md:text-xl font-bold">{title}</h3>
                <p className="text-gray-500 font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default withAnimation(HowItWorksSection, 'fade-up');
