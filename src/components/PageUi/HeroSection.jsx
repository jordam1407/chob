/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import bgPattern from '../../assets/pattern.dark2.svg';

function Index() {
  return (
    <section className="relative overflow-hidden font-custom md:min-h-screen">
      <div
        className="bg-gray-900"
        style={ {
          backgroundPosition: 'center',
        } }
      >
        <div
          className="container relative mx-auto flex flex-col items-center md:justify-center pt-24 md:pt-0"
          style={ {
            minHeight: 'calc(100vh - 80px)',
            backgroundImage: `url(${bgPattern})`,
            backgroundPosition: 'center',
          } }
        >
          <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
            <h1 className="text-2xl sm:text-3xl font-custom md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-100 font-medium leading-7 md:leading-10">
              Aumente suas Conversões com
              {' '}
              <span className="md:bg-markdown-svg bg-markdown-svg-small bg-no-repeat bg-bottom bg-contain">Chob:</span>
              {' '}
              Transforme Visitantes em Clientes!
            </h1>
            <p className="font-custom mt-5 sm:mt-10 lg:w-10/12 text-gray-300 font-normal text-center text-sm sm:text-lg">Otimize suas Vendas e Fidelize Clientes: Transforme seu Site com Chob, o Companheiro de ChatBot Definitivo. Experimente Agora!</p>
          </div>
          <div className="flex justify-center items-center">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 bg-orange-600 transition duration-150 ease-in-out hover:bg-orange-700 lg:text-xl lg:font-semibold  rounded text-white px-4 sm:px-10 border border-orange-600 py-2 sm:py-4 text-sm">Iniciar Agora</button>
            <button className="ml-4 focus:outline-none focus:ring-offset-2 rounded bg-transparent transition duration-150 ease-in-out hover:border-orange-600 lg:text-xl md:font-semibold text-gray-800 bg-white hover:bg-gray-200 font-medium focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50 px-4 sm:px-10 py-2 sm:py-4 text-sm">Live Demo</button>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute md:bottom-0 bottom-32 animate-bounce" width="40" height="40" viewBox="0 0 24 24" strokeWidth="2" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7l5 5l5 -5" />
            <path d="M7 13l5 5l5 -5" />
          </svg>
        </div>
      </div>
      <div className="wave-bottom w-full text-gray-900">
        <svg
          viewBox="0 0 1440 116"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

export default Index;
