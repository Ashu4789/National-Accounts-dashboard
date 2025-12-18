const express = require('express');
const router = express.Router();
const { downloadReport } = require('../controllers/reportController');
const { protect } = require('../middleware/auth');

router.get('/download/:reportId', protect, downloadReport);

module.exports = router;