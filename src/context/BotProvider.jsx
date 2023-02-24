import { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getTitles, getSteps } from '../utils/apiFunctions';
import BotContext from './BotContext';
import sigeBot from '../assets/sigebot.png';
import BotMessages from '../components/BotMessages';

export default function BotProvider({ children }) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setIsLoading(false);
  }, [messages]);

  const getStep = async (n) => {
    const stepsData = await getSteps(n);
    console.log(stepsData);
    const buttons = {
      element: (
        <div id="bot-message" className="flex items-end">
          <div
            className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
          items-start"
          >
            <div
              className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
              bg-gray-300 text-gray-600"
            >
              <h1 className="text-lg font-bold">
                {`${n} - ${stepsData[0].titulo}:`}
              </h1>
              <ul className="space-y-2 mt-4 list-disc font-bold">
                📝 Observações:
                {stepsData[0].obs.map((o) => (
                  <li className="ml-6 font-normal" key={ o }>
                    {o}
                  </li>
                ))}
              </ul>
              <h1 className="mt-4 text-md font-bold">🗺️ Caminho:</h1>
              <p className="">
                Na barra de menu principal, acesse:
                <br />
                <strong>{stepsData[0].caminho}</strong>
              </p>
              <ul className="space-y-2 mt-4 list-disc font-bold">
                👣 Passos:
                {stepsData[0].passos.map((o) => (
                  <li className="ml-6 font-normal" key={ o }>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <img
            src={ sigeBot }
            alt="SigeBot"
            className="md:w-16 w-12 rounded-full bg-gray-300"
          />
        </div>
      ),
    };
    setMessages((prev) => [...prev, buttons]);
  };

  const setConfigMsg = async () => {
    setIsLoading(true);
    const titleData = await getTitles();
    const configMessage = {
      element: (
        <div id="bot-message" className="flex items-end">
          <div
            className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
          items-start"
          >
            <span
              className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
              bg-gray-300 text-gray-600"
            >
              {`Agora iremos iniciar a configuração do sistema que consiste 
              em ${titleData.length}
              etapas!`}
              <br />
              <br />
              Acesse o Sistema - SIGE com seu usuário e senha e siga os passos a
              seguir.
              <br />
              <br />
              Leia atentamente cada passo, após concluir cada um clique no botão
              &quot;Próximo&quot;.
            </span>
            <button
              id="🛠️ Configurar Sistema SIGE"
              onClick={ () => getStep(step) }
              className="px-4 py-2 rounded-full inline-block text-sm
    border border-black hover:bg-gray-300 text-gray-600"
            >
              🚀 Iniciar configuração
            </button>
          </div>
          <img
            src={ sigeBot }
            alt="SigeBot"
            className="md:w-16 w-12 rounded-full bg-gray-300"
          />
        </div>
      ),
    };
    setMessages((prev) => [...prev, configMessage]);
  };

  const getManual = async () => {
    const notImplemented = {
      element: (
        <div id="bot-message" className="flex items-end">
          <div
            className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
          items-start"
          >
            <span
              className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
              bg-gray-300 text-gray-600"
            >
              Sinto muito! O Manual Online ainda não foi implementado.
            </span>
            <BotMessages />
          </div>
          <img
            src={ sigeBot }
            alt="SigeBot"
            className="md:w-16 w-12 rounded-full bg-gray-300"
          />
        </div>
      ),
    };
    setMessages((prev) => [...prev, notImplemented]);
  };

  const userMessages = (e) => {
    console.log('chamou');
    const userMessage = {
      element: (
        <div id="user-message" className="flex items-end justify-end">
          <div
            id="message"
            className="flex flex-col space-y-2 max-w-xs mx-2 order-1 items-end"
          >
            <span
              id="message"
              className="px-4 py-2 mb-8 rounded-lg inline-block rounded-br-none
              bg-blue-600 text-white "
            >
              {e.target.id}
            </span>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="My profile"
            className="md:w-16 w-12 order-2"
          />
        </div>
      ),
    };
    setMessages((prev) => [...prev, userMessage]);
    const quinnhetos = 500;
    setTimeout(() => {
      setIsLoading(true);
      if (e.target.id === '🛠️ Configurar Sistema SIGE') {
        setConfigMsg();
      }
      if (e.target.id === '📖 Manual') {
        getManual();
      }
    }, quinnhetos);
  };

  const nextStep = async () => {
    setIsLoading(true);
    const titleData = await getTitles();
    if (step < titleData.length) {
      setStep((prev) => prev + 1);
      getStep(step + 1);
    } else {
      setStep(1);
      getStep(1);
    }
  };

  const prevStep = async () => {
    setIsLoading(true);
    if (step < 1) {
      setStep((prev) => prev - 1);
      getStep(step - 1);
    } else {
      setStep(1);
      getStep(1);
    }
  };

  const deps = {
    prevStep,
    nextStep,
    userMessages,
    setConfigMsg,
    messages,
    setMessages,
    isLoading,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const context = useMemo(() => deps, [messages, isLoading]);

  return <BotContext.Provider value={ context }>{children}</BotContext.Provider>;
}

BotProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
