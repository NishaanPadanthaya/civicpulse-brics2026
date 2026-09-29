import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'

/**
 * Breadcrumb navigation component
 * @param {Array} items - Array of breadcrumb items: [{ label, path }, { label } for current]
 */
export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-1 text-sm">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1

          return (
            <li key={idx} className="flex items-center gap-1">
              {/* Breadcrumb item */}
              {item.path ? (
                <Link
                  to={item.path}
                  className="px-2 py-1 rounded-md transition-colors hover:bg-[var(--bg-hover)]"
                  style={{ color: 'var(--text-2)' }}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className="px-2 py-1 rounded-md"
                  style={{ color: 'var(--text-1)', fontWeight: isLast ? '500' : 'normal' }}>
                  {item.label}
                </span>
              )}

              {/* Separator */}
              {!isLast && (
                <FiChevronRight
                  size={16}
                  className="flex-shrink-0"
                  style={{ color: 'var(--text-3)' }} />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
