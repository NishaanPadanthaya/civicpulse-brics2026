import { FiChevronRight, FiTrendingUp, FiTrendingDown } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const categoryColors = {
  'Water': '#2563eb',
  'Sanitation': '#7c3aed',
  'Transportation': '#f97316',
  'Waste': '#ec4899',
  'Energy': '#eab308',
  'Health': '#ef4444',
  'Education': '#06b6d4',
  'Infrastructure': '#8b5cf6',
  'Other': '#6b7280',
}

const priorityLevels = {
  'critical': { badge: 'badge-critical', label: 'Critical' },
  'high': { badge: 'badge-high', label: 'High' },
  'medium': { badge: 'badge-medium', label: 'Medium' },
  'low': { badge: 'badge-low', label: 'Low' },
}

function formatTime(timestamp) {
  if (!timestamp) return 'Recently'

  const date = new Date(timestamp)
  const now = new Date()
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`

  return date.toLocaleDateString()
}

export default function IssueCard({
  title,
  category = 'Other',
  region,
  reportCount = 0,
  priority = 'medium',
  trend = 'stable',
  lastUpdated,
  onClick,
}) {
  const navigate = useNavigate()
  const categoryColor = categoryColors[category] || categoryColors['Other']
  const priorityInfo = priorityLevels[priority] || priorityLevels['medium']
  const trendIcon = trend === 'rising' ? FiTrendingUp : FiTrendingDown
  const TrendIcon = trendIcon

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate('/issue-detail', { state: { issue: { title, category, region, reportCount, priority, trend, lastUpdated } } })
    }
  }

  return (
    <div
      onClick={handleClick}
      className="card p-5 cursor-pointer transition-all duration-200 hover:border-current"
      style={{
        borderColor: 'var(--border)',
        background: 'var(--bg-card)',
      }}>

      {/* Header: Badges */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        <span
          className="px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{
            background: `${categoryColor}15`,
            color: categoryColor,
            border: `1px solid ${categoryColor}30`,
          }}>
          {category}
        </span>
        <span className={`${priorityInfo.badge}`}>
          {priorityInfo.label}
        </span>
      </div>

      {/* Title and Region */}
      <div className="mb-3">
        <h3 className="text-base font-semibold leading-tight" style={{ color: 'var(--text-1)' }}>
          {title}
        </h3>
        <p className="text-sm mt-1" style={{ color: 'var(--text-2)' }}>
          <span className="font-medium">{region}</span>
        </p>
      </div>

      {/* Stats row */}
      <div className="flex items-center gap-4 mb-4 text-xs pb-3 border-b" style={{ borderColor: 'var(--border)' }}>
        <span style={{ color: 'var(--text-2)' }}>
          <span className="font-semibold" style={{ color: 'var(--text-1)' }}>{reportCount}</span> reports
        </span>
        <div className="flex items-center gap-1" style={{ color: 'var(--text-2)' }}>
          <span>Trend:</span>
          <TrendIcon size={14} style={{ color: trend === 'rising' ? '#ef4444' : '#16a34a' }} />
          <span className="font-medium capitalize">{trend}</span>
        </div>
        <span style={{ color: 'var(--text-3)' }}>
          Updated {formatTime(lastUpdated)}
        </span>
      </div>

      {/* Footer: View Details button */}
      <button
        onClick={handleClick}
        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors"
        style={{
          background: 'var(--bg-hover)',
          color: 'var(--text-1)',
        }}>
        <span>View Details</span>
        <FiChevronRight size={16} />
      </button>
    </div>
  )
}
