import React, { useEffect, useRef, useContext, cloneElement } from 'react';
import BotContext from '../context/BotContext';
import Loading from './Loading';
import Navbar from './ChatUi/NavBar/Navbar';
import Input from './ChatUi/Input';
import Footer from './ChatUi/Footer';
import { withAnimation } from './hocs/whit-animation.hoc';

function Chat() {
  const { messages, isLoading } = useContext(BotContext);

  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [isLoading, messages]);

  return (
    <div
      className="fixed flex flex-col h-full w-full md:rounded-lg sm:h-[80%]
      sm:w-[370px] shadow-md md:m-4 right-0 bottom-20 bg-transparent z-50"
    >
      <Navbar />
      <div
        id="messages"
        className="flex h-[100%] flex-col flex-1 space-y-8 p-3 overflow-y-auto
          scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter
          scrollbar-w-2 scrolling-touch md:mt-0 bg-gray-100"
      >
        {messages.map((m, i) => cloneElement(m.element, { key: i }))}
        {isLoading && <Loading />}
        <div ref={ messagesEndRef } />
      </div>
      <Input />
      <Footer />
    </div>
  );
}

export default withAnimation(Chat, 'fade-in');
