const stepsModel = require('../models/steps.model.cjs');

const getTitle = async () => {
  const steps = await stepsModel.getSteps();
  const title = steps.map((s) => s.titulo);
  console.log('SERVICE:', title);
  return title;
};

module.exports = {
  getTitle,
};
