/* eslint-disable max-len */
import React, { useContext } from 'react';
import BotContext from '../../context/BotContext';
import chob from '../../assets/chob-sem-fundo.png';

export default function FabChat() {
  const { setOpen } = useContext(BotContext);

  return (
    <div className="fixed m-4 right-0 bottom-0">
      <button
        onClick={ () => setOpen(true) }
        className="w-16 h-16 bg-orange-600 rounded-full hover:bg-orange-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        <img
          src={ chob }
          alt="SigeBot"
          className="w-12 mx-auto my-auto"
        />
      </button>
    </div>
  );
}
