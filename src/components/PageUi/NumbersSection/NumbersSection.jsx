/* eslint-disable react/jsx-max-depth */
/* eslint-disable max-len */
import { withAnimation } from '../../hocs';

const stats = [
  { number: '2.500', title: 'Conversas Concluídas' },
  { number: '48%', title: 'Aumento da taxa de conversão' },
  { number: '+150', title: 'Chats Ativos' },
  { number: '35%', title: 'Redução de atendimento humano' },
];

function NumbersSection() {
  return (
    <section
      className="py-20 xl:pt-24 xl:pb-32 bg-gray-100"
      style={ { backgroundImage: 'url(flex-ui-assets/elements/pattern-dark.svg\')', backgroundPosition: 'center' } }
    >
      <div className="wave wave-top w-full text-gray-900">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1440 64.5909H1090.08C833.336 64.5909 580.229 -7.62939e-06 360 -7.62939e-06C139.771 -7.62939e-06 0 64.5909 0 64.5909V116H1440V64.5909Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="container px-4 py-24 mx-auto bg-gray-900">
        <div className="text-center">
          <span className="inline-block py-px px-2 mb-4 text-md leading-5 text-orange-500 bg-orange-100 font-medium uppercase rounded-full">
            Nossos Números
          </span>
          <div className="flex flex-wrap justify-center -mx-4">
            {stats.map(({ number, title }, i) => (
              <div key={ `stats-section${i}` } className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h2 className="mb-2 text-4xl md:text-5xl text-orange-600 font-bold tracking-tighter">
                  {number}
                </h2>
                <p className="text-lg md:text-xl text-gray-400 font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="wave wave-bottom w-full text-gray-900">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 51.4091H349.922C606.664 51.4091 859.771 116 1080 116C1300.23 116 1440 51.4091 1440 51.4091V0H0V51.4091Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}

export default withAnimation(NumbersSection, 'fade-up');
