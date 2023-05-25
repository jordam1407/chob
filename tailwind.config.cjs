/* eslint-disable max-len */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'markdown-svg': 'url(\'data:image/svg+xml,%3Csvg%20width%3D%22130%22%20height%3D%2218%22%20viewBox%3D%220%200%20130%2018%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M127.5%207.50021C107.5%203.16688%2055.4%20-1.4%201%209C30%203.83335%2085.6%20-0.999732%20122%2015.0003%22%20stroke%3D%22%23ea580c%22%20stroke-width%3D%225%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E\')',
        'markdown-svg-small': 'url(\'data:image/svg+xml,%3Csvg%20width%3D%2226%22%20height%3D%225%22%20viewBox%3D%220%200%2026%205%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M25%202.17562C21.2055%201.12154%2011.3209%200.0106485%201%202.54044C6.50198%201.28366%2017.0506%200.108013%2023.9565%204%22%20stroke%3D%22%23ea580c%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E\')',
      },
    },
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
  },
  plugins: [],
};
