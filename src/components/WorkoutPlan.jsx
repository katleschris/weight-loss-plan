import React from 'react';
import './WorkoutPlan.css'; // Import the CSS file

const Cardio = ({ duration }) => (
  <li>
    <strong>HIIT Cardio:</strong> {duration} minutes
    <ul>
      <li>Warm-up: 5 minutes of light jogging or brisk walking</li>
      <li>Intervals: 30 seconds sprint/1 minute walk or jog (repeat for {duration - 10} minutes)</li>
      <li>Cool down: 5 minutes of walking and stretching</li>
    </ul>
  </li>
);

const Exercises = ({ title, exercises }) => (
  <li>
    <strong>{title} Exercises:</strong>
    <ul>
      {exercises.map((exercise, index) => (
        <li key={index}>{exercise}</li>
      ))}
    </ul>
  </li>
);

const CoreExercises = ({ exercises }) => (
  <li>
    <strong>Core Exercises:</strong>
    <ul>
      {exercises.map((exercise, index) => (
        <li key={index}>{exercise}</li>
      ))}
    </ul>
  </li>
);

const WorkoutDay = ({ day, activities }) => (
  <div>
    <h3>{day}</h3>
    <ul>
      {activities.map((activity, index) => (
        <React.Fragment key={index}>{activity}</React.Fragment>
      ))}
    </ul>
  </div>
);

const WorkoutPlan = () => {
  const upperBodyExercises = [
    "Push-ups: 3 sets of 10-15 reps (knees or standard)",
    "Dumbbell Rows: 3 sets of 12 reps per arm",
    "Shoulder Press: 3 sets of 12 reps",
    "Optional: Bicep Curls, Tricep Dips (2 sets of 12-15 reps each)"
  ];

  const lowerBodyExercises = [
    "Squats (bodyweight or with dumbbells): 3 sets of 15 reps",
    "Lunges: 3 sets of 12 reps per leg",
    "Calf Raises: 3 sets of 15-20 reps",
    "Optional: Glute Bridges, Step-Ups (2 sets of 15 reps each)"
  ];

  const coreExercisesUpper = [
    "Planks: 3 sets of 30-60 seconds",
    "Russian Twists: 3 sets of 20 twists (10 per side)",
    "Bicycle Crunches: 3 sets of 20 reps (10 per side)"
  ];

  const coreExercisesLower = [
    "Leg Raises: 3 sets of 15 reps",
    "Mountain Climbers: 3 sets of 20 reps (10 per side)",
    "Flutter Kicks: 3 sets of 20 reps"
  ];

  return (
    <div className="workout-plan">
      <h2>Workout Plan</h2>
      <WorkoutDay 
        day="Monday, Wednesday, Friday: Cardio + Upper Body + Core"
        activities={[
          <Cardio duration={25} />,
          <Exercises title="Upper Body" exercises={upperBodyExercises} />,
          <CoreExercises exercises={coreExercisesUpper} />
        ]}
      />
      <WorkoutDay 
        day="Tuesday, Thursday, Saturday: Cardio + Lower Body + Core"
        activities={[
          <Cardio duration={25} />,
          <Exercises title="Lower Body" exercises={lowerBodyExercises} />,
          <CoreExercises exercises={coreExercisesLower} />
        ]}
      />
      <WorkoutDay 
        day="Sunday: Active Rest"
        activities={[
          <li>Light activity like walking, yoga, or stretching</li>
        ]}
      />
    </div>
  );
};

export default WorkoutPlan;
