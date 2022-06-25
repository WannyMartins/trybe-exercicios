// users-manager/index.js

// Importamos as libs que vamos usar
const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
// const { getUsers } = require('./models/users');

// Criamos a aplicação do express
const app = express();

// Instalamos o middleware que faz a leitura e conversão do corpo das requisições em JSON
app.use(bodyParser.json());

// - Nossos middlewares de cada rota vêm aqui
app.post('/user', middlewares.createUser);

app.get('/user', middlewares.getAll.getAll);
app.get('/user/:id', middlewares.getAll.getById);

app.use(middlewares.error);
// Definimos a porta
const PORT = 3000;

// Iniciamos o servidor
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });