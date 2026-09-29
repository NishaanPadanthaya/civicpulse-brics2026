import { FiUsers, FiCheckCircle, FiTrendingUp, FiSmile } from 'react-icons/fi'

export default function ImpactSummaryCard({
  citizensHelped = 5234,
  issuesResolved = 892,
  projectsFunded = 47,
  helpfulRating = 98,
  timeframe = 'this month'
}) {
  // Stat boxes configuration with icons and labels
  const stats = [
    {
      icon: FiUsers,
      value: citizensHelped,
      label: 'Citizens Helped',
      color: '#16a34a'
    },
    {
      icon: FiCheckCircle,
      value: issuesResolved,
      label: 'Issues Resolved',
      color: '#16a34a'
    },
    {
      icon: FiTrendingUp,
      value: projectsFunded,
      label: 'Projects Funded',
      color: '#16a34a'
    },
    {
      icon: FiSmile,
      value: `${helpfulRating}%`,
      label: 'Community Helpful',
      color: '#16a34a'
    }
  ]

  return (
    <div className="card p-6">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-lg font-bold mb-1" style={{ color: 'var(--text-1)' }}>
          Real-World Impact
        </h3>
        <p className="text-sm" style={{ color: 'var(--text-3)' }}>
          The difference citizen feedback made {timeframe}
        </p>
      </div>

      {/* Stats Grid - 4 columns on desktop, 2x2 on mobile */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div
              key={index}
              className="p-4 rounded-lg transition-all hover:shadow-md"
              style={{
                background: 'rgba(22, 163, 74, 0.04)',
                border: `1px solid rgba(22, 163, 74, 0.15)`,
                color: 'var(--text-1)'
              }}
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
                   style={{
                     background: `rgba(22, 163, 74, 0.12)`,
                     color: stat.color
                   }}>
                <Icon size={18} />
              </div>

              {/* Large Number */}
              <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                {typeof stat.value === 'number'
                  ? stat.value.toLocaleString()
                  : stat.value}
              </div>

              {/* Label */}
              <div className="text-xs font-medium" style={{ color: 'var(--text-2)' }}>
                {stat.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
