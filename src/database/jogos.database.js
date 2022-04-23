const mongoose = require('mongoose');

function connectToDatabase() {
  mongoose
    .connect('mongodb+srv://Victor:zDhxbm9gIGEnnrFb@apirick-and-morty.mq3aj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MONGO DB CONECTADO');
    })
    .catch((err) => {
      return console.log(`Erro na conexao com o banco: ${err}`);
    });
}

module.exports = connectToDatabase;
