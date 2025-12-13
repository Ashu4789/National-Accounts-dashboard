import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { DollarSign, TrendingDown, PieChart } from 'lucide-react';
import { fiscalDeficitData } from '../data/dashboardData';

const FiscalData = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Fiscal Data</h1>
        <p className="text-gray-600 mt-2">
          Government fiscal metrics and budget analysis
        </p>
      </div>

      {/* Fiscal Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Current Deficit"
          value="5.6"
          suffix="% of GDP"
          change="-0.3%"
          changeType="positive"
          icon={<PieChart className="h-8 w-8" />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          description="Fiscal year 2024"
        />

        <StatsCard
          title="Revenue Deficit"
          value="3.2"
          suffix="% of GDP"
          change="-0.4%"
          changeType="positive"
          icon={<TrendingDown className="h-8 w-8" />}
          iconBgColor="bg-red-100"
          iconColor="text-red-600"
          description="Improvement from last year"
        />

        <StatsCard
          title="Total Debt"
          value="81.5"
          suffix="% of GDP"
          change="+1.2%"
          changeType="negative"
          icon={<DollarSign className="h-8 w-8" />}
          iconBgColor="bg-yellow-100"
          iconColor="text-yellow-600"
          description="Public debt ratio"
        />
      </div>

      {/* Fiscal Charts */}
      <div className="mb-8">
        <OverviewChart
          data={fiscalDeficitData}
          title="Fiscal Deficit Trend (% of GDP)"
          dataKey="deficit"
          color="#f59e0b"
          type="area"
        />
      </div>

      {/* Additional Info Card */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Key Highlights</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-700">Fiscal deficit target of 5.6% achieved for FY 2024</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
            <p className="text-gray-700">Tax revenue collections exceeded projections by 8%</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
            <p className="text-gray-700">Capital expenditure increased to support infrastructure development</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="text-gray-700">Subsidy expenditure rationalized to maintain fiscal discipline</p>
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default FiscalData;