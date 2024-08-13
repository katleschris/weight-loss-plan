import React, { useState } from 'react';

const DailySchedule = () => {
  const [customActivities, setCustomActivities] = useState({});

  const handleInputChange = (timeSlot, event) => {
    setCustomActivities({
      ...customActivities,
      [timeSlot]: event.target.value,
    });
  };

  const schedule = [
    { time: '04:00 AM - (15 min)', activity: 'Wake up and drink a glass of water with lime (250 ml)' },
    { time: '04:15 AM - (30 min)', activity: 'Breakfast' },
    { time: '04:45 AM - 07:00 AM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '07:00 AM - (10 min)', activity: 'Snack' },
    { time: '07:10 AM - 10:00 AM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '10:00 AM - (05 min)', activity: 'Drink water (500 ml)' },
    { time: '10:05 AM - 12:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '12:00 PM - (30 min)', activity: 'Lunch' },
    { time: '12:30 PM - 03:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '03:00 PM - (15 min)', activity: 'Leave work' },
    { time: '03:15 PM - (01 min)', activity: 'Snack' },
    { time: '03:16 PM - 03:30 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '03:30 PM - ( 1 hr)', activity: 'Workout (Cardio + Strength Training)' },
    { time: '04:30 PM - (30 min)', activity: 'Cool down and stretch' },
    { time: '05:00 PM - 06:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '06:00 PM - (30 min)', activity: 'Dinner' },
    { time: '06:30 PM - 08:00 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '08:00 PM - (05 min)', activity: 'Drink water (500 ml)' },
    { time: '08:05 PM - 08:30 PM', activity: 'Unplanned Time' }, // Added unplanned time
    { time: '08:30 PM - (30 min)', activity: 'Prepare for learners licence' },
    { time: '09:00 PM - (30 min)', activity: 'Prepare for bed and sleep' },
    { time: '09:30 PM - 04:00 AM', activity: 'Unplanned Time' }, // Added unplanned time
  ];

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '0 auto', padding: '10px' }}>
      <h2>Daily Schedule</h2>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {schedule.map((item, index) => (
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

export default DailySchedule;
