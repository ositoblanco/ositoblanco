const express = require('express');
const router = express.Router();
const unidadctrl = require('../controller/unidad.controller');

router.get('/', unidadctrl.getUnidades);
router.post('/', unidadctrl.postUnidad);
router.put('/update', unidadctrl.udapteUnidad);
router.delete('/delete/:id_Unidad', unidadctrl.deleteUnidad);
module.exports = router;