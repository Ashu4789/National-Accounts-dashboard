import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { DollarSign, TrendingDown, PieChart } from 'lucide-react';
import { fiscalDeficitData } from '../data/dashboardData';
import { fiscalData } from '../data/realIndiaData';

// Use latest entry from fiscal data for summary stats
const latestFiscal = fiscalData[fiscalData.length - 1];

const FiscalData = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Fiscal Data</h1>
        <p className="text-muted-foreground mt-2">
          Government fiscal metrics and budget analysis
        </p>
      </div>

      {/* Fiscal Stats */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Fiscal Deficit"
          value={latestFiscal.fiscalDeficit}
          suffix="% of GDP"
          change="-0.5%"
          changeType="positive"
          icon={<PieChart className="h-8 w-8" />}
          iconBgColor="bg-orange-500/10"
          iconColor="text-orange-600 dark:text-orange-400"
          description="FY 2023-24"
        />

        <StatsCard
          title="Revenue Deficit"
          value={latestFiscal.revenueDeficit}
          suffix="% of GDP"
          change="-1.3%"
          changeType="positive"
          icon={<TrendingDown className="h-8 w-8" />}
          iconBgColor="bg-destructive/10"
          iconColor="text-destructive"
          description="FY 2023-24"
        />

        <StatsCard
          title="Primary Deficit"
          value={latestFiscal.primaryDeficit}
          suffix="% of GDP"
          change="-0.6%"
          changeType="positive"
          icon={<DollarSign className="h-8 w-8" />}
          iconBgColor="bg-yellow-500/10"
          iconColor="text-yellow-600 dark:text-yellow-400"
          description="FY 2023-24"
        />

        <StatsCard
          title="Total Debt"
          value={latestFiscal.totalDebt}
          suffix="% of GDP"
          change="+0.3%"
          changeType="negative"
          icon={<DollarSign className="h-8 w-8" />}
          iconBgColor="bg-purple-500/10"
          iconColor="text-purple-600 dark:text-purple-400"
          description="Public debt ratio"
        />
      </div>

      {/* Fiscal Charts */}
      <div className="mb-8">
        <OverviewChart
          data={fiscalData}
          title="Fiscal Deficit Trend (% of GDP)"
          dataKey="fiscalDeficit"
          color="#f59e0b"
          type="area"
        />
      </div>

      {/* Additional Info Card */}
      <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Key Fiscal Highlights FY 2023-24</h3>
        <ul className="space-y-3">
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2"></div>
            <p className="text-muted-foreground">Fiscal deficit target of 5.9% achieved successfully</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-emerald-500 rounded-full mt-2"></div>
            <p className="text-muted-foreground">Tax revenue collections exceeded projections by 8.2%</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2"></div>
            <p className="text-muted-foreground">Capital expenditure increased to support infrastructure development</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="text-muted-foreground">Revenue deficit reduced significantly from previous year</p>
          </li>
          <li className="flex items-start space-x-3">
            <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="text-muted-foreground">Subsidy expenditure rationalized to maintain fiscal discipline</p>
          </li>
        </ul>
      </div>
    </DashboardLayout>
  );
};

export default FiscalData;