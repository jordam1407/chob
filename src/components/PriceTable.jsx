/* eslint-disable max-len */
import React, { useContext } from 'react';
import BotContext from '../context/BotContext';

function PriceTable() {
  const { userMessage } = useContext(BotContext);
  return (
    <div className="w-full bg-white rounded-lg p-2 flex flex-col">
      <table className="w-full text-center">
        <thead>
          <tr>
            <th className="bg-gray-200 rounded-b-lg border-gray-500 p-2 font-bold">
              Planos
            </th>
            <th className="bg-green-500 text-gray-100 rounded-b-lg p-2 font-bold">
              Base
            </th>
            <th className="bg-blue-500 text-gray-100 rounded-b-lg p-2 font-bold">
              Mid
            </th>
            <th className="bg-red-500 text-gray-100 rounded-b-lg p-2 font-bold">
              Pro
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-gray-200">
            <td className="p-2 text-indigo-800 font-semibold text-sm">
              Preço/mês
            </td>
            <td className="p-2 text-indigo-800 font-bold">R$49</td>
            <td className="p-2 text-indigo-800 font-bold">R$89</td>
            <td className="p-2 text-indigo-800 font-bold">R$119</td>
          </tr>
          <tr className="hover:bg-gray-200 bg-gray-100">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Modelos
            </td>
            <td className="p-2 text-green-600 font-semibold">1</td>
            <td className="p-2 text-green-600 font-semibold">2</td>
            <td className="p-2 text-green-600 font-semibold">4</td>
          </tr>
          <tr className="hover:bg-gray-200 bg-gray-100">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Atualizações/mês
            </td>
            <td className="p-2 text-red-600 font-semibold">0</td>
            <td className="p-2 text-green-600 font-semibold">1</td>
            <td className="p-2 text-green-600 font-semibold">2</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Customizável
            </td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
          </tr>
          <tr className="hover:bg-gray-200 bg-gray-100">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Consultor
            </td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Suporte
            </td>
            <td className="p-2 text-red-600 font-semibold">✗</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
          </tr>
          <tr className="hover:bg-gray-200 bg-gray-100">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Dashboard
            </td>
            <td className="p-2 text-red-600 font-semibold">✗</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
          </tr>
          <tr className="hover:bg-gray-200">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Histórico
            </td>
            <td className="p-2 text-red-600 font-semibold">✗</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
          </tr>
          <tr className="hover:bg-gray-200 bg-gray-100">
            <td className="p-2 font-semibold text-sm text-indigo-800">
              Analytics
            </td>
            <td className="p-2 text-red-600 font-semibold">✗</td>
            <td className="p-2 text-red-600 font-semibold">✗</td>
            <td className="p-2 text-green-600 font-semibold">✓</td>
          </tr>
        </tbody>
      </table>
      <div className="w-full my-4 flex">
        <a
          className="px-4 mx-auto py-2 bg-gradient-to-r from-indigo-800 to-indigo-900 text-gray-100 font-semibold rounded"
          href="https://wa.me/5531975222507"
          target="_blank"
          rel="noreferrer"
        >
          Contratar
        </a>
        <button
          onClick={ (e) => {
            e.preventDefault();
            userMessage('Menu', '0');
          } }
          className="px-4 mx-auto py-2 border-2 border-indigo-800 text-gray-900 font-semibold rounded"
        >
          Menu
        </button>
      </div>
    </div>
  );
}

export default PriceTable;
