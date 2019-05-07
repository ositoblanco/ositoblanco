const express = require('express');
const router = express.Router();
const asignctrl = require('../controller/asignacion.controller');

router.get('/', asignctrl.getAsigns);
router.get('/:id_Usuario', asignctrl.getAsigUser);
router.get('/full/:id_Usuario', asignctrl.getAsigUserFull);
router.post('/', asignctrl.postAsign);
router.put('/update', asignctrl.udapteAsign);
router.delete('/delete/:id_Usuario/:id_Unidad', asignctrl.deleteAsign);
module.exports = router;