import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FileText, Download, Calendar, Filter, TrendingUp, DollarSign, PieChart } from 'lucide-react';

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('yearly');
  const [selectedType, setSelectedType] = useState('all');

  const reports = [
    {
      id: 1,
      title: 'Annual GDP Report 2024',
      description: 'Comprehensive analysis of GDP growth and sectoral contributions',
      type: 'GDP',
      date: '2024-12-01',
      size: '2.4 MB',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      title: 'Q4 Inflation Analysis',
      description: 'Quarterly inflation trends and consumer price index breakdown',
      type: 'Inflation',
      date: '2024-11-15',
      size: '1.8 MB',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 3,
      title: 'Fiscal Budget Report FY2024',
      description: 'Government expenditure and revenue analysis',
      type: 'Fiscal',
      date: '2024-11-01',
      size: '3.1 MB',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 4,
      title: 'Trade Balance Report',
      description: 'Import-export analysis and trade deficit overview',
      type: 'Trade',
      date: '2024-10-20',
      size: '1.5 MB',
      icon: <PieChart className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 5,
      title: 'Employment Statistics 2024',
      description: 'Labor force participation and unemployment trends',
      type: 'Employment',
      date: '2024-10-10',
      size: '2.0 MB',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 6,
      title: 'Sectoral Growth Analysis',
      description: 'Agriculture, Industry, and Services sector performance',
      type: 'GDP',
      date: '2024-09-25',
      size: '2.7 MB',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600'
    }
  ];

  const filteredReports = reports.filter(report =>
    selectedType === 'all' || report.type === selectedType
  );

  const handleDownload = async (report) => {
    try {
      const { downloadReport } = await import('../services/api');
      const response = await downloadReport(report.id);

      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${report.title.replace(/\s+/g, '_')}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to download report. Please try again.');
      console.error('Download error:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-2">
          Download and view detailed economic reports and analysis
        </p>
      </div>

      {/* Filters */}
      <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Filter className="h-4 w-4 inline mr-2" />
              Report Type
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-background/50 text-foreground"
            >
              <option value="all">All Reports</option>
              <option value="GDP">GDP</option>
              <option value="Inflation">Inflation</option>
              <option value="Fiscal">Fiscal</option>
              <option value="Trade">Trade</option>
              <option value="Employment">Employment</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Calendar className="h-4 w-4 inline mr-2" />
              Time Period
            </label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-background/50 text-foreground"
            >
              <option value="yearly">Yearly</option>
              <option value="quarterly">Quarterly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <div className="flex items-end">
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full transition-shadow shadow-md font-semibold">
              Apply Filters
            </button>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredReports.map((report) => (
          <div
            key={report.id}
            className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow hover:border-primary/50 group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${report.color} p-3 rounded-lg`}>
                {report.icon}
              </div>
              <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                {report.type}
              </span>
            </div>

            <h3 className="text-lg font-bold text-foreground mb-2">
              {report.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
              {report.description}
            </p>

            <div className="flex items-center justify-between text-xs text-muted-foreground/80 mb-4">
              <span className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(report.date).toLocaleDateString()}
              </span>
              <span>{report.size}</span>
            </div>

            <button
              onClick={() => handleDownload(report)}
              className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full transition-all flex items-center justify-center space-x-2 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground"
            >
              <Download className="h-4 w-4" />
              <span>Download PDF</span>
            </button>
          </div>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="mt-8 bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Report Statistics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">{reports.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Total Reports</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-500">24</p>
            <p className="text-sm text-muted-foreground mt-1">This Year</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-500">6</p>
            <p className="text-sm text-muted-foreground mt-1">This Quarter</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">15.2 MB</p>
            <p className="text-sm text-muted-foreground mt-1">Total Size</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;