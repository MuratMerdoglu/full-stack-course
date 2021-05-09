const express = require('express');
const router = express.Router();

// userServise CRUD operations
const { register, find, findAll, remove, update, login } = require('../services/usersService')

router.get('/:id', find);
router.get('/', findAll);
router.post('/register', register);
router.delete('/:id', remove);
router.patch('/', update);
router.post('/login', login);

module.exports = router;
