const stepsModel = require('../models/steps.model.cjs');

const getTitle = async () => {
  const steps = await stepsModel.getSteps();
  const title = steps.map((s) => s.titulo);
  return title;
};

const getStep = async (id) => {
  const steps = await stepsModel.getSteps();
  const step = steps.filter((s) => s.id === id);
  console.log('SERVICE:', step);
  return step;
};

module.exports = {
  getTitle,
  getStep,
};
