import { useEffect } from 'react';
import Chat from './components/Chat';
import BotProvider from './context/BotProvider';

function App() {
  // testing GitLab push
  const MAGIC_NUMBER = 0.01;
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = function size() {
        const vh = window.innerHeight * MAGIC_NUMBER;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      };

      window.addEventListener('resize', handleResize);

      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center
    md:px-6 md:py-8 mx-auto h-screen my-auto min-h-screen lg:py-0"
    >
      <BotProvider>
        <Chat />
      </BotProvider>
    </div>
  );
}

export default App;
