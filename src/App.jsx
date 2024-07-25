// src/App.jsx
import React, { useState } from 'react';
import DailySchedule from './components/DailySchedule';
import WorkoutPlan from './components/WorkoutPlan';
import MealPlan from './components/MealPlan';
import Hydration from './components/Hydration';
import Tips from './components/Tips';
import GroceryList from './components/GroceryList';
import './App.css';

const App = () => {
  const [section, setSection] = useState('DailySchedule');

  const renderSection = () => {
    switch (section) {
      case 'DailySchedule':
        return <DailySchedule />;
      case 'WorkoutPlan':
        return <WorkoutPlan />;
      case 'MealPlan':
        return <MealPlan />;
      case 'Hydration':
        return <Hydration />;
      case 'Tips':
        return <Tips />;
      case 'GroceryList':
        return <GroceryList />;
      default:
        return <DailySchedule />;
    }
  };

  return (
    <div className="app">
      <nav>
        <button onClick={() => setSection('DailySchedule')}>Daily Schedule</button>
        <button onClick={() => setSection('WorkoutPlan')}>Workout Plan</button>
        <button onClick={() => setSection('MealPlan')}>Meal Plan</button>
        <button onClick={() => setSection('Hydration')}>Hydration</button>
        <button onClick={() => setSection('Tips')}>Tips</button>
        <button onClick={() => setSection('GroceryList')}>Grocery List</button>
      </nav>
      <main>{renderSection()}</main>
    </div>
  );
};

export default App;

