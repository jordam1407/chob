import React, { useEffect, useRef, useContext, cloneElement } from 'react';
import BotContext from '../context/BotContext';
import Loading from './Loading';
import BotButtonsOpt from './BotButtonsOpt';
import Navbar from './ChatUi/NavBar/Navbar';
import BotMessage from './BotMessage';
import Input from './ChatUi/Input';
import Footer from './ChatUi/Footer';
import steps from './Steps/Step';

export default function Chat() {
  const { messages, isLoading } = useContext(BotContext);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isLoading, messages]);

  return (
    <div
      className="fixed flex flex-col max-h-[90%] md:rounded-lg md:w-[370px] w-[90%]
      md:h-[90%] h-screen shadow-md m-4 right-0 bottom-0 bg-transparent z-50"
    >
      <Navbar />
      <div
        id="messages"
        className="flex flex-col flex-1 space-y-8 p-3 overflow-y-auto
          scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter
          scrollbar-w-2 scrolling-touch md:mt-0 bg-gray-100"
      >
        {steps.map((step) => {
          if (step.id === '0') {
            return (
              <BotMessage
                key={ step.id }
                text={ [step.title, step.message] }
                functions={ <BotButtonsOpt items={ step.options } /> }
              />
            );
          }
          return null;
        })}
        {messages.map((m, i) => cloneElement(m.element, { key: i }))}
        {isLoading && <Loading />}
        <div ref={ messagesEndRef } />
      </div>
      <Input />
      <Footer />
    </div>
  );
}
