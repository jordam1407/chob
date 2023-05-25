import BotProvider from './context/BotProvider';
import Home from './pages/Home';

function App() {
  return (
    <BotProvider>
      <Home />
    </BotProvider>
  );
}

export default App;
