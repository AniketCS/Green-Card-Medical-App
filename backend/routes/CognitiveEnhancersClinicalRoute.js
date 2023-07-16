const express = require('express');
const router = express.Router();


const CognitiveEnhancersClinicalController = require('../controller/CognitiveEnhancersClinicalController.js');

router.get('/CognitiveEnhancersClinical', CognitiveEnhancersClinicalController.getData);
router.post('/CognitiveEnhancersClinical/update', CognitiveEnhancersClinicalController.updateData);
router.post('/add/CognitiveEnhancersClinical', CognitiveEnhancersClinicalController.drugData);

module.exports = router;