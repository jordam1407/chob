import axios from 'axios';

const getTitles = async () => {
  const URL_TITLES = 'http://localhost:3001/steps';
  try {
    const response = await axios.get(URL_TITLES);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};
const getSteps = async (id) => {
  const URL_STEPS = `http://localhost:3001/steps/${id}`;
  try {
    const response = await axios.get(URL_STEPS);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};

export { getTitles, getSteps };
