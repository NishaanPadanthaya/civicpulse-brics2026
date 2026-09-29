import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { FiArrowLeft, FiTrendingUp, FiTrendingDown, FiMinus, FiMap, FiMessageCircle, FiArrowRight, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi'
import { lazy, Suspense } from 'react'
import Breadcrumbs from '../components/Breadcrumbs'
import IssueStatusTimeline from '../components/IssueStatusTimeline'
import MapErrorBoundary from '../components/MapErrorBoundary'

// Lazy-load the map
const HeatMap = lazy(() => import('../components/map/HeatMap'))

// Mock data for Water Supply issue
const MOCK_ISSUE = {
  id: 'water-supply-mumbai-001',
  type: 'Water Supply',
  region: 'Mumbai',
  country: 'India',
  priority: 'critical',
  priorityLabel: 'Critical',
  status: 'Planned',
  reportCount: 347,
  trend: 'up', // 'up', 'down', 'stable'
  trendValue: '+12%',
  lastUpdated: '2 hours ago',
  description: 'Persistent water supply disruptions affecting downtown districts, with reports indicating contamination concerns in multiple localities.',

  // Map data points (Mumbai area)
  mapPoints: [
    { lat: 19.0760, lng: 72.8777, urgency: 9, reports: 45 },  // Downtown
    { lat: 19.1136, lng: 72.8697, urgency: 8, reports: 38 },  // Bandra
    { lat: 19.0283, lng: 72.8353, urgency: 7, reports: 32 },  // Worli
    { lat: 19.0176, lng: 72.8479, urgency: 8, reports: 41 },  // South Mumbai
    { lat: 19.1367, lng: 72.9211, urgency: 6, reports: 28 },  // Thane
    { lat: 19.0596, lng: 72.9289, urgency: 7, reports: 35 },  // Vile Parle
    { lat: 19.1696, lng: 72.8194, urgency: 5, reports: 18 },  // Borivali
    { lat: 19.0426, lng: 72.8326, urgency: 9, reports: 52 },  // Fort
  ],

  // Sample anonymized reports
  recentReports: [
    {
      id: 'rpt-001',
      date: '2 hours ago',
      location: 'Downtown District',
      description: 'No water supply since morning, affecting essential services',
      priority: 'critical',
    },
    {
      id: 'rpt-002',
      date: '4 hours ago',
      location: 'Bandra East',
      description: 'Intermittent water supply with low pressure throughout day',
      priority: 'high',
    },
    {
      id: 'rpt-003',
      date: '6 hours ago',
      location: 'South Mumbai',
      description: 'Water appears discolored, possible contamination',
      priority: 'critical',
    },
    {
      id: 'rpt-004',
      date: '8 hours ago',
      location: 'Worli',
      description: 'Repeated outages every 4 hours, very inconvenient',
      priority: 'high',
    },
    {
      id: 'rpt-005',
      date: '12 hours ago',
      location: 'Vile Parle',
      description: 'Partial supply restoration, still below normal levels',
      priority: 'medium',
    },
  ],

  // Related project (if exists)
  relatedProject: {
    id: 'proj-water-001',
    name: 'Water Supply Infrastructure Upgrade - Phase 2',
    status: 'In Progress',
    completionDate: 'Q4 2024',
  },
}

function TrendIcon({ trend }) {
  if (trend === 'up') return <FiTrendingUp className="text-red-600" size={20} />
  if (trend === 'down') return <FiTrendingDown className="text-green-600" size={20} />
  return <FiMinus className="text-gray-500" size={20} />
}

function PriorityBadge({ priority }) {
  const badgeClass = {
    critical: 'badge-critical',
    high: 'badge-high',
    medium: 'badge-medium',
    low: 'badge-low',
  }[priority] || 'badge-medium'

  return <span className={`badge ${badgeClass}`}>{priority.toUpperCase()}</span>
}

function StatItem({ label, value, sub, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      {Icon && (
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: 'var(--bg-2)' }}
        >
          <Icon size={18} style={{ color: 'var(--text-2)' }} />
        </div>
      )}
      <div>
        <div className="text-sm" style={{ color: 'var(--text-3)' }}>
          {label}
        </div>
        <div className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>
          {value}
        </div>
        {sub && (
          <div className="text-xs" style={{ color: 'var(--text-3)' }}>
            {sub}
          </div>
        )}
      </div>
    </div>
  )
}

function ReportCard({ report }) {
  return (
    <div className="card p-4 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="flex-1">
          <div className="text-sm font-semibold" style={{ color: 'var(--text-1)' }}>
            {report.location}
          </div>
          <div className="text-xs" style={{ color: 'var(--text-3)' }}>
            {report.date}
          </div>
        </div>
        <PriorityBadge priority={report.priority} />
      </div>
      <p className="text-sm" style={{ color: 'var(--text-2)' }}>
        {report.description}
      </p>
    </div>
  )
}

function MapFallback() {
  return (
    <div className="card flex items-center justify-center" style={{ height: 400 }}>
      <div className="text-center">
        <div
          className="w-6 h-6 rounded-full border border-current border-t-transparent animate-spin mx-auto mb-3"
          style={{ color: 'var(--text-3)' }}
        />
        <p className="text-sm" style={{ color: 'var(--text-3)' }}>
          Loading map...
        </p>
      </div>
    </div>
  )
}

export default function IssueDetail() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  // Get params from URL (e.g., ?type=water-supply&region=mumbai)
  const issueType = searchParams.get('type') || 'water-supply'
  const region = searchParams.get('region') || 'mumbai'

  // In a real app, you'd fetch this based on params
  const issue = MOCK_ISSUE

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: issue.type },
    { label: issue.region },
  ]

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">

        {/* ── Back Button ── */}
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 mb-6 px-3 py-2 rounded-lg transition-colors"
          style={{ color: 'var(--text-2)', background: 'var(--bg-2)' }}
        >
          <FiArrowLeft size={18} />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </button>

        {/* ── Breadcrumbs ── */}
        <Breadcrumbs items={breadcrumbs} />

        {/* ── Header Section ── */}
        <div className="card p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2" style={{ color: 'var(--text-1)' }}>
                {issue.type}
              </h1>
              <p className="text-base mb-4" style={{ color: 'var(--text-2)' }}>
                {issue.description}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <PriorityBadge priority={issue.priority} />
                <span
                  className="px-3 py-1 rounded-lg text-sm font-medium"
                  style={{ background: 'var(--bg-2)', color: 'var(--text-2)' }}
                >
                  {issue.region}, {issue.country}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium" style={{ color: 'var(--text-3)' }}>
                Last Updated
              </div>
              <div className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>
                {issue.lastUpdated}
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="card p-4">
            <StatItem
              label="Total Reports"
              value={issue.reportCount.toLocaleString()}
              icon={FiMessageCircle}
            />
          </div>
          <div className="card p-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--bg-2)' }}
              >
                <TrendIcon trend={issue.trend} />
              </div>
              <div>
                <div className="text-sm" style={{ color: 'var(--text-3)' }}>
                  Trend
                </div>
                <div className="text-lg font-bold" style={{ color: 'var(--text-1)' }}>
                  {issue.trendValue}
                </div>
                <div className="text-xs" style={{ color: 'var(--text-3)' }}>
                  {issue.trend === 'up' ? 'Increasing' : 'Decreasing'} over 7 days
                </div>
              </div>
            </div>
          </div>
          <div className="card p-4">
            <StatItem
              label="Current Status"
              value={issue.status}
              icon={FiCheckCircle}
            />
          </div>
        </div>

        {/* ── Status Timeline ── */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-1)' }}>
            Issue Resolution Timeline
          </h2>
          <IssueStatusTimeline status={issue.status} />
        </div>

        {/* ── Map Section ── */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ color: 'var(--text-1)' }}>
            <FiMap size={20} />
            Report Locations
          </h2>
          <p className="text-sm mb-4" style={{ color: 'var(--text-3)' }}>
            Click pins to see report details and urgency levels
          </p>
          <MapErrorBoundary>
            <Suspense fallback={<MapFallback />}>
              <HeatMap points={issue.mapPoints} showClusters height="400px" />
            </Suspense>
          </MapErrorBoundary>
          <div className="mt-4 p-3 rounded-lg" style={{ background: 'var(--bg-2)' }}>
            <div className="flex flex-wrap gap-4 text-xs" style={{ color: 'var(--text-2)' }}>
              <span className="font-medium">Pin Priority Level:</span>
              {[
                { label: 'Critical (9-10)', color: '#dc2626' },
                { label: 'High (7-8)', color: '#d97706' },
                { label: 'Medium (4-6)', color: '#2563eb' },
                { label: 'Low (1-3)', color: '#16a34a' },
              ].map(({ label, color }) => (
                <span key={label} className="flex items-center gap-1.5">
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: color,
                      display: 'inline-block',
                    }}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Recent Reports Section ── */}
        <div className="card p-6 mb-6">
          <h2
            className="text-lg font-semibold mb-4 flex items-center gap-2"
            style={{ color: 'var(--text-1)' }}
          >
            <FiAlertTriangle size={20} />
            Recent Reports ({issue.recentReports.length})
          </h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {issue.recentReports.map(report => (
              <ReportCard key={report.id} report={report} />
            ))}
          </div>
        </div>

        {/* ── Related Project Section ── */}
        {issue.relatedProject && (
          <div className="card p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-1)' }}>
              Related Project
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="font-semibold mb-1" style={{ color: 'var(--text-1)' }}>
                  {issue.relatedProject.name}
                </h3>
                <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
                  <span
                    className="px-2 py-1 rounded"
                    style={{
                      background: 'var(--bg-2)',
                      color: 'var(--text-1)',
                    }}
                  >
                    {issue.relatedProject.status}
                  </span>
                  <span>Completion: {issue.relatedProject.completionDate}</span>
                </div>
              </div>
              <Link
                to={'/projects'}
                className="btn-secondary flex items-center gap-2 flex-shrink-0"
              >
                View Project <FiArrowRight size={16} />
              </Link>
            </div>
          </div>
        )}

        {/* ── Action Buttons ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <button className="btn-primary" style={{ justifyContent: 'center' }}>
            <FiArrowRight size={18} />
            Report Similar Issue
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate('/dashboard')}
            style={{ justifyContent: 'center' }}
          >
            View All Issues
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate('/dashboard')}
            style={{ justifyContent: 'center' }}
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}
