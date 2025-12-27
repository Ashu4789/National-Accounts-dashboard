import { useState, useEffect, useContext } from 'react';
import DashboardLayout from '../components/DashboardLayout';
import { FileText, Download, Calendar, Filter, TrendingUp, DollarSign, PieChart, Upload, Trash2, FileSpreadsheet, AlertCircle, CheckCircle, Loader } from 'lucide-react';
import { getAllReports, downloadReport, uploadReport, deleteReport, downloadUploadedFile } from '../services/api';
import { AuthContext } from '../context/AuthContext';

const Reports = () => {
  const { user } = useContext(AuthContext);
  const [selectedPeriod, setSelectedPeriod] = useState('yearly');
  const [selectedType, setSelectedType] = useState('all');
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  // Upload form state
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    category: 'General',
    file: null
  });

  // Predefined generated reports
  const generatedReports = [
    {
      id: 'gdp',
      title: 'Comprehensive GDP Report',
      description: 'Multi-year GDP analysis with sectoral breakdown and state-wise data',
      type: 'generated',
      category: 'GDP',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'inflation',
      title: 'Inflation Analysis Report',
      description: 'CPI trends, food/fuel/core inflation breakdown with year-over-year analysis',
      type: 'generated',
      category: 'Inflation',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'fiscal',
      title: 'Fiscal Deficit Report',
      description: 'Government finances, deficit trends, revenue/expenditure analysis',
      type: 'generated',
      category: 'Fiscal',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'trade',
      title: 'Trade Balance Report',
      description: 'Export-import data, trade balance, balance of payments analysis',
      type: 'generated',
      category: 'Trade',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <PieChart className="h-6 w-6" />,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'employment',
      title: 'Employment Statistics Report',
      description: 'Labor force data, unemployment trends, sectoral employment analysis',
      type: 'generated',
      category: 'Employment',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 'stategdp',
      title: 'State-wise GDP Report',
      description: 'Top 10 states by GDP, per capita income rankings, regional analysis',
      type: 'generated',
      category: 'State GDP',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'banking',
      title: 'Banking Sector Report',
      description: 'Deposits, credit, NPA ratios, capital adequacy analysis',
      type: 'generated',
      category: 'Banking',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'bg-emerald-100 text-emerald-600'
    },
    {
      id: 'agriculture',
      title: 'Agriculture Production Report',
      description: 'Foodgrain production, crop-wise breakdown, agricultural statistics',
      type: 'generated',
      category: 'Agriculture',
      date: new Date().toISOString(),
      size: 'Generated',
      icon: <FileText className="h-6 w-6" />,
      color: 'bg-green-100 text-green-600'
    }
  ];

  // Fetch uploaded reports from backend
  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      setLoading(true);
      const response = await getAllReports();
      setReports(response.data);
    } catch (error) {
      console.error('Error fetching reports:', error);
    } finally {
      setLoading(false);
    }
  };

  // Combine generated and uploaded reports
  const allReports = [...generatedReports, ...reports];

  const filteredReports = allReports.filter(report =>
    selectedType === 'all' || report.category === selectedType
  );

  const handleDownload = async (report) => {
    try {
      let response;

      if (report.type === 'generated') {
        // Download generated PDF
        response = await downloadReport(report.id);
      } else {
        // Download uploaded file
        response = await downloadUploadedFile(report._id);
      }

      // Create blob link to download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${report.title.replace(/\s+/g, '_')}.${report.fileType || 'pdf'}`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      alert('Failed to download report. Please try again.');
      console.error('Download error:', error);
    }
  };

  const handleUploadFormChange = (e) => {
    const { name, value } = e.target;
    setUploadForm({ ...uploadForm, [name]: value });
  };

  const handleFileChange = (e) => {
    setUploadForm({ ...uploadForm, file: e.target.files[0] });
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      const formData = new FormData();
      formData.append('file', uploadForm.file);
      formData.append('title', uploadForm.title);
      formData.append('description', uploadForm.description);
      formData.append('category', uploadForm.category);

      await uploadReport(formData);

      setUploadSuccess(true);
      setUploadForm({
        title: '',
        description: '',
        category: 'General',
        file: null
      });

      // Reset file input
      document.getElementById('fileInput').value = '';

      // Refresh reports list
      fetchReports();

      setTimeout(() => setUploadSuccess(false), 3000);
    } catch (error) {
      setUploadError(error.response?.data?.message || 'Failed to upload report');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (reportId) => {
    if (!window.confirm('Are you sure you want to delete this report?')) {
      return;
    }

    try {
      await deleteReport(reportId);
      fetchReports();
    } catch (error) {
      alert('Failed to delete report');
      console.error('Delete error:', error);
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType === 'excel' || fileType === 'csv') {
      return <FileSpreadsheet className="h-6 w-6" />;
    }
    return <FileText className="h-6 w-6" />;
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground mt-2">
          Download comprehensive economic reports and analysis
        </p>
      </div>

      {/* Admin Upload Section */}
      {user?.role === 'admin' && (
        <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center">
            <Upload className="h-5 w-5 mr-2 text-primary" />
            Admin: Upload Custom Report
          </h3>

          {uploadError && (
            <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg mb-4 flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              {uploadError}
            </div>
          )}

          {uploadSuccess && (
            <div className="bg-emerald-500/10 text-emerald-600 text-sm p-3 rounded-lg mb-4 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Report uploaded successfully!
            </div>
          )}

          <form onSubmit={handleUploadSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={uploadForm.title}
                  onChange={handleUploadFormChange}
                  required
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                  placeholder="e.g. Q4 Financial Report"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                <select
                  name="category"
                  value={uploadForm.category}
                  onChange={handleUploadFormChange}
                  className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                >
                  <option value="General">General</option>
                  <option value="GDP">GDP</option>
                  <option value="Inflation">Inflation</option>
                  <option value="Fiscal">Fiscal</option>
                  <option value="Trade">Trade</option>
                  <option value="Employment">Employment</option>
                  <option value="State GDP">State GDP</option>
                  <option value="Banking">Banking</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Description</label>
              <textarea
                name="description"
                value={uploadForm.description}
                onChange={handleUploadFormChange}
                required
                rows="2"
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
                placeholder="Brief description of the report..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">File (PDF, Excel, or CSV - Max 10MB)</label>
              <input
                id="fileInput"
                type="file"
                accept=".pdf,.xlsx,.xls,.csv"
                onChange={handleFileChange}
                required
                className="w-full bg-background border border-border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-primary/50 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-2 rounded-md font-medium transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {uploading ? (
                <>
                  <Loader className="h-4 w-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Report
                </>
              )}
            </button>
          </form>
        </div>
      )}

      {/* Filters */}
      <div className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              <Filter className="h-4 w-4 inline mr-2" />
              Report Category
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-4 py-2 border border-input rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent bg-background/50 text-foreground"
            >
              <option value="all">All Categories</option>
              <option value="GDP">GDP</option>
              <option value="Inflation">Inflation</option>
              <option value="Fiscal">Fiscal</option>
              <option value="Trade">Trade</option>
              <option value="Employment">Employment</option>
              <option value="State GDP">State GDP</option>
              <option value="Banking">Banking</option>
              <option value="Agriculture">Agriculture</option>
              <option value="General">General</option>
              <option value="Other">Other</option>
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
            <button
              onClick={() => setSelectedType('all')}
              className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-2 rounded-full transition-shadow shadow-md font-semibold"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <Loader className="h-10 w-10 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReports.map((report, index) => (
            <div
              key={report._id || report.id || index}
              className="bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow hover:border-primary/50 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${report.color || 'bg-gray-100 text-gray-600'} p-3 rounded-lg`}>
                  {report.icon || getFileIcon(report.fileType)}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {report.category}
                  </span>
                  {report.type === 'uploaded' && user?.role === 'admin' && (
                    <button
                      onClick={() => handleDelete(report._id)}
                      className="text-destructive hover:bg-destructive/10 p-2 rounded-full transition-colors border border-destructive/20"
                      title="Delete report"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  )}
                </div>
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
                  {new Date(report.date || report.createdAt).toLocaleDateString()}
                </span>
                <span>{report.size}</span>
              </div>

              {report.type === 'uploaded' && (
                <div className="text-xs text-muted-foreground mb-2">
                  Type: {report.fileType?.toUpperCase() || 'PDF'}
                </div>
              )}

              <button
                onClick={() => handleDownload(report)}
                className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full transition-all flex items-center justify-center space-x-2 shadow-sm group-hover:bg-primary group-hover:text-primary-foreground"
              >
                <Download className="h-4 w-4" />
                <span>Download {report.fileType?.toUpperCase() || 'PDF'}</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Stats Summary */}
      <div className="mt-8 bg-card/40 backdrop-blur-md border border-border/50 rounded-xl shadow-md p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Report Statistics</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">{allReports.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Total Reports</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-emerald-500">{generatedReports.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Generated Reports</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-purple-500">{reports.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Uploaded Reports</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-orange-500">{filteredReports.length}</p>
            <p className="text-sm text-muted-foreground mt-1">Filtered Results</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;