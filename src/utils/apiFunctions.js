import axios from 'axios';

const URL_STEPS = 'http://localhost:3001/steps';
const getTitles = async () => {
  try {
    const response = await axios.get(URL_STEPS);
    console.log(response.data[0].id);
    return response.data;
  } catch (error) {
    return console.log(error.message);
  }
};

export default getTitles;
