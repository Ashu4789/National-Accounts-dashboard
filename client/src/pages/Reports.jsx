import DashboardLayout from '../components/DashboardLayout';
import {
  GDPData,
  inflationData,
  fiscalDeficitData
} from '../data/dashboardData';

const Reports = () => {

  const downloadReport = async (type) => {
    let payload = [];

    if (type === 'gdp') payload = GDPData;
    if (type === 'inflation') payload = inflationData;
    if (type === 'fiscal') payload = fiscalDeficitData;

    try {
      const response = await fetch(`http://localhost:8080/api/reports/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Download failed');

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `${type}-report.pdf`;
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (err) {
      alert('Failed to download report');
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Reports</h1>

      <div className="grid md:grid-cols-2 gap-4">
        <button
          onClick={() => downloadReport('gdp')}
          className="bg-blue-600 text-white py-3 rounded"
        >
          Download GDP Report
        </button>

        <button
          onClick={() => downloadReport('inflation')}
          className="bg-green-600 text-white py-3 rounded"
        >
          Download Inflation Report
        </button>

        <button
          onClick={() => downloadReport('fiscal')}
          className="bg-purple-600 text-white py-3 rounded"
        >
          Download Fiscal Report
        </button>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
