import React, { useState, useEffect, useRef } from 'react';
import { getSteps, getTitles } from '../utils/apiFunctions';
import sigeBot from '../assets/sigebot.png';
import Loading from './Loading';
import BotMessages from './BotMessages';

export default function Chat() {
  const messagesEndRef = useRef(null);
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    setIsLoading(false);
  }, [messages]);

  const getInitialStep = async (n) => {
    setIsLoading(true);
    const stepsData = await getSteps(n);
    const titleData = await getTitles();
    console.log(stepsData);
    const buttons = {
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

  const getStep = async (n) => {
    setIsLoading(true);
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

  const getManual = async () => {
    console.log('chamou manual');
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
    if (e.target.id === '🛠️ Configurar Sistema SIGE') {
      getInitialStep(step);
    }
    if (e.target.id === '📖 Manual') {
      getManual();
    }
  };

  const nextStep = async () => {
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
    if (step < 1) {
      setStep((prev) => prev - 1);
      getStep(step - 1);
    } else {
      setStep(1);
      getStep(1);
    }
  };

  return (
    <div
      className="flex flex-col rounded-2xl
      md:w-[650px] w-full md:h-[90%] h-full
      align-middle border shadow-md"
    >
      <div className="flex bg-gradient-to-r bg-blue-600 rounded-t-2xl shadow-md">
        {/* <img src={sigeBot} className="w-16 m-4 rounded-full bg-white" alt="" /> */}
        <span className="text-2xl mx-auto md:my-8 text-white my-4 font-bold">
          SIGE Bot
        </span>
      </div>
      <div
        id="messages"
        className="flex flex-col h-full space-y-8 p-3 overflow-y-auto scrollbar-thumb-blue
          scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2
          scrolling-touch"
      >
        <div id="bot-message" className="flex items-end">
          <div
            className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
          items-start"
          >
            <span
              className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
      bg-gray-300 text-gray-600"
            >
              Olá, eu sou o SigeBot! Por aqui irei te ajudar a tirar suas
              dúvidas do sistema: Sige - Sistemas de Gestão.
            </span>
            <BotMessages functions={ { userMessages } } />
          </div>
          <img
            src={ sigeBot }
            alt="SigeBot"
            className="md:w-16 w-12 rounded-full bg-gray-300"
          />
        </div>
        {messages.map((m) => m.element)}
        {isLoading && <Loading ref={ messagesEndRef } />}
        <div ref={ messagesEndRef } />
      </div>
      <div className="mx-auto">
        <button
          onClick={ prevStep }
          className="px-4 py-2 w-fit mx-4 my-2 rounded-full inline-block text-sm
      border border-black hover:bg-gray-300 text-white bg-blue-600 font-bold"
        >
          ANTERIOR
        </button>
        <button
          onClick={ nextStep }
          className="px-4 py-2 w-fit mx-4 my-2 rounded-full inline-block text-sm
      border border-black hover:bg-gray-300 text-white bg-blue-600 font-bold"
        >
          PRÓXIMO
        </button>
      </div>
    </div>
  );
}
