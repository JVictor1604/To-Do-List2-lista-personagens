const mongoose = require('mongoose');

const validId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).send({ message: 'Id inválido!' });
  }

  next();
};

const validObjectBody = (req, res, next) => {
  if (
    !req.body ||
    !req.body.nome ||
    !req.body.genero ||
    !req.body.plataforma ||
    !req.body.estoque ||
    !req.body.lançamento ||
    !req.body.preco
  ) {
    return res.status(400).send({
      message: 'Você não preencheu todos os dados para editar o jogo!',
    });
  }
  next();
};

module.exports = {
  validId,
  validObjectBody,
};
