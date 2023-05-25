import React from 'react';
import chob from '../assets/chob.png';
import loading from '../assets/loading.gif';

export default function Loading() {
  return (
    <div id="bot-message" className="flex items-end">
      <div
        className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
  items-start"
      >
        <div
          className="px-4 py-2 space-x-1 rounded-lg inline-block text-sm rounded-bl-none
    bg-gray-300 text-gray-600"
        >
          <img src={ loading } className="w-8 m-2 animate-bounce" alt="loading" />
        </div>
      </div>
      <img
        src={ chob }
        alt="chob"
        className="md:w-16 w-12 rounded-full bg-gray-300"
      />
    </div>
  );
}
