const express = require('express');
const router = express.Router();

const Jogoscontrollers = require('../controllers/jogos.controllers');
const { validId, validObjectBody } = require('../middlewares/jogos.middleware');

router.get('/jogos', Jogoscontrollers.findJogosController);

router.get('/jogos/:id', validId, Jogoscontrollers.findJogoByIdController);

router.post('/adicionarjogo', validObjectBody, Jogoscontrollers.addJogoController);

router.delete('/deletarjogo/:id', validId, Jogoscontrollers.deleteJogoController);

router.put('/atualizarjogo/:id', validId, validObjectBody, Jogoscontrollers.updateJogosController);

module.exports = router;
