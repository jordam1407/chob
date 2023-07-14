/* eslint-disable max-len */
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import BotContext from '../../context/BotContext';
import { chatbot } from '../Steps/Step';

export default function FabChat() {
  const { setOpen, createBotMessage, messages, open } = useContext(BotContext);

  const firstMessage = () => {
    setOpen(!open);
    if (messages.length < 1) {
      const firstStep = chatbot('0');
      createBotMessage(firstStep);
    }
  };

  const show = {
    opacity: 1,
    display: 'block',
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: 'none',
    },
  };
  return (
    <div className="fixed m-4 right-0 bottom-0">
      <button
        onClick={ firstMessage }
        className="w-16 h-16 bg-orange-700 rounded-full hover:bg-orange-800 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        {open ? (
          <motion.div
            animate={ open ? show : hide }
          >
            <svg
              className="w-8 mx-auto my-auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 5.25V10.35C23 11.62 22.58 12.69 21.83 13.43C21.09 14.18 20.02 14.6 18.75 14.6V16.41C18.75 17.09 17.99 17.5 17.43 17.12L16.46 16.48C16.55 16.17 16.59 15.83 16.59 15.47V11.4C16 9.5 15 8.5 13.19 8H6.39999C6.25999 8 6.13 8.01002 6 8.02002V5.25C6 2.7 7.7 1 10.25 1H18.75C21.3 1 23 2.7 23 5.25Z"
                fill="#E6EAEE"
              />
              <path
                d="M15.59 12.4V16.47C15.59 16.83 15.55 17.17 15.46 17.48C15.09 18.95 13.87 19.87 12.19 19.87H9.47L6.45 21.88C6 22.19 5.39999 21.86 5.39999 21.32V19.87C4.37999 19.87 3.53 19.53 2.94 18.94C2.34 18.34 2 17.49 2 16.47V12.4C2 10.5 3.18 9.19002 5 9.02002C5.13 9.01002 5.25999 9 5.39999 9H12.19C14.23 9 15.59 10.36 15.59 12.4Z"
                fill="#E6EAEE"
                stroke="#E6EAEE"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.6 14.5H11.609"
                stroke="#C2410C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.80029 14.5H8.80929"
                stroke="#C2410C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 14.5H6.009"
                stroke="#C2410C"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        ) : (
          <motion.div
            animate={ !open ? show : hide }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 mx-auto my-auto"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="#E6EAEE"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M18 6l-12 12" />
              <path d="M6 6l12 12" />
            </svg>
          </motion.div>
        )}
      </button>
    </div>
  );
}
