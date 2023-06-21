/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import React from 'react';
import { withAnimation } from '../hocs';
import bgPattern from '../../assets/pattern.dark2.svg';
import bgOrange from '../../assets/orange.svg';

function MiddleCTASection() {
  return (
    <section className="relative py-16 pb-24">
      <div className="absolute bottom-10 left-0 h-[150px] w-full bg-orange-500" />
      <img src={ bgOrange } alt="" className="w-full bg-gray-100 absolute -bottom-5 left-0" />
      <div className="container px-4 mx-auto">
        <div className="relative py-16 px-4 md:px-24 bg-gray-900 rounded-xl">
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={ bgPattern }
            alt=""
          />
          <div className="relative flex flex-wrap items-center -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
              <div className="max-w-md">
                <h2 className="mb-4 text-3xl md:text-4xl font-heading font-bold text-white leading-snug">
                  Impulsione seu Negócio, Experimente o Poder do
                  {' '}
                  <span className="md:bg-markdown-svg bg-markdown-svg-small bg-no-repeat bg-bottom bg-contain">Futuro</span>
                </h2>
                <p className="text-lg md:text-xl font-heading font-medium text-gray-400">
                  Chob é um ChatBot direcionado por suas regras de negócio, 100% customizável e simplificado.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex flex-wrap items-center lg:justify-end">
                <a
                  className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-orange-50 bg-orange-500 hover:bg-orange-600 font-medium focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm transition duration-150 ease-in-out"
                  href="/"
                >
                  Get Started
                </a>
                <a
                  className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto text-lg leading-7 text-gray-800 bg-white hover:bg-gray-100 font-medium focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 rounded-md shadow-sm transition duration-150 ease-in-out"
                  href="/"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default withAnimation(MiddleCTASection, 'fade-up');
