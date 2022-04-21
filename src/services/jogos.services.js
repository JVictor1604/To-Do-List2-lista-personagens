const Jogos = require('../models/Jogos');

const findJogoService = async () => {

    const jogos = await Jogos.find();

    return jogos;
};

const findJogoByIdService = async (id) => {
    
    const jogo = await Jogos.findById(id);

    return jogo;
};

const addJogoService = async (newJogo) =>{

    const jogoCriado = await Jogos.create(newJogo)
    return jogoCriado;
};

const uptadeJogoService = async (id, jogoedited) => {
    
    const jogoAtualizado = await Jogos.findByIdAndUpdate(id, jogoedited);
    return jogoAtualizado;
};

const deleteJogoService = async (id) => {
    
    return await Jogos.findByIdAndRemove(id);    
};

module.exports = {
    addJogoService,
    deleteJogoService,
    findJogoByIdService,
    findJogoService,
    uptadeJogoService
};
