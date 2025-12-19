import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { TrendingUp, BarChart3, Activity } from 'lucide-react';
import { gdpData, sectorWiseGDP } from '../data/dashboardData';

const GDPAnalysis = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">GDP Analysis</h1>
        <p className="text-gray-700 mt-2">
          Detailed analysis of Gross Domestic Product trends and sectoral contributions
        </p>
      </div>

      {/* Sector Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {sectorWiseGDP.map((sector, index) => (
          <StatsCard
            key={index}
            title={sector.sector}
            value={sector.contribution}
            suffix="% of GDP"
            change={`+${sector.growth}%`}
            changeType="positive"
            icon={<BarChart3 className="h-8 w-8" />}
            iconBgColor="bg-indigo-100"
            iconColor="text-indigo-600"
            description={`Growth: ${sector.growth}%`}
          />
        ))}
      </div>

      {/* GDP Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <OverviewChart
          data={gdpData}
          title="GDP Value Over Time"
          dataKey="value"
          color="#6366f1"
          type="area"
        />

        <OverviewChart
          data={gdpData}
          title="Year-on-Year Growth Rate"
          dataKey="growth"
          color="#10b981"
          type="line"
        />
      </div>
    </DashboardLayout>
  );
};

export default GDPAnalysis;