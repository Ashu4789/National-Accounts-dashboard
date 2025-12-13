import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import DashboardLayout from '../components/DashboardLayout';
import StatsCard from '../components/StatsCard';
import OverviewChart from '../components/OverviewChart';
import RecentUpdates from '../components/RecentUpdates';
import { TrendingUp, DollarSign, Activity, PieChart } from 'lucide-react';
import { 
  currentStats, 
  gdpData, 
  inflationData, 
  fiscalDeficitData, 
  recentUpdates 
} from '../data/dashboardData';

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600 mt-2">
          Here's an overview of India's national economic indicators for 2024
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Current GDP"
          value={currentStats.gdp.value}
          suffix={currentStats.gdp.suffix}
          change={currentStats.gdp.change}
          changeType={currentStats.gdp.changeType}
          icon={<DollarSign className="h-8 w-8" />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          description={currentStats.gdp.description}
        />

        <StatsCard
          title="GDP Growth Rate"
          value={currentStats.gdpGrowth.value}
          suffix={currentStats.gdpGrowth.suffix}
          change={currentStats.gdpGrowth.change}
          changeType={currentStats.gdpGrowth.changeType}
          icon={<TrendingUp className="h-8 w-8" />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          description={currentStats.gdpGrowth.description}
        />

        <StatsCard
          title="Inflation Rate"
          value={currentStats.inflation.value}
          suffix={currentStats.inflation.suffix}
          change={currentStats.inflation.change}
          changeType={currentStats.inflation.changeType}
          icon={<Activity className="h-8 w-8" />}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
          description={currentStats.inflation.description}
        />

        <StatsCard
          title="Fiscal Deficit"
          value={currentStats.fiscalDeficit.value}
          suffix={currentStats.fiscalDeficit.suffix}
          change={currentStats.fiscalDeficit.change}
          changeType={currentStats.fiscalDeficit.changeType}
          icon={<PieChart className="h-8 w-8" />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          description={currentStats.fiscalDeficit.description}
        />
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={gdpData}
          title="GDP Trend (Billion USD)"
          dataKey="value"
          color="#3b82f6"
          type="area"
        />

        <OverviewChart
          data={gdpData}
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
          title="Inflation Rate (%)"
          dataKey="rate"
          color="#8b5cf6"
          type="line"
        />

        <OverviewChart
          data={fiscalDeficitData}
          title="Fiscal Deficit (% of GDP)"
          dataKey="deficit"
          color="#f59e0b"
          type="area"
        />
      </div>

      {/* Recent Updates */}
      <RecentUpdates updates={recentUpdates} />
    </DashboardLayout>
  );
};

export default Dashboard;