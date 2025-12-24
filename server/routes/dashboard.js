const express = require('express');
const router = express.Router();
const {
    getUpdates,
    createUpdate,
    getStats,
    updateStats
} = require('../controllers/dashboardController.js');

// In a real app, you would add 'protect' and 'admin' middleware to POST/PUT routes
// For this demo/viva, we might keep it open or just use 'protect' if you want to show auth working
const { protect, admin } = require('../middleware/auth');

router.get('/updates', getUpdates);
router.post('/updates', protect, admin, createUpdate);

router.get('/stats', getStats);
router.put('/stats', protect, admin, updateStats);

module.exports = router;
