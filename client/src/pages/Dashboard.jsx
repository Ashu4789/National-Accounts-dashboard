import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import DashboardLayout from '../components/DashboardLayout';
import StatsCard from '../components/StatsCard';
import OverviewChart from '../components/OverviewChart';
import RecentUpdates from '../components/RecentUpdates';
import { TrendingUp, DollarSign, Activity, PieChart, Users, Globe, Landmark, Package } from 'lucide-react';
import {
  currentStats, 
  realGDPConstant, 
  inflationData, 
  fiscalData,
  balanceOfPayments
} from '../data/realIndiaData';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const gdpChartData = realGDPConstant.map(item => ({
    year: item.year,
    value: (item.value / 100000).toFixed(2) // Convert to Lakh Crore
  }));

  // Recent updates with real data
  const recentUpdates = [
    {
      type: 'success',
      title: 'Q4 FY24 GDP Growth Exceeds Expectations',
      description: 'India\'s GDP grows at 8.2% in FY 2023-24, driven by strong services and manufacturing sectors',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      category: 'GDP',
      value: '8.2%',
      change: '+1.0%'
    },
    {
      type: 'info',
      title: 'Inflation Moderates in FY24',
      description: 'CPI inflation eases to 5.4% for FY 2023-24, within RBI\'s target range',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
      category: 'Inflation',
      value: '5.4%',
      change: '-1.3%'
    },
    {
      type: 'trend',
      title: 'Fiscal Deficit Narrows',
      description: 'Government achieves fiscal deficit target of 5.9% of GDP in FY 2023-24',
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
      category: 'Fiscal',
      value: '5.9%',
      change: '-0.5%'
    },
    {
      type: 'success',
      title: 'Forex Reserves Hit Record High',
      description: 'India\'s foreign exchange reserves reach $645.58 billion, providing strong external buffer',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Forex',
      value: '$645.58B',
      change: '+11.6%'
    },
    {
      type: 'warning',
      title: 'Trade Deficit Concerns',
      description: 'Merchandise trade deficit at $240 billion, though lower than previous year',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      category: 'Trade',
      value: '$240B',
      change: '-10.1%'
    }
  ];
  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Here's an overview of India's national economic indicators for FY 2023-24
        </p>
      </div>

      {/* Stats Grid - Row 1 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="GDP (Current Prices)"
          value={currentStats.gdp.value}
          suffix={currentStats.gdp.suffix}
          change={currentStats.gdp.change}
          changeType={currentStats.gdp.changeType}
          icon={<DollarSign className="h-8 w-8" />}
          iconBgColor="bg-blue-100 dark:bg-blue-900"
          iconColor="text-blue-600 dark:text-blue-400"
          description={currentStats.gdp.description}
        />

        <StatsCard
          title="GDP Growth Rate"
          value={currentStats.gdpGrowth.value}
          suffix={currentStats.gdpGrowth.suffix}
          change={currentStats.gdpGrowth.change}
          changeType={currentStats.gdpGrowth.changeType}
          icon={<TrendingUp className="h-8 w-8" />}
          iconBgColor="bg-green-100 dark:bg-green-900"
          iconColor="text-green-600 dark:text-green-400"
          description={currentStats.gdpGrowth.description}
        />

        <StatsCard
          title="Inflation Rate (CPI)"
          value={currentStats.inflation.value}
          suffix={currentStats.inflation.suffix}
          change={currentStats.inflation.change}
          changeType={currentStats.inflation.changeType}
          icon={<Activity className="h-8 w-8" />}
          iconBgColor="bg-purple-100 dark:bg-purple-900"
          iconColor="text-purple-600 dark:text-purple-400"
          description={currentStats.inflation.description}
        />

        <StatsCard
          title="Fiscal Deficit"
          value={currentStats.fiscalDeficit.value}
          suffix={currentStats.fiscalDeficit.suffix}
          change={currentStats.fiscalDeficit.change}
          changeType={currentStats.fiscalDeficit.changeType}
          icon={<PieChart className="h-8 w-8" />}
          iconBgColor="bg-orange-100 dark:bg-orange-900"
          iconColor="text-orange-600 dark:text-orange-400"
          description={currentStats.fiscalDeficit.description}
        />
      </div>

      {/* Stats Grid - Row 2 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Per Capita Income"
          value={currentStats.perCapita.value}
          suffix={currentStats.perCapita.suffix}
          change={currentStats.perCapita.change}
          changeType={currentStats.perCapita.changeType}
          icon={<Users className="h-8 w-8" />}
          iconBgColor="bg-indigo-100 dark:bg-indigo-900"
          iconColor="text-indigo-600 dark:text-indigo-400"
          description={currentStats.perCapita.description}
        />

        <StatsCard
          title="Unemployment Rate"
          value={currentStats.unemployment.value}
          suffix={currentStats.unemployment.suffix}
          change={currentStats.unemployment.change}
          changeType={currentStats.unemployment.changeType}
          icon={<TrendingUp className="h-8 w-8" />}
          iconBgColor="bg-teal-100 dark:bg-teal-900"
          iconColor="text-teal-600 dark:text-teal-400"
          description={currentStats.unemployment.description}
        />

        <StatsCard
          title="Forex Reserves"
          value={currentStats.forexReserves.value}
          suffix={currentStats.forexReserves.suffix}
          change={currentStats.forexReserves.change}
          changeType={currentStats.forexReserves.changeType}
          icon={<Landmark className="h-8 w-8" />}
          iconBgColor="bg-cyan-100 dark:bg-cyan-900"
          iconColor="text-cyan-600 dark:text-cyan-400"
          description={currentStats.forexReserves.description}
        />

        <StatsCard
          title="Exports"
          value={currentStats.exports.value}
          suffix={currentStats.exports.suffix}
          change={currentStats.exports.change}
          changeType={currentStats.exports.changeType}
          icon={<Package className="h-8 w-8" />}
          iconBgColor="bg-pink-100 dark:bg-pink-900"
          iconColor="text-pink-600 dark:text-pink-400"
          description={currentStats.exports.description}
        />
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={gdpChartData}
          title="Real GDP at Constant Prices (Lakh Crore Rs.)"
          dataKey="value"
          color="#3b82f6"
          type="area"
        />

        <OverviewChart
          data={realGDPConstant}
          title="GDP Growth Rate (%)"
          dataKey="growth"
          color="#10b981"
          type="line"
        />
      </div>

      {/* Inflation and Fiscal Deficit Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={inflationData}
          title="CPI Inflation Rate (%)"
          dataKey="cpi"
          color="#8b5cf6"
          type="line"
        />

        <OverviewChart
          data={fiscalData}
          title="Fiscal Deficit (% of GDP)"
          dataKey="fiscalDeficit"
          color="#f59e0b"
          type="area"
        />
      </div>

      {/* Recent Updates */}
      <RecentUpdates updates={recentUpdates} />

      {/* Data Source Credit */}
      <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Data Sources</h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          Data compiled from official sources: Ministry of Statistics and Programme Implementation (MoSPI), 
          Reserve Bank of India (RBI), Department of Economic Affairs (DEA), and other Government of India publications.
          All data is publicly available and updated regularly.
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;