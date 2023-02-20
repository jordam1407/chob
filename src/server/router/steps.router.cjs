const express = require('express');
const stepController = require('../controllers/steps.controller.cjs');

const router = express.Router();

router.get('/', stepController.getTitleCon);

module.exports = router;
