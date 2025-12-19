import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { Users, TrendingDown, Briefcase, UserCheck } from 'lucide-react';
import { employmentData, currentStats } from '../data/realIndiaData';

const Employment = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Employment Statistics</h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Labor force participation, employment trends, and unemployment analysis
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Labor Force"
          value="52.4"
          suffix="Crore"
          change="+1.0%"
          changeType="positive"
          icon={<Users className="h-8 w-8" />}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          description="Total Labor Force 2023-24"
        />

        <StatsCard
          title="Employed"
          value="49.2"
          suffix="Crore"
          change="+1.0%"
          changeType="positive"
          icon={<UserCheck className="h-8 w-8" />}
          iconBgColor="bg-green-100"
          iconColor="text-green-600"
          description="Employed Workforce"
        />

        <StatsCard
          title="Unemployment Rate"
          value={currentStats.unemployment.value}
          suffix={currentStats.unemployment.suffix}
          change={currentStats.unemployment.change}
          changeType={currentStats.unemployment.changeType}
          icon={<TrendingDown className="h-8 w-8" />}
          iconBgColor="bg-orange-100"
          iconColor="text-orange-600"
          description={currentStats.unemployment.description}
        />

        <StatsCard
          title="Labor Force Participation"
          value="46.8"
          suffix="%"
          change="+0.4%"
          changeType="positive"
          icon={<Briefcase className="h-8 w-8" />}
          iconBgColor="bg-purple-100"
          iconColor="text-purple-600"
          description="LFPR 2023-24"
        />
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        <OverviewChart
          data={employmentData}
          title="Unemployment Rate Trend (%)"
          dataKey="rate"
          color="#f59e0b"
          type="line"
        />

        <OverviewChart
          data={employmentData}
          title="Labor Force (Crore)"
          dataKey="laborForce"
          color="#3b82f6"
          type="area"
        />
      </div>

      {/* Employment Details */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-8">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Employment Statistics Over Years</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 dark:text-gray-300 font-semibold">Year</th>
                <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">Labor Force</th>
                <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">Employed</th>
                <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">Unemployed</th>
                <th className="px-4 py-3 text-right text-gray-700 dark:text-gray-300 font-semibold">U-Rate %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {employmentData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-4 py-3 text-gray-900 dark:text-gray-100 font-medium">{item.year}</td>
                  <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{item.laborForce} Cr</td>
                  <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{item.employed} Cr</td>
                  <td className="px-4 py-3 text-right text-gray-700 dark:text-gray-300">{item.unemployed} Cr</td>
                  <td className="px-4 py-3 text-right">
                    <span className={`font-semibold ${
                      item.rate < 7 ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'
                    }`}>
                      {item.rate}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Employment Insights</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Positive Trends</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Unemployment rate decreased from 7.8% (2021-22) to 6.1% (2023-24)
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Labor force increased to 52.4 crore in 2023-24
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Employed workforce grew by 1 crore in FY 2023-24
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                Recovery from COVID-19 impact visible in employment data
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Sectoral Employment</h4>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Agriculture sector employs approximately 42% of workforce
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Services sector shows highest growth in job creation
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                Manufacturing and construction sectors recovering post-pandemic
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                IT and digital sectors driving urban employment growth
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Employment;