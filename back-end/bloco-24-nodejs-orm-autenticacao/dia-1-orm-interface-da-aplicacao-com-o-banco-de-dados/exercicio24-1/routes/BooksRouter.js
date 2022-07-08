const { Router } = require('express');

const BooksController = require('../controller/BooksController');

const router = Router();

router.get('/', BooksController.getAll);

module.exports = router;