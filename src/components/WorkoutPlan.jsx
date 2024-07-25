// src/components/WorkoutPlan.jsx
import React from 'react';

const WorkoutPlan = () => (
  <div>
    <h2>Workout Plan</h2>
    <h3>Monday, Wednesday, Friday: Cardio + Upper Body + Core</h3>
    <ul>
      <li><strong>HIIT Cardio:</strong> 20-25 minutes</li>
      <li><strong>Upper Body Exercises:</strong> Push-ups, dumbbell rows, shoulder press</li>
      <li><strong>Core Exercises:</strong> Planks, Russian twists, bicycle crunches</li>
    </ul>
    <h3>Tuesday, Thursday, Saturday: Cardio + Lower Body + Core</h3>
    <ul>
      <li><strong>HIIT Cardio:</strong> 20-25 minutes</li>
      <li><strong>Lower Body Exercises:</strong> Squats (bodyweight or with dumbbells), lunges, calf raises</li>
      <li><strong>Core Exercises:</strong> Leg raises, mountain climbers, flutter kicks</li>
    </ul>
    <h3>Sunday: Active Rest</h3>
    <ul>
      <li>Light activity like walking, yoga, or stretching</li>
    </ul>
  </div>
);

export default WorkoutPlan;
