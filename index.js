const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const route = require('./src/routes/jogos.routes');
const connectToDatabase = require('./src/database/jogos.database');



app.use(express.json());
app.use(cors());

connectToDatabase();

app.use('/', route);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
