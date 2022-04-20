const express = require('express');
const router = express.Router();

const Jogoscontrollers = require('../controllers/jogos.controllers');

router.get('/jogos', Jogoscontrollers.findJogosController);

router.get('/jogos/:id', Jogoscontrollers.findJogoByIdController);

router.post('/adicionarjogo', Jogoscontrollers.addJogoController);

router.delete('/deletarjogo/:id', Jogoscontrollers.deleteJogoController);

router.put('/atualizarjogo/:id', Jogoscontrollers.updateJogosController);

module.exports = router;
