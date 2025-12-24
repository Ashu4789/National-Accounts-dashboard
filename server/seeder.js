const mongoose = require('mongoose');
const dotenv = require('dotenv');
const EconomicData = require('./Models/EconomicData');
const Update = require('./Models/Update');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to DB
connectDB();

// Hardcoded Data (Copied from client/src/data/realIndiaData.js)
const recentUpdates = [
    {
        type: 'success',
        title: 'Q4 FY24 GDP Growth Exceeds Expectations',
        description: "India's GDP grows at 8.2% in FY 2023-24, driven by strong services and manufacturing sectors",
        category: 'GDP',
        value: '8.2%',
        change: '+1.0%'
    },
    {
        type: 'info',
        title: 'Inflation Moderates in FY24',
        description: 'CPI inflation eases to 5.4% for FY 2023-24, within RBI target range',
        category: 'Inflation',
        value: '5.4%',
        change: '-1.3%'
    },
    {
        type: 'trend',
        title: 'Fiscal Deficit Narrows',
        description: 'Government achieves deficit target of 5.9% of GDP in FY 2023-24',
        category: 'Fiscal',
        value: '5.9%',
        change: '-0.5%'
    },
    {
        type: 'success',
        title: 'Forex Reserves Hit Record High',
        description: "India's forex reserves reach $645.58B",
        category: 'Forex',
        value: '$645.58B',
        change: '+11.6%'
    },
    {
        type: 'warning',
        title: 'Trade Deficit Concerns',
        description: 'Merchandise trade deficit at $240B, lower than previous year',
        category: 'Trade',
        value: '$240B',
        change: '-10.1%'
    }
];

const currentStats = {
    gdp: {
        value: '295.99',
        suffix: 'Lakh Crore',
        change: '+8.2%',
        changeType: 'positive',
        description: 'GDP at Current Prices FY 2023-24'
    },
    gdpGrowth: {
        value: '8.2',
        suffix: '%',
        change: '+1.0%',
        changeType: 'positive',
        description: 'Real GDP Growth Rate FY 2023-24'
    },
    inflation: {
        value: '5.4',
        suffix: '%',
        change: '-1.3%',
        changeType: 'positive',
        description: 'CPI Inflation FY 2023-24'
    },
    fiscalDeficit: {
        value: '5.9',
        suffix: '% of GDP',
        change: '-0.5%',
        changeType: 'positive',
        description: 'Fiscal Deficit FY 2023-24'
    },
    perCapita: {
        value: '2,06,403',
        suffix: 'Rs.',
        change: '+7.6%',
        changeType: 'positive',
        description: 'Per Capita Income FY 2023-24'
    },
    unemployment: {
        value: '6.1',
        suffix: '%',
        change: '-0.7%',
        changeType: 'positive',
        description: 'Unemployment Rate FY 2023-24'
    },
    forexReserves: {
        value: '645.58',
        suffix: 'Billion USD',
        change: '+11.6%',
        changeType: 'positive',
        description: 'Foreign Exchange Reserves'
    },
    exports: {
        value: '437',
        suffix: 'Billion USD',
        change: '-2.2%',
        changeType: 'negative',
        description: 'Merchandise Exports FY 2023-24'
    }
};

const importData = async () => {
    try {
        // Clear existing
        await Update.deleteMany();
        await EconomicData.deleteMany();

        // Import Updates
        await Update.insertMany(recentUpdates);

        // Import Stats (create the single document structure)
        await EconomicData.create({
            section: 'dashboard-summary',
            data: currentStats,
            lastUpdated: Date.now()
        });

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    // destroyData();
} else {
    importData();
}
