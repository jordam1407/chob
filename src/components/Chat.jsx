import React, { useEffect, useRef, useContext } from 'react';
import BotContext from '../context/BotContext';
import sigeBot from '../assets/sigebot.png';
import Loading from './Loading';
import BotMessages from './BotMessages';

export default function Chat() {
  const {
    messages,
    userMessages,
    prevStep,
    nextStep,
    isLoading,
  } = useContext(BotContext);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isLoading, messages]);

  return (
    <div
      className="flex flex-col rounded-2xl
      md:w-[650px] w-full md:h-[90%] h-full
      align-middle border shadow-md"
    >
      <div className="flex bg-gradient-to-r bg-blue-600 rounded-t-2xl shadow-md">
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
        {isLoading && <Loading />}
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
