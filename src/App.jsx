import axios from 'axios';
import { useState, useEffect } from 'react';
import Chat from './components/Chat';

function App() {
  const [data, setData] = useState([]);
  const items = data.map((item) => item.id);
  console.log('itemsssss', items);

  useEffect(() => {
    const getLogin = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        params: data,
      };

      try {
        const response = await axios.get(
          'http://localhost:3001/search',
          config,
        );
        setData(response.data);
        console.log(response.data[0].id);
      } catch (error) {
        return console.log(error.message);
      }
    };
    getLogin();
  }, []);

  return (
    <div className="border-2">
      <h1 className="text-5xl font-bold underline">Chat Bot</h1>
      <ul>
        {data.map((i, index) => <li key={ index }>{`${i.id} ${i.titulo}`}</li>)}
      </ul>
      <Chat />
    </div>
  );
}

export default App;
