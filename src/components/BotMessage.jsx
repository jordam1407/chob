import React from 'react';
import PropTypes from 'prop-types';
import sigeBot from '../assets/sigebot.png';

export default function BotMessage({ text = '', functions = [] }) {
  return (
    <div id="bot-message" className="flex items-end">
      <div
        className="flex flex-col mb-8 space-y-2 mx-2 order-1
    items-start"
      >
        <span
          className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
        bg-gray-300 text-gray-600"
        >
          {text.map((t, i) => (
            <p key={ i }>{t}</p>
          ))}
        </span>
        {functions}
      </div>
      <img
        src={ sigeBot }
        alt="SigeBot"
        className="md:w-16 w-12 rounded-full bg-gray-300"
      />
    </div>
  );
}

BotMessage.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  functions: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};
