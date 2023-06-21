import React, { useContext } from 'react';
import Chat from '../components/Chat';
import FabChat from '../components/PageUi/FabChat';
import BotContext from '../context/BotContext';
import HeroSection from '../components/PageUi/HeroSection';
import Header from '../components/PageUi/Header';
import Footer from '../components/PageUi/Footer/Footer';
import HowItWorksSection from '../components/PageUi/HowItWorksSection/HowItWorksSection';
import MiddleCTASection from '../components/MiddleCTASection';
import NumbersSection from '../components/PageUi/NumbersSection';
import PricingSection from '../components/PageUi/PricingSection';

export default function Home() {
  const { open } = useContext(BotContext);
  return (
    <>
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <MiddleCTASection />
      <PricingSection />
      <NumbersSection />
      <Footer />
      {!open && <FabChat />}
      {open && <Chat />}
    </>
  );
}
