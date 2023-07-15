import React, { useContext } from 'react';
import Chat from '../components/Chat';
import FabChat from '../components/PageUi/FabChat';
import BotContext from '../context/BotContext';

export default function Home() {
  const { open } = useContext(BotContext);
  return (
    <div>
      <FabChat />
      {open && <Chat />}
    </div>
  );
}
