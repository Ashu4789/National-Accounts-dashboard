const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../Controllers/contactController');

router.post('/', sendContactEmail);

module.exports = router;