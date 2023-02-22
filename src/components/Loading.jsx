import React from 'react';
import sigeBot from '../assets/sigebot.png';
import loading from '../assets/loading.gif';

export default function Loading() {
  return (
    <div id="bot-message" className="flex items-start">
      <div
        className="flex flex-col mt-8 space-y-2 max-w-xs mx-2 order-1
  items-start"
      >
        <div
          className="px-4 py-2 space-x-1 rounded-lg inline-block text-sm rounded-tl-none
    bg-gray-300 text-gray-600"
        >
          <img src={ loading } className="w-12 m-2" alt="loading" />
        </div>
      </div>
      <img
        src={ sigeBot }
        alt="SigeBot"
        className="w-16 h-16 rounded-full bg-gray-300"
      />
    </div>
  );
}
