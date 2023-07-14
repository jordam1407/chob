/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import chob from '../assets/chob-sem-fundo.png';

export default function BotMessage({ text = '', functions = [] }) {
  return (
    <div id="bot-message" className="flex items-end">
      <div
        className="flex w-[85%] flex-col mb-8 space-y-2 mx-2 order-1
    items-start"
      >
        {text.map((t, i) => {
          if (typeof t === 'string' && t.length > 0) {
            return (
              <span
                key={ i }
                className="px-4 py-2 space-y-6 rounded-lg inline-block text-sm rounded-bl-none bg-[#DCE0F5] text-gray-600"
              >
                <span>{t}</span>
                <br />
              </span>
            );
          }
          return null;
        })}
        {functions}
      </div>
      <div
        className="relative flex rounded-full w-10 h-10 bg-gradient-to-r from-indigo-800
        to-indigo-900
        p-1"
      >
        <img src={ chob } alt="SigeBot" className="h-6 mx-auto my-auto" />
        <div className="absolute bottom-0 -right-2 h-3 w-3 bg-green-400 rounded-full" />
      </div>
    </div>
  );
}

BotMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  functions: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
