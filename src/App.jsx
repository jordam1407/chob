import axios from 'axios';
import { useState, useEffect } from 'react';
import Chat from './components/Chat';

function App() {
  const [data, setData] = useState([]);

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
    <div
      className="flex flex-col items-center justify-center
      px-6 py-8 mx-auto h-screen my-auto min-h-screen lg:py-0"
    >
      <h1 className="text-5xl font-bold underline">Chat Bot</h1>
      <ul>
        {data.map((i, index) => (
          <li key={ index }>{`${i.id} ${i.titulo}`}</li>
        ))}
      </ul>
      <Chat />
    </div>
  );
}

export default App;
