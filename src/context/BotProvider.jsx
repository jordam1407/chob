/* eslint-disable max-len */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { useState } from 'react';
import PropTypes from 'prop-types';
import BotContext from './BotContext';
import BotButtonsOpt from '../components/BotButtonsOpt';
import UserMessage from '../components/UserMessage';
import BotMessage from '../components/BotMessage';
import { chatbot } from '../components/Steps/Step';

const QUINHENTOS = 500;
const initialStep = chatbot('0');

export default function BotProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [open, setOpen] = useState(false);

  const repeatMessage = async () => {
    setIsLoading(true);
    console.log(currentStep);
    const notImplemented = {
      element: (
        <BotMessage
          text={ [
            'Desculpe, acho que não entendi sua pergunta, vamos tentar novamente.',
            'Selecione uma opção para continuarmos:',
          ] }
          functions={ <BotButtonsOpt items={ currentStep.options } /> }
        />
      ),
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, notImplemented]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const createUserMessage = (text) => {
    const message = {
      element: <UserMessage message={ text } />,
    };
    setMessages((prev) => [...prev, message]);
  };

  const createBotMessage = async (nextStep) => {
    setIsLoading(true);

    const botMessage = {
      element: (
        <BotMessage
          text={ [nextStep.title, nextStep.message] }
          functions={
            <BotButtonsOpt
              items={ nextStep.options }
            />
          }
        />
      ),
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  function userMessage(input, trigger) {
    createUserMessage(input);
    const nextStep = chatbot(trigger);

    if (!nextStep) {
      return repeatMessage();
    }

    setCurrentStep(nextStep);

    return createBotMessage(nextStep);
  }

  function userInputFilter(input, step) {
    if (!step) {
      createUserMessage(input);
      return repeatMessage();
    }

    const selectedOption = step.options.find((option) => option.value.some((recognizedInput) => recognizedInput.toLowerCase() === input.toLowerCase()));

    if (!selectedOption) {
      createUserMessage(input);
      return repeatMessage();
    }
    return userMessage(input, selectedOption.trigger);
  }

  const deps = {
    setIsLoading,
    setMessages,
    userMessage,
    currentStep,
    setCurrentStep,
    userInputFilter,
    open,
    setOpen,
  };

  const deps2 = {
    messages,
    isLoading,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <BotContext.Provider value={ { ...deps, ...deps2 } }>
      {children}
    </BotContext.Provider>
  );
}

BotProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
