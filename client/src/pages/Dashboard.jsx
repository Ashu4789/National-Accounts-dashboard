import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import DashboardLayout from '../components/DashboardLayout';
import StatsCard from '../components/StatsCard';
import OverviewChart from '../components/OverviewChart';
import RecentUpdates from '../components/RecentUpdates';
import AdminUpdateForm from '../components/AdminUpdateForm';
import { TrendingUp, DollarSign, Activity, PieChart, Users, Landmark, Package, Loader } from 'lucide-react';

import {
  realGDPConstant,
  inflationData,
  fiscalData
} from '../data/realIndiaData';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [stats, setStats] = useState(null);
  const [recentUpdates, setRecentUpdates] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const [statsRes, updatesRes] = await Promise.all([
          axios.get(`${import.meta.env.VITE_API_URL}/dashboard/stats`, config),
          axios.get(`${import.meta.env.VITE_API_URL}/dashboard/updates`, config)
        ]);

        setStats(statsRes.data);
        setRecentUpdates(updatesRes.data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Polling for updates every 60 seconds
    const pollInterval = setInterval(async () => {
      try {
        const token = localStorage.getItem('token');
        const config = { headers: { Authorization: `Bearer ${token}` } };

        const updatesRes = await axios.get(`${import.meta.env.VITE_API_URL}/dashboard/updates`, config);
        const newUpdates = updatesRes.data;

        setRecentUpdates(prevUpdates => {
          // Check for new updates by comparing length or IDs
          if (newUpdates.length > prevUpdates.length) {
            const latestUpdate = newUpdates[0];
            const isNew = !prevUpdates.find(u => u._id === latestUpdate._id);

            if (isNew && user?.preferences?.notifications?.pushNotifications) {
              if (Notification.permission === 'granted') {
                new Notification(latestUpdate.title, {
                  body: latestUpdate.description,
                  icon: '/vite.svg' // or generic icon
                });
              }
            }
          }
          return newUpdates;
        });
      } catch (error) {
        console.error('Error polling updates:', error);
      }
    }, 60000);

    return () => clearInterval(pollInterval);
  }, [user]);

  const handleUpdateAdded = (newUpdate) => {
    setRecentUpdates([newUpdate, ...recentUpdates]);
  };

  const gdpChartData = realGDPConstant.map(item => ({
    year: item.year,
    value: (item.value / 100000).toFixed(2)
  }));

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-screen">
          <Loader className="h-10 w-10 animate-spin text-primary" />
        </div>
      </DashboardLayout>
    );
  }

  // Fallback if stats fail to load (optional, or show error)
  const currentStats = stats || {};

  return (
    <DashboardLayout>
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-muted-foreground mt-2">
          Here's an overview of India's national economic indicators for FY 2023-24
        </p>
      </div>

      {/* Admin Update Form */}
      {user?.role === 'admin' ? (
        <AdminUpdateForm onUpdateAdded={handleUpdateAdded} />
      ) : null}

      {/* Stats Row 1 */}
      {currentStats.gdp && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="GDP (Current Prices)"
            value={currentStats.gdp.value}
            suffix={currentStats.gdp.suffix}
            change={currentStats.gdp.change}
            changeType={currentStats.gdp.changeType}
            icon={<DollarSign className="h-8 w-8" />}
            iconBgColor="bg-emerald-500/20"
            iconColor="text-emerald-400"
            description={currentStats.gdp.description}
          />

          <StatsCard
            title="GDP Growth Rate"
            value={currentStats.gdpGrowth.value}
            suffix={currentStats.gdpGrowth.suffix}
            change={currentStats.gdpGrowth.change}
            changeType={currentStats.gdpGrowth.changeType}
            icon={<TrendingUp className="h-8 w-8" />}
            iconBgColor="bg-blue-500/20"
            iconColor="text-blue-400"
            description={currentStats.gdpGrowth.description}
          />

          <StatsCard
            title="Inflation (CPI)"
            value={currentStats.inflation.value}
            suffix={currentStats.inflation.suffix}
            change={currentStats.inflation.change}
            changeType={currentStats.inflation.changeType}
            icon={<Activity className="h-8 w-8" />}
            iconBgColor="bg-red-500/20"
            iconColor="text-red-400"
            description={currentStats.inflation.description}
          />

          <StatsCard
            title="Fiscal Deficit"
            value={currentStats.fiscalDeficit.value}
            suffix={currentStats.fiscalDeficit.suffix}
            change={currentStats.fiscalDeficit.change}
            changeType={currentStats.fiscalDeficit.changeType}
            icon={<PieChart className="h-8 w-8" />}
            iconBgColor="bg-yellow-500/20"
            iconColor="text-yellow-400"
            description={currentStats.fiscalDeficit.description}
          />
        </div>
      )}

      {/* Stats Row 2 */}
      {currentStats.perCapita && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Per Capita Income"
            value={currentStats.perCapita.value}
            suffix={currentStats.perCapita.suffix}
            change={currentStats.perCapita.change}
            changeType={currentStats.perCapita.changeType}
            icon={<Users className="h-8 w-8" />}
            iconBgColor="bg-blue-500/20"
            iconColor="text-blue-400"
            description={currentStats.perCapita.description}
          />

          <StatsCard
            title="Unemployment Rate"
            value={currentStats.unemployment.value}
            suffix={currentStats.unemployment.suffix}
            change={currentStats.unemployment.change}
            changeType={currentStats.unemployment.changeType}
            icon={<TrendingUp className="h-8 w-8" />}
            iconBgColor="bg-red-500/20"
            iconColor="text-red-400"
            description={currentStats.unemployment.description}
          />

          <StatsCard
            title="Forex Reserves"
            value={currentStats.forexReserves.value}
            suffix={currentStats.forexReserves.suffix}
            change={currentStats.forexReserves.change}
            changeType={currentStats.forexReserves.changeType}
            icon={<Landmark className="h-8 w-8" />}
            iconBgColor="bg-emerald-500/20"
            iconColor="text-emerald-400"
            description={currentStats.forexReserves.description}
          />

          <StatsCard
            title="Exports"
            value={currentStats.exports.value}
            suffix={currentStats.exports.suffix}
            change={currentStats.exports.change}
            changeType={currentStats.exports.changeType}
            icon={<Package className="h-8 w-8" />}
            iconBgColor="bg-blue-500/20"
            iconColor="text-blue-400"
            description={currentStats.exports.description}
          />
        </div>
      )}

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={gdpChartData}
          title="Real GDP at Constant Prices (Lakh Crore ₹)"
          dataKey="value"
          color="#10b981"
          type="area"
        />

        <OverviewChart
          data={realGDPConstant}
          title="GDP Growth Rate (%)"
          dataKey="growth"
          color="#3b82f6"
          type="line"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={inflationData}
          title="CPI Inflation Rate (%)"
          dataKey="cpi"
          color="#ef4444"
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

      <RecentUpdates updates={recentUpdates} />

      <div className="mt-6 bg-card border border-border rounded-xl p-6">
        <h3 className="text-sm font-semibold text-foreground mb-2">Data Sources</h3>
        <p className="text-xs text-muted-foreground">
          Ministry of Statistics & Programme Implementation (MoSPI),
          Reserve Bank of India, DEA & Government of India publications
        </p>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
