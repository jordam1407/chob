/* eslint-disable max-len */
import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import BotContext from '../context/BotContext';

export default function InputForm({ items }) {
  const { userMessage } = useContext(BotContext);
  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        userMessage('', items.trigger);
      } }
      className="w-full bg-white rounded-lg p-2 flex-col flex"
    >
      <label
        htmlFor="input-nome"
        className="block text-sm font-medium mb-2 my-auto w-[25%] text-gray-600"
      >
        Nome:
      </label>
      <input
        type="text"
        id="input-nome"
        className="mb-2 py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Nome"
      />
      <label
        htmlFor="input-email"
        className="block text-sm font-medium mb-2 my-auto w-[25%] text-gray-600"
      >
        Email:
      </label>
      <input
        type="email"
        id="input-email"
        className="mb-2 py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="you@site.com"
      />
      <label
        htmlFor="input-telefone"
        className="block text-sm font-medium mb-2 my-auto w-[25%] text-gray-600"
      >
        Telefone:
      </label>
      <input
        type="text"
        id="input-telefone"
        className="mb-2 py-2 px-3 block w-full border border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500"
        placeholder="Telefone/WhatsApp"
      />
      <button
        type="submit"
        className="mx-auto px-6 py-1 my-auto leading-loose text-sm text-center font-bold text-gray-100 bg-gradient-to-r from-indigo-700 to-indigo-900 shadow hover:from-indigo-800 hover:to-indigo-900 rounded"
      >
        Enviar
      </button>
    </form>
  );
}

InputForm.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        trigger: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.string,
  ]).isRequired,
};
