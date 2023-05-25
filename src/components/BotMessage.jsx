import React from 'react';
import PropTypes from 'prop-types';
import chob from '../assets/chob-sem-fundo.png';

export default function BotMessage({ text = '', functions = [] }) {
  return (
    <div id="bot-message" className="flex items-end">
      <div
        className="flex flex-col mb-8 space-y-2 mx-2 order-1
    items-start"
      >
        <span
          className="px-4 py-2 space-y-6 rounded-lg inline-block text-sm rounded-bl-none
        bg-[#DCE0F5] text-gray-600"
        >
          {text.map((t, i) => (
            <>
              <span key={ i }>{t}</span>
              <br />
            </>
          ))}
        </span>
        {functions}
      </div>
      <div
        className="relative rounded-full bg-gradient-to-r from-indigo-800 to-indigo-900
        p-1"
      >
        <img src={ chob } alt="SigeBot" className="w-16" />
        <div className="absolute bottom-0 right-0 h-2 w-2 bg-green-400 rounded-full" />
      </div>
    </div>
  );
}

BotMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  functions: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
