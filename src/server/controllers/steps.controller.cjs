const stepsService = require('../services/steps.service.cjs');

const HTTP_OK_STATUS = 200;

const getTitle = async (_req, res) => {
  const titles = await stepsService.getTitle();
  console.log('controler:', titles);
  return res.status(HTTP_OK_STATUS).json(titles);
};

const getstep = async (req, res) => {
  const { id } = req.params;
  const step = await stepsService.getStep(id);
  console.log('controler:', step);
  return res.status(HTTP_OK_STATUS).json(step);
};

module.exports = {
  getTitle,
  getstep,
};
