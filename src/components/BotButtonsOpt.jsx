import propTypes from 'prop-types';

export default function BotButtonsOpt({ functions, items }) {
  return (
    <>
      <span
        className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
       bg-gray-300 text-gray-600"
      >
        Escolha uma das opções para continuar:
      </span>
      <div>
        {items && items.map(({ emoji, titulo }) => (
          <button
            key={ emoji }
            id={ `${emoji} ${titulo}` }
            onClick={ functions }
            className="px-4 py-2 ml-0 mx-2 my-2 rounded-full inline-block text-sm
          border border-black hover:bg-gray-300 text-gray-600"
          >
            {`${emoji} ${titulo}`}
          </button>
        ))}
      </div>
    </>
  );
}

BotButtonsOpt.propTypes = {
  functions: propTypes.shape({
    userMessages: propTypes.func.isRequired,
  }).isRequired,
  items: propTypes.arrayOf(
    propTypes.shape({
      emoji: propTypes.string.isRequired,
      titulo: propTypes.string.isRequired,
    }),
  ).isRequired,
};
