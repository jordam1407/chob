import React, { useEffect, useRef, useContext, useState } from 'react';
import { getTitles } from '../utils/apiFunctions';
import BotContext from '../context/BotContext';
import sigeBot from '../assets/sigebot.png';
import Loading from './Loading';
import BotButtonsOpt from './BotButtonsOpt';

export default function Chat() {
  const { messages,
    initialOptions, isLoading } = useContext(BotContext);
  const [titles, setTitles] = useState('');

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isLoading, messages]);

  useEffect(() => {
    const initialTitles = async () => {
      const title = await getTitles();
      setTitles(title);
    };
    initialTitles();
  }, []);

  return (
    <div
      className="flex flex-col md:rounded-lg
      md:w-[650px] w-full md:h-[90%] h-full
      align-middle shadow-md"
    >
      <div
        className="flex md:static fixed h-16 md:w-[650px] w-screen md:h-24 top-0
          bg-gradient-to-r bg-blue-600 md:rounded-t-lg"
      >
        <span className="text-2xl mx-auto text-white my-auto font-bold">
          SIGE Bot
        </span>
      </div>
      <div
        id="messages"
        className="flex flex-col h-full space-y-8 p-3 overflow-y-auto scrollbar-thumb-blue
          scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2
          scrolling-touch md:mt-0 mt-16"
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
            <BotButtonsOpt functions={ initialOptions } items={ titles } />
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
    </div>
  );
}
