const findJogoService = () => {
    return Jogos;
};

const findJogoByIdService = (id) => {
    return Jogos.find((jogo) => jogo.id == id);
};

const addJogoService = (jogo) =>{
    Jogos.push(jogo);
    return jogo;
};

const uptadeJogoService = (id, jogoedited) => {
    jogoedited['id'] = id;
    const jogoIndex = Jogos.findIndex((jogo) => jogo.id == id);
    Jogos[jogoIndex] = jogoedited;
    return jogoedited;
};

const deleteJogoService = (id) => {
    const jogoIndex = Jogos.findIndex((jogo) => jogo.id == id);
    return Jogos.splice(jogoIndex, 1);
};

module.exports = {
    addJogoService,
    deleteJogoService,
    findJogoByIdService,
    findJogoService,
    uptadeJogoService
};
