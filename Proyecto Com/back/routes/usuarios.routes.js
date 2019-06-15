const express = require('express');
const router = express.Router();
const userctrl = require('../controller/usuario.controller');

router.get('/', userctrl.getUsers);
router.get('/login/:usuario/:clave', userctrl.getUserLogin);
router.get('/registro/:usuario/:correo/:cedula', userctrl.getUserRegistro);
router.post('/', userctrl.postUser);
router.put('/update', userctrl.udapteUser);
router.put('/update/:id_Rol/:id_Usuario', userctrl.updateRolUser);
router.delete('/delete/:id_Usuario', userctrl.deleteUser);
module.exports = router;