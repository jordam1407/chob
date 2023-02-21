import React, { useState, useEffect } from 'react';
import getTitles from '../utils/apiFunctions';
import sigeBot from '../assets/sigebot.png';

export default function Chat() {
  const [messages, setMessages] = useState([]);

  const getSteps = async () => {
    const titleData = await getTitles();
    const buttons = {
      element: (
        <div>
          {titleData.map((tit) => (
            <button
              key={ tit }
              onClick={ () => null }
              className="px-4 py-2 ml-0 mx-2 my-2 rounded-full inline-block text-sm
              border border-black hover:bg-gray-300 text-gray-600"
            >
              {tit}
            </button>
          ))}
        </div>
      ),
    };
    setMessages((prev) => [...prev, buttons]);
  };

  const getManual = async () => {
    const notImplemented = {
      element: (
        <span
          className="px-4 py-2 rounded-lg inline-block text-sm rounded-tl-none
    bg-gray-300 text-gray-600"
        >
          Desculpe, o Manual ainda não implementado!
        </span>
      ),
    };
    setMessages((prev) => [...prev, notImplemented]);
  };

  const botMessages = [
    {
      element: (
        <span
          className="px-4 py-2 rounded-lg inline-block text-sm rounded-tl-none
      bg-gray-300 text-gray-600"
        >
          Olá, eu sou o SigeBot! Por aqui irei te ajudar a tirar suas dúvidas do
          sistema: Sige - Sistemas de Gestão.
          <br />
          <br />
          Escolha uma das opções para continuar:
        </span>
      ),
    },
    {
      element: (
        <div>
          <button
            onClick={ getManual }
            className="px-4 py-2 ml-0 mx-2 my-2 rounded-full inline-block text-sm
          border border-black hover:bg-gray-300 text-gray-600"
          >
            📑 Manual
          </button>
          <button
            onClick={ getSteps }
            className="px-4 py-2 rounded-full inline-block text-sm
          border border-black hover:bg-gray-300 text-gray-600"
          >
            🛠️ Configurar Sistema SIGE
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    setMessages(botMessages);
  }, []);

  console.log(messages);

  return (
    <div
      className="flex flex-col rounded-2xl
      md:w-[650px] w-full md:h-[80%] h-full
      align-middle border border-red-600"
    >
      <div className="flex bg-gradient-to-r bg-gray-300 rounded-t-2xl">
        <img
          src={ sigeBot }
          className="w-20 m-4 rounded-full bg-gray-300"
          alt=""
        />
        <span className="text-2xl my-auto ml-4 font-bold">SigeBot</span>
      </div>
      <div
        id="messages"
        className="flex flex-col space-y-8 p-3 overflow-y-auto scrollbar-thumb-blue
          scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2
          scrolling-touch"
      >
        <div id="bot-message" className="flex items-start">
          <div
            className="flex flex-col mt-8 space-y-2 max-w-xs mx-2 order-1
          items-start"
          >
            {messages.map((m) => m.element)}
          </div>
          <img
            src={ sigeBot }
            alt="SigeBot"
            className="w-16 h-16 rounded-full bg-gray-300"
          />
        </div>
        <div id="user-message" className="flex items-end justify-end">
          <div
            id="message"
            className="flex flex-col space-y-2 max-w-xs mx-2 order-1 items-end"
          >
            <span
              id="message"
              className="px-4 py-2 rounded-lg inline-block rounded-br-none
              bg-blue-600 text-white "
            >
              Your error message says permission denied, npm global installs
              must be given root privileges.
            </span>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="My profile"
            className="w-16 h-16 order-2"
          />
        </div>
      </div>
    </div>
  );
}
