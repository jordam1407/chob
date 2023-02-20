import Chat from './components/Chat';

function App() {
  return (
    <div
      className="flex flex-col items-center justify-center
      px-6 py-8 mx-auto h-screen my-auto min-h-screen lg:py-0"
    >
      {/* <ul>
        {data.map((i, index) => (
          <li key={ index }>{`${index + 1} ${i}`}</li>
        ))}
      </ul> */}
      <Chat />
    </div>
  );
}

export default App;
