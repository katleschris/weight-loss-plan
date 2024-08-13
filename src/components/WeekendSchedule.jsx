// src/components/WeekendSchedule.jsx
import React, { useState } from 'react';

const WeekendSchedule = () => {
  const [customActivities, setCustomActivities] = useState({});

  const handleInputChange = (timeSlot, event) => {
    setCustomActivities({
      ...customActivities,
      [timeSlot]: event.target.value,
    });
  };

  const weekendSchedule = [
    { time: '07:00 AM - (30 min)', activity: 'Wake up and have breakfast' },
    { time: '07:30 AM - 10:00 AM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '10:00 AM - (30 min)', activity: 'Morning workout' },
    { time: '10:30 AM - 12:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '12:00 PM - (1 hr)', activity: 'Lunch' },
    { time: '01:00 PM - 04:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '04:00 PM - (1 hr)', activity: 'Outdoor activity or relaxation' },
    { time: '05:00 PM - 07:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '07:00 PM - (1 hr)', activity: 'Dinner' },
    { time: '08:00 PM - 10:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '10:00 PM - (30 min)', activity: 'Prepare for bed and sleep' },
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', padding: '10px' }}>
      <h2>Weekend Schedule</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {weekendSchedule.map((item, index) => (
          <li key={index} style={{ display: 'grid', gridTemplateColumns: '170px 1fr', gap: '20px', marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold', fontFamily: 'Courier, monospace', whiteSpace: 'nowrap', textAlign: 'right' }}>
              {item.time.replace(/ /g, '\u00A0')}
            </span>
            {item.activity === 'Unplanned Time' ? (
              <input
                type="text"
                placeholder="Plan your time"
                value={customActivities[item.time] || ''}
                onChange={(e) => handleInputChange(item.time, e)}
                style={{ width: '100%' }}
              />
            ) : (
              <span>{item.activity}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeekendSchedule;
