/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { withAnimation } from '../../hocs';

function PricingSection() {
  return (
    <div className="px-4 py-16 mx-auto lg:py-24 font-custom">
      <div className="mb-10 md:mx-auto sm:text-center md:mb-12">
        <div>
          <span className="inline-block py-px px-2 mb-4 text-md leading-5 text-orange-500 bg-orange-100 font-medium uppercase rounded-full">
            Nossos Números
          </span>
        </div>
        <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-bold tracking-tighter text-gray-900">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Preços</span>
          </span>
          {' '}
          Simples. Soluções avançadas.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Base</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">R$59</div>
              <div className="text-gray-700">/ mês</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">1 modelo de ChatBot</div>
              <div className="text-gray-700">Chats Ilimitados</div>
              <div className="text-gray-700">100% Customizável</div>
              <div className="text-gray-700">Desenvolvedor de Chatbot</div>
              <div className="text-gray-700">Suporte/Instalação</div>
            </div>
          </div>
          <div>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Deixe o Chob fazer seus atendimentos!
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Comprar Base
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
          <div className="text-center">
            <div className="text-lg font-semibold">Mid</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$89</div>
              <div className="text-gray-700">/ mês</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">2 modelos de ChatBot</div>
              <div className="text-gray-700">1 Atualização de ChatBot/mês</div>
              <div className="text-gray-700">Chats Ilimitados</div>
              <div className="text-gray-700">100% Customizável</div>
              <div className="text-gray-700">Desenvolvedor de Chatbot</div>
              <div className="text-gray-700">Suporte/Instalação</div>
              <div className="text-gray-700">Dashboard</div>
              <div className="text-gray-700">Histórico de Chats</div>
            </div>
          </div>
          <div>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Tenha em mãos todo histórico de conversas para analisar como desejar!
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
            >
              Comprar Mid
            </a>
          </div>
        </div>
        <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-orange-600">
          <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-orange-600">
              Most Popular
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold">Pro</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">R$119</div>
              <div className="text-gray-700">/ mês</div>
            </div>
            <div className="mt-2 space-y-3">
              <div className="text-gray-700">4 modelos de ChatBot</div>
              <div className="text-gray-700">2 Atualizações de ChatBot/mês</div>
              <div className="text-gray-700">Chats Ilimitados</div>
              <div className="text-gray-700">100% Customizável</div>
              <div className="text-gray-700">Desenvolvedor de Chatbot</div>
              <div className="text-gray-700">Suporte/Instalação</div>
              <div className="text-gray-700">Dashboard</div>
              <div className="text-gray-700">Histórico de Chats</div>
              <div className="text-gray-700">Analytics Avançado</div>
            </div>
          </div>
          <div>
            <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
              Receba analytics e insights detalhados dos atendimentos, empodere seu negócio!
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Comprar Pro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withAnimation(PricingSection, 'fade-up');
