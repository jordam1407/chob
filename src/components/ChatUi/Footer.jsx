import React from 'react';

export default function Footer() {
  return (
    <div
      className="mx-auto bg-gray-200 w-full justify-center flex
      py-2 md:rounded-b-lg"
    >
      <span>
        Powered by
        {' '}
        <span className="text-orange-600 font-medium">LeadsBy</span>
      </span>
    </div>
  );
}
