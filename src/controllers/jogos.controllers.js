const JogosService = require('../services/jogos.services');
const mongoose = require('mongoose');

const findJogosController = async (req, res) => {
  const Alljogos = await JogosService.findJogoService();
  res.send(Alljogos);
};

const findJogoByIdController = async (req, res) => {
  jogoEscolhido = await JogosService.findJogoByIdService(req.params.id);

  if (!jogoEscolhido) {
    return res.status(400).send({ message: 'Jogo não encontrado' });
  } else {
    res.send(jogoEscolhido);
  }
};

const addJogoController = async (req, res) => {
  let retorno = JogosService.addJogoService(req.body);

  if (retorno) {
    const newJogo = await JogosService.addJogoService(req.body);

    res.send({ message: 'Jogo cadastrado com sucesso!' });
  } else {
    res.status(400).send({ message: 'Houve um erro' });
  }
};

const updateJogosController = async (req, res) => {
  const updatedJogo = await JogosService.uptadeJogoService(
    req.params.id,
    req.body,
  );
  res.send(updatedJogo);
};

const deleteJogoController = async (req, res) => {
  const jogoEscolhido = await JogosService.findJogoByIdService(req.params.id);

  if (!jogoEscolhido) {
    return res.status(400).send({ message: 'Jogo não encontrado' });
  }

  await JogosService.deleteJogoService(req.params.id);

  res.send('Personagem deletado com sucesso');
};

module.exports = {
  findJogosController,
  findJogoByIdController,
  addJogoController,
  updateJogosController,
  deleteJogoController,
};
