import { useContext } from 'react';
import BotContext from '../../../context/BotContext';
import chob from '../../../assets/chob-sem-fundo.png';

export default function Navbar() {
  const { setOpen } = useContext(BotContext);
  return (
    <div
      className="flex sm:static h-24 w-full sm:h-24 top-0
      bg-gradient-to-r from-indigo-800 to-indigo-900
      sm:rounded-t-lg sm:rounded-none pl-8 pr-4"
    >
      <img
        src={ chob }
        alt="SigeBot"
        className="w-10 my-auto"
      />
      <div className="text-white ml-2 my-auto font-bold font-custom flex flex-col">
        <span className="text-2xl text-white ml-2 my-auto font-bold font-custom">
          LeadsBy
        </span>
        <span className="text-sm text-white font-light ml-2 my-auto font-custom">
          Online
        </span>
      </div>
      <button onClick={ () => setOpen(false) } className="ml-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-x"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
