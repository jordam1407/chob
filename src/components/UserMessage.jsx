import React from 'react';
import propTypes from 'prop-types';

export default function UserMessage({ message }) {
  return (
    <div id="user-message" className="flex items-end justify-end">
      <div
        id="message"
        className="flex flex-col space-y-2 max-w-xs mx-2 order-1 items-end"
      >
        <span
          id="message"
          className="px-4 py-2 mb-8 rounded-lg inline-block rounded-br-none
        bg-blue-600 text-white "
        >
          {message}
          .
        </span>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
        alt="My profile"
        className="md:w-16 w-12 order-2"
      />
    </div>
  );
}

UserMessage.propTypes = {
  message: propTypes.number.isRequired,
};
