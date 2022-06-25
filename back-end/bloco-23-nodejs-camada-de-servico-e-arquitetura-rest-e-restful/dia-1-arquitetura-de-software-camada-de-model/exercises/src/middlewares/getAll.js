const { getUsers, getUserById } = require('../models/users');

async function getAll(req, res) {
  const get = await getUsers();
  res.status(200).json(get);
}

async function getById(req, res) {
  const { id } = req.params;
  const get = await getUserById(id);
  if (!get.length) return res.status(404).json({ message: 'Usuário não encontrado' });
  res.status(200).json(get);
}

module.exports = { getAll, getById };