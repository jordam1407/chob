import React from 'react';
import propTypes from 'prop-types';

export default function BotMessages({ functions }) {
  const { userMessages } = functions;
  return (
    <>
      <span
        className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
      bg-gray-300 text-gray-600"
      >
        Escolha uma das opções para continuar:
      </span>
      <div>
        <button
          id="📖 Manual"
          onClick={ userMessages }
          className="px-4 py-2 ml-0 mx-2 my-2 rounded-full inline-block text-sm
          border border-black hover:bg-gray-300 text-gray-600"
        >
          📖 Manual
        </button>
        <button
          id="🛠️ Configurar Sistema SIGE"
          onClick={ userMessages }
          className="px-4 py-2 rounded-full inline-block text-sm
          border border-black hover:bg-gray-300 text-gray-600"
        >
          🛠️ Configurar Sistema SIGE
        </button>
      </div>
    </>
  );
}

BotMessages.propTypes = {
  functions: propTypes.shape({
    userMessages: propTypes.func.isRequired,
  }).isRequired,
};
