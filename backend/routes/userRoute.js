const express = require('express');
const {
    login,
    signup,
    getUser
} = require('../controllers/userController');

const router = express.Router();

router.post('/login', login);

router.post('/signup', signup);

router.get('/:id', getUser)

module.exports = router