const express = require('express');
const router = express.Router();


const CognitiveEnhancersGuideController = require('../controller/CognitiveEnhancersGuideController.js');

router.get('/CognitiveEnhancersGuide', CognitiveEnhancersGuideController.getData);
router.post('/CognitiveEnhancersGuide/update', CognitiveEnhancersGuideController.updateData);
router.post('/add/CognitiveEnhancersGuide', CognitiveEnhancersGuideController.drugData);
router.delete('/CognitiveEnhancersGuide/delete/:Name',CognitiveEnhancersGuideController.drugDelete);

module.exports = router;