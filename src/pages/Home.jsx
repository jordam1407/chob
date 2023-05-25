import React, { useContext } from 'react';
import Chat from '../components/Chat';
import FabChat from '../components/PageUi/FabChat';
import BotContext from '../context/BotContext';
import HeroSection from '../components/PageUi/HeroSection';
import Header from '../components/PageUi/Header';

export default function Home() {
  const { open } = useContext(BotContext);
  return (
    <>
      <Header />
      <HeroSection />
      {!open && <FabChat />}
      {open && <Chat />}
    </>
  );
}
