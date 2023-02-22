import { getSteps, getTitles } from './apiFunctions';

const getInitialStep = async (n) => {
  setIsLoading(true);
  const stepsData = await getSteps(n);
  const titleData = await getTitles();
  console.log(stepsData);
  const buttons = {
    element: (
      <div id="bot-message" className="flex items-end">
        <div
          className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
        items-start"
        >
          <span
            className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
            bg-gray-300 text-gray-600"
          >
            {`Agora iremos iniciar a configuração do sistema que consiste 
            em ${titleData.length}
            etapas!`}
            <br />
            <br />
            Acesse o Sistema - SIGE com seu usuário e senha e siga os passos a
            seguir.
            <br />
            <br />
            Leia atentamente cada passo, após concluir cada um clique no botão
            &quot;Próximo&quot;.
          </span>
          <div
            className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
            bg-gray-300 text-gray-600"
          >
            <h1 className="text-lg font-bold">
              {`${n} - ${stepsData[0].titulo}:`}
            </h1>
            <ul className="space-y-2 mt-4 list-disc font-bold">
              📝 Observações:
              {stepsData[0].obs.map((o) => (
                <li className="ml-6 font-normal" key={o}>
                  {o}
                </li>
              ))}
            </ul>
            <h1 className="mt-4 text-md font-bold">🗺️ Caminho:</h1>
            <p className="">
              Na barra de menu principal, acesse:
              <br />
              <strong>{stepsData[0].caminho}</strong>
            </p>
            <ul className="space-y-2 mt-4 list-disc font-bold">
              👣 Passos:
              {stepsData[0].passos.map((o) => (
                <li className="ml-6 font-normal" key={o}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={ sigeBot }
          alt="SigeBot"
          className="md:w-16 w-12 rounded-full bg-gray-300"
        />
      </div>
    ),
  };
  setMessages((prev) => [...prev, buttons]);
};

const getStep = async (n) => {
  setIsLoading(true);
  const stepsData = await getSteps(n);
  console.log(stepsData);
  const buttons = {
    element: (
      <div id="bot-message" className="flex items-end">
        <div
          className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
        items-start"
        >
          <div
            className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
            bg-gray-300 text-gray-600"
          >
            <h1 className="text-lg font-bold">
              {`${n} - ${stepsData[0].titulo}:`}
            </h1>
            <ul className="space-y-2 mt-4 list-disc font-bold">
              📝 Observações:
              {stepsData[0].obs.map((o) => (
                <li className="ml-6 font-normal" key={o}>
                  {o}
                </li>
              ))}
            </ul>
            <h1 className="mt-4 text-md font-bold">🗺️ Caminho:</h1>
            <p className="">
              Na barra de menu principal, acesse:
              <br />
              <strong>{stepsData[0].caminho}</strong>
            </p>
            <ul className="space-y-2 mt-4 list-disc font-bold">
              👣 Passos:
              {stepsData[0].passos.map((o) => (
                <li className="ml-6 font-normal" key={o}>
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src={sigeBot}
          alt="SigeBot"
          className="md:w-16 w-12 rounded-full bg-gray-300"
        />
      </div>
    ),
  };
  setMessages((prev) => [...prev, buttons]);
};

const getManual = async () => {
  console.log('chamou manual');
  const notImplemented = {
    element: (
      <div id="bot-message" className="flex items-end">
        <div
          className="flex flex-col mb-8 space-y-2 max-w-xs mx-2 order-1
        items-start"
        >
          <span
            className="px-4 py-2 rounded-lg inline-block text-sm rounded-bl-none
            bg-gray-300 text-gray-600"
          >
            Sinto muito! O Manual Online ainda não foi implementado.
          </span>
        </div>
        <img
          src={sigeBot}
          alt="SigeBot"
          className="md:w-16 w-12 rounded-full bg-gray-300"
        />
      </div>
    ),
  };
  setMessages((prev) => [...prev, notImplemented]);
};

const userMessages = (e) => {
  const userMessage = {
    element: (
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
            {e.target.id}
          </span>
        </div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt="My profile"
          className="md:w-16 w-12 order-2"
        />
      </div>
    ),
  };
  setMessages((prev) => [...prev, userMessage]);
  if (e.target.id === '🛠️ Configurar Sistema SIGE') {
    getInitialStep(step);
  }
  if (e.target.id === '📖 Manual') {
    getManual();
  }
};

const nextStep = async () => {
  setStep((prev) => prev + 1);
  getStep(step + 1);
};

export { getInitialStep, getStep, getManual, userMessages, nextStep };
