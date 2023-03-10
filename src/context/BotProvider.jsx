/* eslint-disable max-lines */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  getStepTitles,
  getSteps,
  getTitles,
  getParentOption,
  getChildOption,
  getGrandChildOption,
  getLastResult,
  getFaqs,
  getFaqsOpt,
} from '../utils/apiFunctions';
import BotContext from './BotContext';
import sigeBot from '../assets/sigebot.png';
import BotButtonsOpt from '../components/BotButtonsOpt';
import NextPrev from '../components/NextPrev';
import UserMessage from '../components/UserMessage';
import BotMessage from '../components/BotMessage';

const OPTION_MESSAGE = 'Muito bem! Agora escolha uma das opções para continuarmos:';

const QUINHENTOS = 500;

export default function BotProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  // const [parent, setParent] = useState('');
  // const [parentUpdated, setParentUpdated] = useState(false);
  // const [child, setChild] = useState('');
  // const [lastChild, setLastChild] = useState('');

  const firstMenu = async () => {
    const title = await getTitles();
    const notImplemented = {
      element: (
        <BotMessage
          text={ [OPTION_MESSAGE] }
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
              className="flex flex-col mb-8 space-y-2 mx-2 order-1
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
      setTimeout(() => {
        setMessages((prev) => [...prev, buttons]);
        setIsLoading(false);
      }, QUINHENTOS);
    } else {
      const finishMessage = {
        element: (
          <BotMessage
            text={ [
              '🎉 Parabéns!',
              '✔️ A configuração inicial do sistema SIGE Médico está completa!',
              '🚀 Vamos começar esta jornada emocionante juntos!',
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
      setTimeout(() => {
        setMessages((prev) => [...prev, finishMessage]);
        setIsLoading(false);
      }, QUINHENTOS);
    }
  };

  const setConfigMsg = async () => {
    setIsLoading(true);
    const titleData = await getStepTitles();
    const configMessage = {
      element: (
        <div id="bot-message" className="flex items-end">
          <div
            className="flex flex-col mb-8 space-y-2 mx-2 order-1
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

    setTimeout(() => {
      setMessages((prev) => [...prev, configMessage]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const getLastOptions = async (e, titulo, subtitulo) => {
    setIsLoading(true);
    const result = await getLastResult(titulo, subtitulo, e.target.id);
    const childOptions = {
      element: (
        <BotMessage
          text={
            result[0].texto
          }
        />
      ),
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, childOptions]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const getGrandChildOptions = async (e, titulo) => {
    setIsLoading(true);
    createUserMessage(e.target.value);
    const subtitle = e.target.id;
    const result = await getGrandChildOption(titulo, e.target.id);
    if (result[0].opcoes) {
      const childOptions = {
        element: (
          <BotMessage
            text={ [OPTION_MESSAGE] }
            functions={
              <BotButtonsOpt
                functions={ (ev) => getLastOptions(ev, titulo, subtitle) }
                items={ result[0].opcoes }
              />
            }
          />
        ),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, childOptions]);
        setIsLoading(false);
      }, QUINHENTOS);
    } else {
      const childOptions = {
        element: (
          <BotMessage
            text={
              result[0].texto || [
                'Descrição da opção ainda não foi implementada!']
            }
          />
        ),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, childOptions]);
        setIsLoading(false);
      }, QUINHENTOS);
    }
  };

  const getChildOptions = async (titulo) => {
    setIsLoading(true);
    const result = await getChildOption(titulo);
    const childOptions = {
      element: (
        <BotMessage
          text={ [OPTION_MESSAGE] }
          functions={
            <BotButtonsOpt
              functions={ (e) => getGrandChildOptions(e, titulo) }
              items={ result }
            />
          }
        />
      ),
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, childOptions]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const parentOption = async (e) => {
    createUserMessage(e.target.value);
    getChildOptions(e.target.id);
  };

  const getManual = async () => {
    setIsLoading(true);
    const title = await getParentOption();
    const parentOptions = {
      element: (
        <BotMessage
          text={ ['Muito bem! Agora escolha uma das opções do menu principal:'] }
          functions={ <BotButtonsOpt functions={ parentOption } items={ title } /> }
        />
      ),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, parentOptions]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const getFaqOpts = async (e) => {
    createUserMessage(e.target.id);
    setIsLoading(true);
    const opt = await getFaqsOpt(e.target.name);
    const childOptions = {
      element: (
        <BotMessage
          text={
            opt[0].texto
              ? opt[0].texto
              : ['Descrição da opção ainda não foi implementada!']
          }
        />
      ),
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, childOptions]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const getFaq = async () => {
    setIsLoading(true);
    const title = await getFaqs();

    const notImplemented = {
      element: (
        <BotMessage
          text={ ['Muito bem! Agora escolha uma das opções:'] }
          functions={ <BotButtonsOpt functions={ getFaqOpts } items={ title } /> }
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
    createUserMessage(e.target.value);
    if (e.target.value === '🛠️ Configurar Sistema SIGE') {
      return setConfigMsg();
    }
    if (e.target.value === '📖 Manual') {
      return getManual();
    }
    if (e.target.value === '❓ Perguntas Frequentes') {
      return getFaq();
    }
    if (e.target.value === '🔙 Voltar ao início') {
      return setMessages([]);
    }
    if (e.target.value === '🔙 Voltar ao menu inicial') {
      return firstMenu();
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
