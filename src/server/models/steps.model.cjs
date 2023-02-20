const fs = require('fs/promises');
const path = require('path');

// Path to the json file
const dataPath = path.resolve(process.cwd(), 'src/server/data/database.json');

// Read the json file and return it all
const getData = async () => {
  const response = await fs.readFile(dataPath, 'utf8');
  const result = JSON.parse(response);
  return result;
};

// Get the initial configuration steps
const getSteps = async () => {
  const { initial_config: initialConfig } = await getData();
  console.log('MODEL:', initialConfig);
  return initialConfig;
};

module.exports = {
  getSteps,
};
