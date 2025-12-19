const express = require('express');
const router = express.Router();
const { signup, login, getMe } = require('../Controllers/authController.js');
const { protect } = require('../middleware/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;