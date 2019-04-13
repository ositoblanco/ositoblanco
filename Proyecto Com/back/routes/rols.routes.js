const express = require('express');
const router = express.Router();
const rolctrl = require('../controller/rol.controller');

router.get('/', rolctrl.getRols);
router.post('/', rolctrl.postRol);
router.put('/update', rolctrl.udapteRol);
router.delete('/delete/:id_Rol', rolctrl.deleteRol);
module.exports = router;

