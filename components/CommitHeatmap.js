import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';

const CommitHeatmap = () => {
  const today = new Date();
  const values = [
    { date: '2024-09-01', count: 4 },
    { date: '2024-09-02', count: 7 },
    // Add more data for each date
  ];

  return (
    <div className="heatmap-container">
      <h2>Commit Activity</h2>
      <CalendarHeatmap
        startDate={new Date(today.getFullYear(), today.getMonth() - 11, 1)}
        endDate={today}
        values={values}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
      />
    </div>
  );
};

export default CommitHeatmap;
