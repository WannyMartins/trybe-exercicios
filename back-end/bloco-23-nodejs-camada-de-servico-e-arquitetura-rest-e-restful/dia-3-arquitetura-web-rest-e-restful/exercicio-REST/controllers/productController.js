const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if(product === null) return res.status(404).json({ message: 'Produto não encontrado' })

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(400).json({ message: 'Informações do produto inválidas' });
  }

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.getById(req.params.id);

  if(products === null) return res.status(404).json({ message: 'Produto não encontrado' })

  await ProductModel.exclude(req.params.id);


  res.status(204).json();
});

router.put('/:id', async (req, res) => {

  const product = await ProductModel.getById(req.params.id);
  const { name, brand } = req.body;

  if (name === undefined || brand === undefined) {
    return res.status(404).json({ message: 'Produto não encontrado' });
    }

  if(product === null) return res.status(404).json({ message: 'Produto não encontrado' })

  await ProductModel.update(req.params.id, name, brand);

  res.status(200).json({ name, brand });
});

module.exports = router;