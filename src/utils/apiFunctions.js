import axios from 'axios';

function encodeUrl(str) {
  return encodeURIComponent(str)
    .replace(/!/g, '%21')
    .replace(/'/g, '%27')
    .replace(/\(/g, '%28')
    .replace(/\)/g, '%29')
    .replace(/\*/g, '%2A')
    .replace(/%20/g, '+');
}

const getTitles = async () => {
  const URL = 'https://sigebot-back.vercel.app/steps';
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};

const getStepTitles = async () => {
  const URL = 'https://sigebot-back.vercel.app/config';
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};

const getSteps = async (id) => {
  const URL = `https://sigebot-back.vercel.app/config/${id}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};

const getParentOption = async () => {
  const URL = 'https://sigebot-back.vercel.app/steps/manual';
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};
const getChildOption = async (titulo) => {
  const encodedTitulo = encodeUrl(titulo);
  const URL = `https://sigebot-back.vercel.app/steps/manual/child?titulo=${encodedTitulo}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};
const getGrandChildOption = async (titulo, subtitulo) => {
  console.log(titulo, subtitulo);
  const encodedTitulo = encodeUrl(titulo);
  const encodedSubtitulo = encodeUrl(subtitulo);
  const URL = `https://sigebot-back.vercel.app/steps/manual/grandchild?titulo=${encodedTitulo}&subtitulo=${encodedSubtitulo}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};
const getLastResult = async (titulo, subtitulo, lastText) => {
  const encodedTitulo = encodeUrl(titulo);
  const encodedSubtitulo = encodeUrl(subtitulo);
  const encodedLastText = encodeUrl(lastText);
  const URL = `https://sigebot-back.vercel.app/steps/manual/lastresult?titulo=${encodedTitulo}&subtitulo=${encodedSubtitulo}&lastText=${encodedLastText}`;
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};

export {
  getStepTitles,
  getSteps,
  getTitles,
  getParentOption,
  getChildOption,
  getGrandChildOption,
  getLastResult,
};
