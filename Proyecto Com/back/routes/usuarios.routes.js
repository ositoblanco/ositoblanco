const express = require('express');
const router = express.Router();
const userctrl = require('../controller/usuario.controller');

router.get('/', userctrl.getUsers);
router.get('/login/:usuario/:clave', userctrl.getUserLogin);
router.post('/', userctrl.postUser);
router.put('/update', userctrl.udapteUser);
router.delete('/delete/:id_Usuario', userctrl.deleteUser);
module.exports = router;