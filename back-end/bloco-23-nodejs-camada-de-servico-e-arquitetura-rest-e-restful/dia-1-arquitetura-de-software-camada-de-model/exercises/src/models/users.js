// users-manager/models/User.js

// Começamos importando a conexão com o banco
const connection = require('./connection');

// Faremos a função `formatUser`
// Note que não realizamos destructuring da senha, pois não precisaremos dela
// Note, também, que renomeamos os campos fist_name e last_name para firstName e lastName, respectivamente
function formatUser({ id, first_name: firstName, last_name: lastName, email }) {
  // A única coisa que precisamos fazer agora é criar um objeto com os nomes dos campos alterados
  // e sem o campo password
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

// Função responsável por criar o usuário no banco de dados
function create({ firstName, lastName, email, password }) {
  const query = 'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)';
  // Ao invés de chamarmos connection como uma function, agora utilizamos diretamente o método `execute`
  return connection.execute(query, [firstName, lastName, email, password])
    // Obtemos o resultado da inserção e o utilizamos para obter o ID recém inserido
    .then(([result]) => ({ id: result.insertId, firstName, lastName, email }));
}

async function getUsers() {
  const query = 'SELECT * FROM users;';

  const [result] = await connection.execute(query);
  return result;
}

async function getUserById(id) {
  const query = 'SELECT * FROM users WHERE id=?;';

  const [result] = await connection.execute(query, [id]);
  return result;
}

module.exports = { formatUser, create, getUsers, getUserById };