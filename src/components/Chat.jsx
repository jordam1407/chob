import React, { useState, useEffect } from 'react';
import getTitles from '../utils/apiFunctions';

export default function Chat() {
  const botMessages = [
    {
      element: (
        <span
          className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
      bg-gray-300 text-gray-600"
        >
          Olá, eu sou o SigeBot! Por aqui irei te ajudar a tirar suas dúvidas do
          sistema: Sige - Sistemas de Gestão.
        </span>
      ),
    },
    {
      element: (
        <span
          className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
        bg-gray-300 text-gray-600"
        >
          Escolha uma das opções:
        </span>
      ),
    },
  ];

  const [messages, setMessages] = useState(botMessages);
  const [data, setData] = useState([]);
  console.log(messages);

  useEffect(() => {
    const getTitle = async () => {
      const titleData = await getTitles();
      const buttons = {
        element: (
          <div>
            {titleData.map((tit) => (
              <button
                key={ tit }
                onClick={ () => null }
                className="bg-gray-400 rounded-full px-4"
              >
                {tit}
              </button>
            ))}
          </div>
        ),
      };
      console.log(buttons);
      setMessages((prev) => [...prev, buttons]);
    };
    getTitle();
  }, []);

  return (
    <div
      className="flex flex-col rounded-2xl
      md:w-[650px] w-full md:h-[80%] h-full
      align-middle border border-red-600"
    >
      <div className="flex bg-gradient-to-r bg-gray-300 rounded-t-2xl">
        <img
          src="https://png.pngtree.com/png-vector/20221225/ourmid/pngtree-chatbot-png-image_6536257.png"
          className="w-20 m-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
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
        <div id="bot-message" className="flex items-end">
          <div
            className="flex flex-col space-y-2 max-w-xs mx-2 order-1
          items-start"
          >
            {messages.map((m) => m.element)}
          </div>
          <img
            src="https://png.pngtree.com/png-vector/20221225/ourmid/pngtree-chatbot-png-image_6536257.png"
            alt="SigeBot"
            className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
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
