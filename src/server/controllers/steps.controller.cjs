const stepsService = require('../services/steps.service.cjs');

const HTTP_OK_STATUS = 200;

const getTitleCon = async (_req, res) => {
  const titles = await stepsService.getTitle();
  console.log('controler:', titles);
  return res.status(HTTP_OK_STATUS).json(titles);
};

module.exports = {
  getTitleCon,
};
