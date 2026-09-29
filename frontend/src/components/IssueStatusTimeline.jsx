import React from 'react';

/**
 * IssueStatusTimeline Component
 *
 * Displays a horizontal timeline showing the current status of an issue.
 * Shows filled circles (●) for completed stages and empty circles (○) for future stages.
 *
 * @param {string} status - Current status: "Reported", "Under Review", "Planned", "In Progress", or "Complete"
 */
const IssueStatusTimeline = ({ status = 'Reported' }) => {
  const stages = ['Reported', 'Under Review', 'Planned', 'In Progress', 'Complete'];

  // Find the index of the current status
  const currentIndex = stages.indexOf(status);

  /**
   * Determines the color for a stage based on its position relative to current status
   */
  const getStageColor = (index) => {
    if (index < currentIndex) {
      return 'text-green-600'; // Completed: green
    } else if (index === currentIndex) {
      return 'text-accent'; // Current: accent color
    } else {
      return 'text-gray-400'; // Future: gray
    }
  };

  /**
   * Determines if a line connector should be shown in green (completed) or gray (future)
   */
  const getLineColor = (index) => {
    if (index < currentIndex) {
      return 'bg-green-600'; // Completed connector
    } else {
      return 'bg-gray-300'; // Future connector
    }
  };

  return (
    <div className="w-full py-4">
      {/* Desktop view - horizontal timeline */}
      <div className="hidden sm:flex items-center justify-between gap-2">
        {stages.map((stage, index) => (
          <React.Fragment key={stage}>
            {/* Stage circle and label */}
            <div className="flex flex-col items-center flex-1">
              {/* Circle */}
              <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors ${
                index <= currentIndex
                  ? getStageColor(index)
                  : 'border-gray-300 text-gray-300'
              }`}>
                {/* Filled circle for completed/current, empty for future */}
                {index <= currentIndex ? (
                  <span className="text-sm font-bold">●</span>
                ) : (
                  <span className="text-lg leading-none text-gray-300">○</span>
                )}
              </div>

              {/* Label */}
              <p className={`text-xs sm:text-sm mt-2 text-center font-medium transition-colors ${
                index <= currentIndex ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400'
              }`}>
                {stage}
              </p>
            </div>

            {/* Connector line (not after last stage) */}
            {index < stages.length - 1 && (
              <div className={`flex-1 h-1 ${getLineColor(index)} mb-6 transition-colors`} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile view - vertical timeline */}
      <div className="sm:hidden flex flex-col gap-4">
        {stages.map((stage, index) => (
          <React.Fragment key={stage}>
            <div className="flex items-start gap-4">
              {/* Circle and connector */}
              <div className="flex flex-col items-center">
                {/* Circle */}
                <div className={`flex items-center justify-center w-6 h-6 rounded-full border-2 transition-colors ${
                  index <= currentIndex
                    ? getStageColor(index)
                    : 'border-gray-300 text-gray-300'
                }`}>
                  {index <= currentIndex ? (
                    <span className="text-xs font-bold">●</span>
                  ) : (
                    <span className="text-sm leading-none text-gray-300">○</span>
                  )}
                </div>

                {/* Vertical connector (not after last stage) */}
                {index < stages.length - 1 && (
                  <div className={`w-1 h-6 ${getLineColor(index)} mt-2 transition-colors`} />
                )}
              </div>

              {/* Label */}
              <div className="pt-1">
                <p className={`text-sm font-medium transition-colors ${
                  index <= currentIndex ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400'
                }`}>
                  {stage}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default IssueStatusTimeline;
