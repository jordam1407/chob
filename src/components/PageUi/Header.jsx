/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React, { useState } from 'react';
import chob from '../../assets/chob-sem-fundo.png';

const navs = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'About',
    link: '/',
  },
  {
    text: 'Blog',
    link: '/',
  },
  {
    text: 'FAQ',
    link: '/',
  },
  {
    text: 'Contact',
    link: '/',
  },
];

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="font-custom">
      <nav className="relative px-4 py-4 lg:mx-auto flex md:justify-center justify-between shadow items-center bg-gray-900">
        <div className="flex md:w-[80%] w-full justify-between">
          <a className="text-3xl font-bold leading-none flex" href="/">
            <img className="h-12" src={ chob } alt="" />
            <h4 className="font-custom font-medium my-auto text-xl ml-2 text-gray-50">Chob</h4>
          </a>
          <div
            className="lg:hidden"
            onClick={ () => setIsNavOpen((prev) => !prev) }
            onKeyDown={ (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setIsNavOpen((prev) => !prev);
              }
            } }
            role="button"
            tabIndex={ 0 }
          >
            <button className="navbar-burger flex items-center text-gray-100 p-3">
              <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <ul className={ isNavOpen ? '' : 'hidden lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-6' }>
            {navs?.map(({ text, link }, index) => (
              <li key={ `nav-mobile-${index}` }>
                <a
                  className="font-custom block py-3 px-4 text-gray-100 hover:text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                  href={ link }
                >
                  {text}
                </a>
              </li>
            ))}
          </ul>
          <a className="hidden lg:inline-block px-6 py-2 my-auto leading-loose text-sm text-center font-bold text-gray-100 bg-orange-500 shadow hover:bg-orange-700  rounded" href="/signup">Login</a>
        </div>
      </nav>
      <div className={ isNavOpen ? 'navbar-menu relative z-50' : 'navbar-menu relative z-50 hidden' }>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-gray-900 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="/">
              <img className="h-12" src={ chob } alt="" />
            </a>
            <button className="navbar-close" onClick={ () => setIsNavOpen((prev) => !prev) }>
              <svg className="h-6 w-6 text-gray-100 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div>
            <ul>
              {navs?.map(({ text, link }, index) => (
                <li key={ `nav-mobile-${index}` }>
                  <a
                    className="font-custom block py-3 px-4 text-gray-100 hover:text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                    href={ link }
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a className="block px-4 py-3 my-auto leading-loose text-xs text-center text-white font-semibold bg-orange-600 shadow hover:bg-orange-700  rounded" href="/">Login</a>
            </div>
            <p className="my-4 text-xs text-center text-[#413F3D] font-custom">
              <span>Copyright © 2023 Chob - All Rights Reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}
