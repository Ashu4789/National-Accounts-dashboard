const { sign } = require('jsonwebtoken');
const { signupValidation } = require('../Middlewares/AuthValidation');
const { signup } = require('../Controllers/AuthController');

const router = require('express').Router();

router.post('/login', (req, res) => {
    // Login logic here
    res.send('Login success');
});

router.post('/signup', signupValidation, signup);

module.exports = router;