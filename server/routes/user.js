const express = require('express');
const router = express.Router();
const { updateProfile, changePassword, updatePreferences } = require('../Controllers/userController');
const { protect } = require('../middleware/auth');

router.put('/profile', protect, updateProfile);
router.put('/password', protect, changePassword);
router.put('/preferences', protect, updatePreferences);

module.exports = router;