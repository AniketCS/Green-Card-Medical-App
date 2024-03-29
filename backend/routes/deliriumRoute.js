const express = require('express');
const router = express.Router();


const deliriumController = require('../controller/deliriumController.js');


router.get('/Delirium', deliriumController.getData);
router.post("/Delirium/update", deliriumController.updateData);
router.post('/add/Delirium', deliriumController.drugData);
router.delete('/Delirium/delete/:Description',deliriumController.drugDelete);

module.exports = router;