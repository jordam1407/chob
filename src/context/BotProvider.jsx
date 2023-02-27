/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { getStepTitles, getSteps, getTitles } from '../utils/apiFunctions';
import BotContext from './BotContext';
import sigeBot from '../assets/sigebot.png';
import BotButtonsOpt from '../components/BotButtonsOpt';
import NextPrev from '../components/NextPrev';
import UserMessage from '../components/UserMessage';
import BotMessage from '../components/BotMessage';

export default function BotProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  console.log(messages);

  const createUserMessage = (text) => {
    const userMessage = {
      element: <UserMessage message={ text } />,
    };
    setMessages((prev) => [...prev, userMessage]);
  };

  const getStep = async (n) => {
    setIsLoading(true);
    const titleData = await getStepTitles();
    if (n <= titleData.length) {
      const stepsData = await getSteps(n);
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
              <div className="mx-auto">
                <NextPrev n={ n } />
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
      const quinhentos = 500;
      setTimeout(() => {
        setMessages((prev) => [...prev, buttons]);
        setIsLoading(false);
      }, quinhentos);
    } else {
      const finishMessage = {
        element: (
          <BotMessage
            text={ [
              '🎉 Parabéns! 🎉',
              '🎉🎉🎉 A configuração inicial do sistema SIGE Médico está completa! 🎉🎉🎉',
              '🚀 Vamos começar esta jornada emocionante juntos! 🚀',
            ] }
            functions={
              <BotButtonsOpt
                functions={ initialOptions }
                items={ [{ titulo: 'Voltar ao início', emoji: '🔙' }] }
              />
            }
          />
        ),
      };
      const quinhentos = 500;
      setTimeout(() => {
        setMessages((prev) => [...prev, finishMessage]);
        setIsLoading(false);
      }, quinhentos);
    }
  };

  const setConfigMsg = async () => {
    setIsLoading(true);
    const titleData = await getStepTitles();
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
              id="🚀 Iniciar configuração"
              onClick={ (e) => {
                createUserMessage(e.target.id);
                getStep(1);
              } }
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
    const quinhentos = 500;
    setTimeout(() => {
      setMessages((prev) => [...prev, configMessage]);
      setIsLoading(false);
    }, quinhentos);
  };

  const getManual = async () => {
    const title = await getTitles();

    const notImplemented = {
      element: (
        <BotMessage
          text={ ['Sinto muito! O Manual Online ainda não foi implementado.'] }
          functions={ <BotButtonsOpt functions={ initialOptions } items={ title } /> }
        />
      ),
    };
    const quinhentos = 500;
    setTimeout(() => {
      setMessages((prev) => [...prev, notImplemented]);
      setIsLoading(false);
    }, quinhentos);
  };

  const initialOptions = (e) => {
    createUserMessage(e.target.id);
    if (e.target.id === '🛠️ Configurar Sistema SIGE') {
      return setConfigMsg();
    }
    if (e.target.id === '📖 Manual') {
      return getManual();
    }
    if (e.target.id === '🔙 Voltar ao início') {
      return setMessages([]);
    }
  };

  const deps = {
    setIsLoading,
    getStep,
    initialOptions,
    setConfigMsg,
    setMessages,
  };

  const deps2 = {
    messages,
    isLoading,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <BotContext.Provider value={ { ...deps, ...deps2 } }>
      {children}
    </BotContext.Provider>
  );
}

BotProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
