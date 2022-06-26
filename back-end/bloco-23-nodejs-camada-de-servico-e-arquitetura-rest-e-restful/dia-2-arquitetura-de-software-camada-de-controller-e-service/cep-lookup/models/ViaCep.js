// models/ViaCep.js

const axios = require('axios');

const lookupCep = async (cepToLookup) => {
  const response = await axios.get(`https://viacep.com.br/ws/${cepToLookup}/json/`);

  if (!response.data) return null;

  const address = response.data;

  return address;
};

module.exports = {
  lookupCep,
};