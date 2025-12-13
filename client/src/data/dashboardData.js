// National Accounts Dashboard Dummy Data

export const gdpData = [
  { year: '2018', value: 2726.32, growth: 6.5 },
  { year: '2019', value: 2835.61, growth: 4.0 },
  { year: '2020', value: 2671.60, growth: -5.8 },
  { year: '2021', value: 3173.40, growth: 18.8 },
  { year: '2022', value: 3385.09, growth: 6.7 },
  { year: '2023', value: 3550.32, growth: 4.9 },
  { year: '2024', value: 3732.45, growth: 5.1 }
];

export const inflationData = [
  { year: '2018', rate: 3.9 },
  { year: '2019', rate: 4.8 },
  { year: '2020', rate: 6.2 },
  { year: '2021', rate: 5.5 },
  { year: '2022', rate: 6.7 },
  { year: '2023', rate: 5.4 },
  { year: '2024', rate: 4.9 }
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
    value: '3,732.45',
    suffix: 'Billion USD',
    change: '+5.1%',
    changeType: 'positive',
    description: 'Current year GDP (2024)'
  },
  gdpGrowth: {
    value: '5.1',
    suffix: '%',
    change: '+0.2%',
    changeType: 'positive',
    description: 'Year-over-year growth'
  },
  inflation: {
    value: '4.9',
    suffix: '%',
    change: '-0.5%',
    changeType: 'positive',
    description: 'Consumer Price Index'
  },
  fiscalDeficit: {
    value: '5.6',
    suffix: '% of GDP',
    change: '-0.3%',
    changeType: 'positive',
    description: 'Government fiscal deficit'
  }
};

export const recentUpdates = [
  {
    type: 'success',
    title: 'Q4 2024 GDP Released',
    description: 'Annual GDP growth stands at 5.1%, exceeding expectations',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hours ago
    category: 'GDP',
    value: '5.1%',
    change: '+0.2%'
  },
  {
    type: 'info',
    title: 'Inflation Report Published',
    description: 'CPI inflation eases to 4.9% in December 2024',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(), // 5 hours ago
    category: 'Inflation',
    value: '4.9%',
    change: '-0.5%'
  },
  {
    type: 'trend',
    title: 'Fiscal Deficit Improves',
    description: 'Government fiscal deficit narrows to 5.6% of GDP',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    category: 'Fiscal',
    value: '5.6%',
    change: '-0.3%'
  },
  {
    type: 'warning',
    title: 'Trade Deficit Widens',
    description: 'Current account deficit increases to $75 billion',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    category: 'Trade',
    value: '$75B',
    change: '+$5B'
  },
  {
    type: 'info',
    title: 'Employment Data Updated',
    description: 'Unemployment rate steady at 6.1%',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    category: 'Employment',
    value: '6.1%',
    change: '0%'
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