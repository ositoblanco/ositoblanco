const express = require('express');
const router = express.Router();
const preguntactrl = require('../controller/pregunta.controller');

router.get('/', preguntactrl.getPreguntas);

module.exports = router;