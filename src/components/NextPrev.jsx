import React, { useContext } from 'react';
import propTypes from 'prop-types';
import BotContext from '../context/BotContext';
import UserMessage from './UserMessage';

export default function NextPrev({ n }) {
  const { setIsLoading, getStep, setMessages } = useContext(BotContext);

  const nextStep = async (e) => {
    const text = e.target.id;
    const userMessage = {
      element: <UserMessage message={ text } />,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    getStep(n + 1);
  };

  const prevStep = async (e) => {
    const text = e.target.id;
    const userMessage = {
      element: <UserMessage message={ text } />,
    };
    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    if (n < 1) {
      getStep(n - 1);
    } else {
      getStep(1);
    }
  };

  return (
    <>
      <button
        id="Anterior"
        onClick={ prevStep }
        className="px-4 py-2 w-fit mx-4 my-2 rounded-full inline-block text-sm
        border border-black hover:bg-gray-300 text-gray-600"
      >
        ANTERIOR
      </button>
      <button
        id="Próximo"
        onClick={ nextStep }
        className="px-4 py-2 w-fit mx-4 my-2 rounded-full inline-block text-sm
            border border-black hover:bg-gray-300 text-gray-600"
      >
        PRÓXIMO
      </button>
    </>
  );
}

NextPrev.propTypes = {
  n: propTypes.number.isRequired,
};
