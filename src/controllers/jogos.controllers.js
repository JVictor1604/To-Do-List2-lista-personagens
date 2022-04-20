const JogosService = require('../services/jogos.services');

const findJogosController = (req, res) => {
  res.send(JogosService.findJogoService());
};

const findJogoByIdController = (req, res) => {
  if (!req.params.id) {
    return res.status(400).send({ message: 'Id não encontrado!' });
  } else {
    if (!JogosService.findJogoByIdService(req.params.id)) {
      return res.status(400).send({ message: 'Jogo não encontrado' });
    } else {
      res.send(JogosService.findJogoByIdService(req.params.id));
    }
  }
};

const addJogoController = (req, res) => {

  let retorno = JogosService.addJogoService(req.body);

  if (
    !req.body.id ||
    !req.body.nome ||
    !req.body.imagem ||
    !req.body.preço ||
    !req.body.estoque
  ) {
    return res.status(400).send({
      message:
        'Você não preencheu todos os dados para adicionar um novo jogo a seleção!',
    });
  } else {
    if (retorno == 'ok') {
      res.send({ message: 'Jogo cadastrado com sucesso!' });
    } else {
      res.status(400).send({ message: 'Houve um erro' });
    }
  }
};

const updateJogosController = (req, res) => {

  

  if (!req.body || !req.body.nome || !req.body.preco || !req.body.imagem || !req.body.estoque) {

    return res.status(400).send({ message: "Você não preencheu todos os dados para editar o jogo!" });
  }

  if (!JogosService.findJogoByIdService(req.params.id)) {

    return res.status(400).send({ message: 'Jogo não encontrado' });

  }

  const updatedJojo = JogosService.uptadeJogoService(+req.params.id, req.body);
  res.send(updatedJojo);
};

const deleteJogoController = (req, res) => {

    if (!JogosService.findJogoByIdService(req.params.id)) {

        return res.status(400).send({ message: 'Jogo não encontrado' });
     }

  JogosService.deleteJogoService(req.params.id);

  res.send('Personagem deletado com sucesso');
};

module.exports = {
  findJogosController,
  findJogoByIdController,
  addJogoController,
  updateJogosController,
  deleteJogoController,
};
