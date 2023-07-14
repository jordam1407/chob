/* eslint-disable max-len */
/* eslint-disable max-lines */
/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-use-before-define */
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BotContext from './BotContext';
import BotButtonsOpt from '../components/BotButtonsOpt';
import UserMessage from '../components/UserMessage';
import BotMessage from '../components/BotMessage';
import { chatbot } from '../components/Steps/Step';
import InputForm from '../components/InputForm';
import PriceTable from '../components/PriceTable';
import { generateChatId, writeFile } from '../service/selector';

const QUINHENTOS = 500;
const MILXCINCO = 1500;
const initialStep = chatbot('0');

export default function BotProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [chatConversation, setChatConversation] = useState({
    botId: 's56df4DF4sd4f66sdF',
    chatId: generateChatId('Leadster'),
    responses: [],
    date: new Date().toLocaleString(),
  });
  const [open, setOpen] = useState(false);

  const createUserMessage = (text) => {
    const message = {
      element: <UserMessage message={ text } />,
    };
    setMessages((prev) => [...prev, message]);
  };

  const chatHistory = (payload) => {
    setChatConversation((prev) => ({
      ...prev,
      responses: [...prev.responses, payload],
    }));
  };

  useEffect(() => {
    writeFile(chatConversation);
  }, [chatConversation]);

  const createEndBotMessage = async (nextStep) => {
    console.log(nextStep);
    setIsLoading(true);

    const botMessage = {
      element: <BotMessage text={ nextStep.message } />,
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, QUINHENTOS);
  };
  const createBotMessage = async (nextStep) => {
    setIsLoading(true);

    const botMessage = {
      element: (
        <BotMessage
          text={ nextStep.message }
          functions={ <BotButtonsOpt items={ nextStep.options } /> }
        />
      ),
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, QUINHENTOS);
  };

  const createBotMessageForm = async (nextStep) => {
    setIsLoading(true);
    if (nextStep.component.value === 'test form') {
      const botMessage = {
        element: (
          <BotMessage
            text={ nextStep.message }
            functions={ <InputForm items={ nextStep.component } /> }
          />
        ),
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, QUINHENTOS);
    }
    if (nextStep.component.value === 'price table') {
      const botMessage = {
        element: <BotMessage text={ nextStep.message } />,
      };
      const botMessage2 = {
        element: <PriceTable items={ nextStep.component } />,
      };
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsLoading(false);
      }, QUINHENTOS);
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage2]);
      }, MILXCINCO);
    }
  };

  function userMessage(input, trigger) {
    if (input !== '') {
      createUserMessage(input);
      chatHistory({ userMessage: input, date: new Date().toLocaleString });
    }
    const nextStep = chatbot(trigger);

    if (!nextStep) {
      return userMessage('', 'what');
    }

    setCurrentStep(nextStep);
    chatHistory({ ...nextStep, date: new Date().toLocaleString });

    if (nextStep.options) {
      return createBotMessage(nextStep);
    }
    if (nextStep.text) {
      return createBotMessage(nextStep);
    }
    if (nextStep.end) {
      return createEndBotMessage(nextStep);
    }
    if (nextStep.component) {
      return createBotMessageForm(nextStep);
    }
    if (nextStep.trigger) {
      createEndBotMessage(nextStep);
      setTimeout(() => userMessage('', nextStep.trigger), MILXCINCO);
    }
  }

  function userInputFilter(input, step) {
    if (!step) {
      createUserMessage(input);
      chatHistory({ userMessage: input, date: new Date().toLocaleString });

      return userMessage('', 'what');
    }

    if (!step.options) {
      createUserMessage(input);
      chatHistory({ userMessage: input, date: new Date().toLocaleString });
      return userMessage('', 'what');
    }
    const selectedOption = step.options.find((option) => option.value.some(
      (recognizedInput) => recognizedInput.toLowerCase() === input.toLowerCase(),
    ));

    if (!selectedOption) {
      createUserMessage(input);
      return userMessage('', 'what');
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
    createBotMessage,
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
