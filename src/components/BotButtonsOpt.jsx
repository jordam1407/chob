import { useContext } from 'react';
import PropTypes from 'prop-types';
import BotContext from '../context/BotContext';

export default function BotButtonsOpt({ items }) {
  const { userMessage } = useContext(BotContext);
  return (
    <div>
      {items
        && items.map(({ label, trigger }, index) => (
          <button
            key={ `${trigger}${index}` }
            onClick={ () => {
              console.log(trigger);
              userMessage(label, trigger);
            } }
            className="px-4 py-2 ml-0 mx-2 my-2 rounded-full inline-block text-sm
          border-2 border-blue-600 hover:bg-blue-100 text-gray-600"
          >
            {label}
          </button>
        ))}
    </div>
  );
}

BotButtonsOpt.propTypes = {
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        trigger: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.string,
  ]).isRequired,
};
