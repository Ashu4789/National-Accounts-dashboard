const Update = require('../models/Update');
const EconomicData = require('../models/EconomicData');

// @desc    Get recent updates
// @route   GET /api/dashboard/updates
// @access  Public
const getUpdates = async (req, res) => {
    try {
        const updates = await Update.find().sort({ createdAt: -1 }).limit(10);
        res.json(updates);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a new update
// @route   POST /api/dashboard/updates
// @access  Private (Admin)
const createUpdate = async (req, res) => {
    try {
        const update = await Update.create(req.body);
        res.status(201).json(update);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get current stats
// @route   GET /api/dashboard/stats
// @access  Public
const getStats = async (req, res) => {
    try {
        let stats = await EconomicData.findOne({ section: 'dashboard-summary' });

        // Return empty object if not found (or seed data could handle this)
        if (!stats) {
            return res.status(404).json({ message: 'Stats not found' });
        }

        res.json(stats.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update stats
// @route   PUT /api/dashboard/stats
// @access  Private (Admin)
const updateStats = async (req, res) => {
    try {
        const stats = await EconomicData.findOneAndUpdate(
            { section: 'dashboard-summary' },
            {
                data: req.body,
                lastUpdated: Date.now()
            },
            { new: true, upsert: true }
        );
        res.json(stats.data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getUpdates,
    createUpdate,
    getStats,
    updateStats
};
