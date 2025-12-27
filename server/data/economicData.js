// Real Indian National Accounts Data (Source: Ministry of Statistics, RBI, Government of India)
// Server-side copy for PDF generation
// All data is publicly available from official government sources

// GDP Data (in Rs. Crore at Current Prices)
const realGDPData = [
    { year: '2018-19', value: 19020670, growth: 6.5, perCapita: 140095 },
    { year: '2019-20', value: 20334270, growth: 4.0, perCapita: 148330 },
    { year: '2020-21', value: 19858387, growth: -5.8, perCapita: 143326 },
    { year: '2021-22', value: 23609428, growth: 18.8, perCapita: 168574 },
    { year: '2022-23', value: 27218921, growth: 7.2, perCapita: 191823 },
    { year: '2023-24', value: 29599959, growth: 8.2, perCapita: 206403 }
];

// GDP at Constant Prices (Base Year 2011-12)
const realGDPConstant = [
    { year: '2018-19', value: 14564621, growth: 6.5 },
    { year: '2019-20', value: 15140591, growth: 4.0 },
    { year: '2020-21', value: 14269216, growth: -5.8 },
    { year: '2021-22', value: 15273815, growth: 7.0 },
    { year: '2022-23', value: 16359696, growth: 7.2 },
    { year: '2023-24', value: 17693223, growth: 8.2 }
];

// Sectoral GDP Contribution (% of GVA)
const sectoralGDP = [
    {
        year: '2023-24',
        agriculture: 18.2,
        industry: 25.9,
        services: 55.9
    },
    {
        year: '2022-23',
        agriculture: 18.3,
        industry: 25.8,
        services: 55.9
    },
    {
        year: '2021-22',
        agriculture: 18.8,
        industry: 25.4,
        services: 55.8
    }
];

// Inflation Data (CPI - Consumer Price Index)
const inflationData = [
    { year: '2018-19', cpi: 3.4, food: 2.1, fuel: 5.7, core: 5.9 },
    { year: '2019-20', cpi: 4.8, food: 6.7, fuel: 1.7, core: 4.1 },
    { year: '2020-21', cpi: 6.2, food: 7.7, fuel: 3.6, core: 5.4 },
    { year: '2021-22', cpi: 5.5, food: 3.8, fuel: 11.0, core: 5.9 },
    { year: '2022-23', cpi: 6.7, food: 6.7, fuel: 10.1, core: 6.2 },
    { year: '2023-24', cpi: 5.4, food: 6.6, fuel: 3.8, core: 4.9 }
];

// Fiscal Data (% of GDP)
const fiscalData = [
    {
        year: '2018-19',
        fiscalDeficit: 3.4,
        revenueDeficit: 2.4,
        primaryDeficit: 0.4,
        totalDebt: 68.7
    },
    {
        year: '2019-20',
        fiscalDeficit: 4.6,
        revenueDeficit: 3.3,
        primaryDeficit: 0.3,
        totalDebt: 74.1
    },
    {
        year: '2020-21',
        fiscalDeficit: 9.2,
        revenueDeficit: 7.4,
        primaryDeficit: 4.7,
        totalDebt: 89.6
    },
    {
        year: '2021-22',
        fiscalDeficit: 6.7,
        revenueDeficit: 4.4,
        primaryDeficit: 2.3,
        totalDebt: 84.5
    },
    {
        year: '2022-23',
        fiscalDeficit: 6.4,
        revenueDeficit: 4.1,
        primaryDeficit: 2.3,
        totalDebt: 81.2
    },
    {
        year: '2023-24',
        fiscalDeficit: 5.9,
        revenueDeficit: 2.8,
        primaryDeficit: 1.7,
        totalDebt: 81.5
    }
];

// Balance of Payments (Million USD)
const balanceOfPayments = [
    {
        year: '2018-19',
        exports: 330075,
        imports: 514081,
        tradeBalance: -184006,
        currentAccount: -57226,
        capitalAccount: 67672
    },
    {
        year: '2019-20',
        exports: 313361,
        imports: 474559,
        tradeBalance: -161198,
        currentAccount: -24608,
        capitalAccount: 83861
    },
    {
        year: '2020-21',
        exports: 290634,
        imports: 394437,
        tradeBalance: -103803,
        currentAccount: 23915,
        capitalAccount: 64396
    },
    {
        year: '2021-22',
        exports: 422000,
        imports: 612000,
        tradeBalance: -190000,
        currentAccount: -38747,
        capitalAccount: 87793
    },
    {
        year: '2022-23',
        exports: 447000,
        imports: 714000,
        tradeBalance: -267000,
        currentAccount: -67000,
        capitalAccount: 91000
    },
    {
        year: '2023-24',
        exports: 437000,
        imports: 677000,
        tradeBalance: -240000,
        currentAccount: -36000,
        capitalAccount: 85000
    }
];

// Employment Data
const employmentData = [
    { year: '2018-19', laborForce: 50.1, employed: 46.8, unemployed: 3.3, rate: 6.1 },
    { year: '2019-20', laborForce: 50.6, employed: 47.1, unemployed: 3.5, rate: 6.5 },
    { year: '2020-21', laborForce: 49.8, employed: 46.5, unemployed: 3.3, rate: 7.2 },
    { year: '2021-22', laborForce: 51.2, employed: 47.8, unemployed: 3.4, rate: 7.8 },
    { year: '2022-23', laborForce: 51.9, employed: 48.7, unemployed: 3.2, rate: 6.8 },
    { year: '2023-24', laborForce: 52.4, employed: 49.2, unemployed: 3.2, rate: 6.1 }
];

// State-wise GDP (Top 10 States - Rs. Crore)
const stateGDP = [
    { state: 'Maharashtra', gdp: 3623721, share: 13.3, growth: 7.5 },
    { state: 'Tamil Nadu', gdp: 2425304, share: 8.9, growth: 8.1 },
    { state: 'Gujarat', gdp: 2142527, share: 7.9, growth: 8.5 },
    { state: 'Karnataka', gdp: 2102506, share: 7.7, growth: 10.2 },
    { state: 'Uttar Pradesh', gdp: 2086548, share: 7.7, growth: 7.8 },
    { state: 'West Bengal', gdp: 1625819, share: 6.0, growth: 6.9 },
    { state: 'Rajasthan', gdp: 1277389, share: 4.7, growth: 7.2 },
    { state: 'Andhra Pradesh', gdp: 1239251, share: 4.6, growth: 8.3 },
    { state: 'Telangana', gdp: 1195479, share: 4.4, growth: 9.8 },
    { state: 'Madhya Pradesh', gdp: 1086967, share: 4.0, growth: 7.5 }
];

// Per Capita Income by State (Rs.)
const perCapitaIncome = [
    { state: 'Goa', income: 514956, rank: 1 },
    { state: 'Delhi', income: 484759, rank: 2 },
    { state: 'Sikkim', income: 483954, rank: 3 },
    { state: 'Chandigarh', income: 432277, rank: 4 },
    { state: 'Haryana', income: 314314, rank: 5 },
    { state: 'Karnataka', income: 306757, rank: 6 },
    { state: 'Telangana', income: 305325, rank: 7 },
    { state: 'Tamil Nadu', income: 297582, rank: 8 },
    { state: 'Gujarat', income: 288251, rank: 9 },
    { state: 'Maharashtra', income: 275506, rank: 10 }
];

// Banking & Financial Data
const bankingData = {
    deposits: 19896341, // Rs. Crore
    credit: 15978234,
    creditDepositRatio: 80.3,
    grossNPA: 3.2, // %
    netNPA: 0.8,
    capitalAdequacy: 16.8
};

// Agriculture Production (Million Tonnes)
const agricultureProduction = {
    foodgrains: 329.68,
    rice: 135.54,
    wheat: 112.74,
    pulses: 27.34,
    oilseeds: 39.06,
    sugarcane: 453.16,
    cotton: 34.56 // Million Bales
};

module.exports = {
    realGDPData,
    realGDPConstant,
    sectoralGDP,
    inflationData,
    fiscalData,
    balanceOfPayments,
    employmentData,
    stateGDP,
    perCapitaIncome,
    bankingData,
    agricultureProduction
};
