import PropTypes from 'prop-types';

export default function BotButtonsOpt({ functions, items }) {
  return (
    <div>
      {items
        && items.map(({ emoji, titulo }, index) => (
          <button
            key={ `${emoji} ${index}` }
            id={ titulo }
            value={ `${emoji} ${titulo}` }
            onClick={ functions }
            className="px-4 py-2 ml-0 mx-2 my-2 rounded-full inline-block text-sm
          border border-black hover:bg-gray-300 text-gray-600"
          >
            {`${emoji} ${titulo}`}
          </button>
        ))}
    </div>
  );
}

BotButtonsOpt.propTypes = {
  functions: PropTypes.func.isRequired,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        emoji: PropTypes.string.isRequired,
        titulo: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.string,
  ]).isRequired,
};
