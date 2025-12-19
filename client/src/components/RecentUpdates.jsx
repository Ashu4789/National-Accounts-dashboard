import { Clock, TrendingUp, FileText, AlertCircle, CheckCircle } from 'lucide-react';

const RecentUpdates = ({ updates }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-700" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-700" />;
      case 'info':
        return <FileText className="h-5 w-5 text-blue-700" />;
      case 'trend':
        return <TrendingUp className="h-5 w-5 text-purple-700" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getBgColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-900/40';
      case 'warning':
        return 'bg-yellow-100 hover:bg-yellow-200 dark:bg-yellow-900/30 dark:hover:bg-yellow-900/40';
      case 'info':
        return 'bg-blue-100 hover:bg-blue-200 dark:bg-blue-900/30 dark:hover:bg-blue-900/40';
      case 'trend':
        return 'bg-purple-100 hover:bg-purple-200 dark:bg-purple-900/30 dark:hover:bg-purple-900/40';
      default:
        return 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-800';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 48) return 'Yesterday';
    return date.toLocaleDateString();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Recent Updates</h3>
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>
      </div>

      <div className="space-y-3">
        {updates.length > 0 ? (
          updates.map((update, index) => (
            <div
              key={index}
              className={`flex items-start space-x-4 p-4 rounded-lg transition-colors ${getBgColor(update.type)}`}
            >
              <div className="shrink-0 mt-1">
                {getIcon(update.type)}
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                  {update.title}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  {update.description}
                </p>
                <div className="flex items-center space-x-4">
                  <span className="text-xs text-gray-600 dark:text-gray-300 flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    {formatTime(update.timestamp)}
                  </span>
                  {update.category && (
                    <span className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-gray-800 dark:text-gray-100">
                      {update.category}
                    </span>
                  )}
                </div>
              </div>

              {update.value && (
                <div className="shrink-0 text-right">
                  <p className="text-lg font-bold text-gray-900 dark:text-white">
                    {update.value}
                  </p>
                  {update.change && (
                    <p className={`text-xs font-semibold ${
                      update.change.startsWith('+') ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {update.change}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            <FileText className="h-12 w-12 mx-auto mb-3 text-gray-400" />
            <p>No recent updates available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentUpdates;