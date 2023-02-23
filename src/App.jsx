import Chat from './components/Chat';
import BotProvider from './context/BotProvider';

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
    md:px-6 md:py-8 px-4 mx-auto h-screen my-auto min-h-screen lg:py-0"
    >
      <BotProvider>
        <Chat />
      </BotProvider>
    </div>
  );
}

export default App;
