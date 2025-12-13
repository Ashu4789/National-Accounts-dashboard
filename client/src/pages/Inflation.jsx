import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { TrendingUp, Home, Building2 } from 'lucide-react';
import { inflationData } from '../data/dashboardData';

const Inflation = () => {
  const [type, setType] = useState('combined');

  const latest = inflationData[inflationData.length - 1];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Inflation Analysis
        </h1>
        <p className="text-gray-600 mt-2">
          Rural, Urban and Combined inflation trends
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Rural Inflation"
          value={latest.rural}
          suffix="%"
          icon={<Home className="h-8 w-8" />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          description="Latest year"
        />

        <StatsCard
          title="Urban Inflation"
          value={latest.urban}
          suffix="%"
          icon={<Building2 className="h-8 w-8" />}
          iconBgColor="bg-emerald-100"
          iconColor="text-emerald-600"
          description="Latest year"
        />

        <StatsCard
          title="Combined Inflation"
          value={latest.combined}
          suffix="%"
          icon={<TrendingUp className="h-8 w-8" />}
          iconBgColor="bg-rose-100"
          iconColor="text-rose-600"
          description="Latest year"
        />
      </div>

      {/* Overview Chart (ALWAYS COMBINED) */}
      <div className="mb-10">
        <OverviewChart
          data={inflationData}
          title="Inflation Overview (Combined)"
          dataKey="combined"
          color="#ef4444"
          type="line"
        />
      </div>

      {/* Toggle Buttons */}
      <div className="flex gap-2 mb-6">
        {['rural', 'urban', 'combined'].map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition ${
              type === t
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* MAIN CHART (CHANGES WITH TOGGLE) */}
      <OverviewChart
        data={inflationData}
        title={`Inflation Rate – ${type.charAt(0).toUpperCase() + type.slice(1)}`}
        dataKey={type}
        color={
          type === 'rural'
            ? '#2563eb'
            : type === 'urban'
            ? '#16a34a'
            : '#ef4444'
        }
        type="line"
      />
    </DashboardLayout>
  );
};

export default Inflation;
