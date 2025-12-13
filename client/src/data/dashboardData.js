// National Accounts Dashboard – India (Estimates & Projections)

export const gdpData = [
  { year: '2011', value: 1823.05, growth: 6.6 },
  { year: '2012', value: 1827.64, growth: 5.5 },
  { year: '2013', value: 1856.72, growth: 6.4 },
  { year: '2014', value: 2039.13, growth: 7.4 },
  { year: '2015', value: 2103.59, growth: 8.0 },
  { year: '2016', value: 2294.80, growth: 8.3 },
  { year: '2017', value: 2651.47, growth: 7.0 },
  { year: '2018', value: 2702.93, growth: 6.5 },
  { year: '2019', value: 2835.61, growth: 4.0 },
  { year: '2020', value: 2671.60, growth: -5.8 },
  { year: '2021', value: 3150.31, growth: 8.7 },
  { year: '2022', value: 3389.69, growth: 7.0 },
  { year: '2023', value: 3732.22, growth: 6.5 }, // provisional
  { year: '2024', value: 4105.38, growth: 7.5 }, // estimate
  { year: '2025', value: 4511.62, growth: 9.8 }  // projection
];

// Year-wise CPI Inflation Rate (%) – India
// Source aligned with MOSPI / RBI averages (rounded)

export const inflationData = [
  { year: '2011', rural: 9.0, urban: 8.8, combined: 8.9 },
  { year: '2012', rural: 9.5, urban: 9.1, combined: 9.3 },
  { year: '2013', rural: 9.7, urban: 9.2, combined: 9.4 },
  { year: '2014', rural: 6.4, urban: 5.6, combined: 6.0 },
  { year: '2015', rural: 5.0, urban: 4.8, combined: 4.9 },
  { year: '2016', rural: 4.6, urban: 4.5, combined: 4.5 },
  { year: '2017', rural: 3.7, urban: 3.6, combined: 3.6 },
  { year: '2018', rural: 3.8, urban: 4.0, combined: 3.9 },
  { year: '2019', rural: 4.7, urban: 4.9, combined: 4.8 },
  { year: '2020', rural: 6.4, urban: 6.0, combined: 6.2 },
  { year: '2021', rural: 5.8, urban: 5.2, combined: 5.5 },
  { year: '2022', rural: 6.9, urban: 6.5, combined: 6.7 },
  { year: '2023', rural: 5.6, urban: 5.2, combined: 5.4 },
  { year: '2024', rural: 5.0, urban: 4.8, combined: 4.9 },
  { year: '2025', rural: 4.7, urban: 4.3, combined: 4.5 }   // projection
];


export const fiscalDeficitData = [
  { year: '2018', deficit: 3.4 },
  { year: '2019', deficit: 4.6 },
  { year: '2020', deficit: 9.2 },
  { year: '2021', deficit: 6.7 },
  { year: '2022', deficit: 6.4 },
  { year: '2023', deficit: 5.9 },
  { year: '2024', deficit: 5.6 }
];

export const currentStats = {
  gdp: {
    value: '4,511.62',
    suffix: 'Billion USD',
    change: '+9.8%',
    changeType: 'positive',
    description: 'Projected GDP for India (2025)'
  },
  gdpGrowth: {
    value: '9.8',
    suffix: '%',
    change: '+2.3%',
    changeType: 'positive',
    description: 'Projected GDP growth rate (2025)'
  },
  inflation: {
    value: '4.9',
    suffix: '%',
    change: '-0.5%',
    changeType: 'positive',
    description: 'CPI Inflation (2024 Estimate)'
  },
  fiscalDeficit: {
    value: '5.6',
    suffix: '% of GDP',
    change: '-0.3%',
    changeType: 'positive',
    description: 'Fiscal Deficit (FY 2023–24)'
  }
};

export const recentUpdates = [
  {
    type: 'success',
    title: 'GDP Growth Estimate Released',
    description: 'India’s GDP growth estimated at 7.5% for FY 2023–24',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    category: 'GDP',
    value: '7.5%',
    change: '+1.0%'
  },
  {
    type: 'info',
    title: 'Inflation Moderates',
    description: 'CPI inflation eases to 4.9% in 2024',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    category: 'Inflation',
    value: '4.9%',
    change: '-0.5%'
  },
  {
    type: 'trend',
    title: 'Fiscal Deficit Narrows',
    description: 'Fiscal deficit reduced to 5.6% of GDP',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    category: 'Fiscal',
    value: '5.6%',
    change: '-0.3%'
  },
  {
    type: 'warning',
    title: 'Trade Deficit Persists',
    description: 'Current account deficit remains elevated',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    category: 'Trade',
    value: '$75B',
    change: '+$5B'
  }
];

export const sectorWiseGDP = [
  { sector: 'Agriculture', contribution: 18.2, growth: 3.5 },
  { sector: 'Industry', contribution: 28.6, growth: 6.2 },
  { sector: 'Services', contribution: 53.2, growth: 7.8 }
];

export const monthlyIndicators = [
  { month: 'Jan', gdp: 310.5, inflation: 5.2, exports: 42.3 },
  { month: 'Feb', gdp: 312.8, inflation: 5.1, exports: 43.1 },
  { month: 'Mar', gdp: 315.2, inflation: 4.9, exports: 44.5 },
  { month: 'Apr', gdp: 318.6, inflation: 4.8, exports: 45.2 },
  { month: 'May', gdp: 321.4, inflation: 4.9, exports: 43.8 },
  { month: 'Jun', gdp: 324.1, inflation: 5.0, exports: 44.9 }
];
