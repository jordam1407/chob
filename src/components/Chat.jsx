import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  cloneElement,
} from 'react';
import { getTitles } from '../utils/apiFunctions';
import BotContext from '../context/BotContext';
import sigeBot from '../assets/sigebot.png';
import Loading from './Loading';
import BotButtonsOpt from './BotButtonsOpt';

export default function Chat() {
  const { messages, initialOptions, isLoading, setMessages } = useContext(BotContext);
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
        className="flex md:static fixed h-20 md:w-[650px] w-screen md:h-24 top-0
          bg-gradient-to-r bg-blue-600 md:rounded-t-lg rounded-b-2xl md:rounded-none"
      >
        <div className="w-[56px]" />
        <span className="text-2xl mx-auto text-white my-auto font-bold">
          SIGE Bot
        </span>
        <button
          onClick={ () => setMessages([]) }
          className="m-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-refresh"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
          </svg>
        </button>
      </div>
      <div
        id="messages"
        className="flex flex-col h-full space-y-8 p-3 overflow-y-auto scrollbar-thumb-blue
          scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2
          scrolling-touch md:mt-0 mt-20"
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
              dúvidas do sistema: SIGE - Médico.
            </span>
            <BotButtonsOpt functions={ initialOptions } items={ titles } />
          </div>
          <img
            src={ sigeBot }
            alt="SigeBot"
            className="md:w-16 w-12 rounded-full bg-gray-300"
          />
        </div>
        {messages.map((m, i) => cloneElement(m.element, { key: i }))}
        {isLoading && <Loading />}
        <div ref={ messagesEndRef } />
      </div>
      <div className="mx-auto">
        <BotButtonsOpt
          functions={ initialOptions }
          items={ [{ titulo: 'Voltar ao menu inicial', emoji: '🔙' }] }
        />
      </div>
    </div>
  );
}
