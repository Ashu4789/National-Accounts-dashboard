import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({
  title,
  value,
  change,
  changeType = 'positive',
  icon,
  iconBgColor = 'bg-blue-100',
  iconColor = 'text-blue-600',
  suffix = '',
  description = ''
}) => {
  const isPositive = changeType === 'positive';
  const changeColor = isPositive ? 'text-green-600' : 'text-red-600';
  const changeBgColor = isPositive ? 'bg-green-50' : 'bg-red-50';
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <div className="bg-card backdrop-blur-md border border-border/50 rounded-xl shadow-sm p-6 hover:shadow-lg hover:border-border transition-all duration-300">
      {/* Header with Icon */}
      <div className="flex items-start justify-between mb-4">
        <div className={`${iconBgColor} p-3 rounded-lg`}>
          <div className={`${iconColor}`}>
            {icon}
          </div>
        </div>

        {/* Change Indicator */}
        {change && (
          <div className={`flex items-center space-x-1 ${changeBgColor} px-3 py-1 rounded-full`}>
            <TrendIcon className={`h-4 w-4 ${changeColor}`} />
            <span className={`text-sm font-semibold ${changeColor}`}>
              {change}
            </span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="text-muted-foreground text-sm font-medium mb-2">
        {title}
      </h3>

      {/* Value */}
      <div className="flex items-baseline space-x-2">
        <p className="text-3xl font-bold text-foreground tracking-tight">
          {value}
        </p>
        {suffix && (
          <span className="text-lg font-medium text-muted-foreground">
            {suffix}
          </span>
        )}
      </div>

      {/* Description */}
      {description && (
        <p className="text-xs text-muted-foreground mt-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default StatsCard;