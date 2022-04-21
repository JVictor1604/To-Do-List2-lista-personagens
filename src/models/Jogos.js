const mongooose = require('mongoose');

const JogosSchema = new mongooose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String},
    genero: { type: String, required: true },
    plataforma: { type: String, required: true },
    preco: { type: Number, required: true },
    estoque: { type: Number, required: true },
    lançamento: { type: Number, required: true },
  });


  const Jogos = mongooose.model('jogos', JogosSchema);


  module.exports = Jogos;
