/* eslint-disable max-len */
import React, { useContext } from 'react';
import BotContext from '../../context/BotContext';
import chob from '../../assets/chob-sem-fundo.png';
import { chatbot } from '../Steps/Step';

export default function FabChat() {
  const { setOpen, createBotMessage, messages, open } = useContext(BotContext);

  const firstMessage = () => {
    setOpen(!open);
    if (messages.length < 1) {
      const firstStep = chatbot('0');
      createBotMessage(firstStep);
    }
  };

  return (
    <div className="fixed m-4 right-0 bottom-0">
      <button
        onClick={ firstMessage }
        className="w-16 h-16 bg-orange-700 rounded-full hover:bg-orange-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        <img
          src={ chob }
          alt="SigeBot"
          className="w-10 mx-auto my-auto"
        />
      </button>
    </div>
  );
}
