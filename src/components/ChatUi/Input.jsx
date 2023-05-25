/* eslint-disable react/jsx-max-depth */
import React, { useContext, useState } from 'react';
import BotContext from '../../context/BotContext';
import { chatbot } from '../Steps/Step';

const initialStep = chatbot('0');
export default function Input() {
  const { userInputFilter, currentStep } = useContext(BotContext);
  const [input, setInput] = useState('');

  return (
    <form
      style={ { touchAction: 'manipulation' } }
      onSubmit={ (e) => {
        e.preventDefault();
        setInput('');
        userInputFilter(input, currentStep || initialStep);
      } }
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative w-[90%] mx-auto flex justify-end items-center mb-4">
        <input
          type="text"
          id="default-search"
          value={ input }
          onChange={ (e) => setInput(e.target.value) }
          className="block p-4 w-full text-sm text-gray-900 bg-white
            rounded-lg border border-gray-300 focus:ring-orange-500
            focus:border-orange-500"
          placeholder="Envie sua Mensagem..."
        />
        <svg
          onClick={ (e) => {
            e.preventDefault();
            setInput('');
            userInputFilter(input, currentStep || initialStep);
          } }
          className="absolute mr-2 w-10 h-10 p-2 rounded-full active:bg-gray-100"
          width="26"
          height="25"
          viewBox="0 0 26 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.75471 10.4839L17.02 12.0968V12.9032L5.75471 14.5161L0.12207
                24.1935L25.0666 12.0968L0.12207 0L5.75471 10.4839Z"
            fill="#A9A099"
          />
        </svg>
      </div>
    </form>
  );
}
