import DashboardLayout from '../components/DashboardLayout';
import OverviewChart from '../components/OverviewChart';
import StatsCard from '../components/StatsCard';
import { TrendingDown, TrendingUp, Ship, DollarSign } from 'lucide-react';
import { balanceOfPayments, tradeByCategory, currentStats } from '../data/realIndiaData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const TradeData = () => {
  // Prepare trade balance data
  const tradeBalanceData = balanceOfPayments.map(item => ({
    year: item.year,
    exports: item.exports,
    imports: item.imports,
    balance: item.tradeBalance
  }));

  // Prepare export category data
  const exportCategoryData = Object.entries(tradeByCategory.exports).map(([category, value]) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    value: value
  }));

  // Prepare import category data
  const importCategoryData = Object.entries(tradeByCategory.imports).map(([category, value]) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    value: value
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

  const latestData = balanceOfPayments[balanceOfPayments.length - 1];

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Trade & Balance of Payments</h1>
        <p className="text-muted-foreground mt-2">
          India's international trade data, exports, imports, and balance of payments analysis
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Exports"
          value={currentStats.exports.value}
          suffix={currentStats.exports.suffix}
          change={currentStats.exports.change}
          changeType={currentStats.exports.changeType}
          icon={<TrendingUp className="h-8 w-8" />}
          iconBgColor="bg-emerald-500/10"
          iconColor="text-emerald-600 dark:text-emerald-400"
          description={currentStats.exports.description}
        />

        <StatsCard
          title="Total Imports"
          value="677"
          suffix="Billion USD"
          change="-5.2%"
          changeType="positive"
          icon={<Ship className="h-8 w-8" />}
          iconBgColor="bg-blue-500/10"
          iconColor="text-blue-600 dark:text-blue-400"
          description="Merchandise Imports FY 2023-24"
        />

        <StatsCard
          title="Trade Deficit"
          value="240"
          suffix="Billion USD"
          change="-10.1%"
          changeType="positive"
          icon={<TrendingDown className="h-8 w-8" />}
          iconBgColor="bg-orange-500/10"
          iconColor="text-orange-600 dark:text-orange-400"
          description="Trade Balance FY 2023-24"
        />

        <StatsCard
          title="Current Account Deficit"
          value="36"
          suffix="Billion USD"
          change="-46.3%"
          changeType="positive"
          icon={<DollarSign className="h-8 w-8" />}
          iconBgColor="bg-purple-500/10"
          iconColor="text-purple-600 dark:text-purple-400"
          description="1.2% of GDP"
        />
      </div>

      {/* Trade Balance Chart */}
      <div className="mb-8 bg-card border border-border/50 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-6">Exports, Imports & Trade Balance (Million USD)</h3>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={tradeBalanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" opacity={0.3} />
            <XAxis dataKey="year" stroke="currentColor" className="text-muted-foreground" style={{ fontSize: '12px' }} />
            <YAxis stroke="currentColor" className="text-muted-foreground" style={{ fontSize: '12px' }} />
            <Tooltip
              contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--popover-foreground)' }}
              itemStyle={{ color: 'var(--popover-foreground)' }}
            />
            <Legend wrapperStyle={{ fontSize: '14px', paddingTop: '20px' }} />
            <Bar dataKey="exports" fill="#10b981" name="Exports" />
            <Bar dataKey="imports" fill="#ef4444" name="Imports" />
            <Bar dataKey="balance" fill="#3b82f6" name="Trade Balance" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Category Breakdown */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Export Categories */}
        <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-foreground mb-6">Export Composition</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={exportCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {exportCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--popover-foreground)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Import Categories */}
        <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-foreground mb-6">Import Composition</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={importCategoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {importCategoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ backgroundColor: 'var(--popover)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--popover-foreground)' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-card border border-border/50 rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Key Trade Insights FY 2023-24</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-foreground mb-3">Export Highlights</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Engineering goods lead exports at $112.3 billion
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Petroleum products exports at $45.7 billion
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Agricultural exports contribute $45.7 billion
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2">•</span>
                Gems & jewelry exports at $38.9 billion
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-3">Import Highlights</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                Petroleum imports remain highest at $156.8 billion
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                Electronics imports at $78.9 billion
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                Machinery imports contribute $67.9 billion
              </li>
              <li className="flex items-start">
                <span className="text-destructive mr-2">•</span>
                Gold imports at $45.7 billion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TradeData;