import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Goal from './components/Goal';
import AddGoal from './components/AddGoal';

const App = () => {

  const [goals, setGoals] = useState([]);

  const addGoal = goal => {
    const newGoals = [
      ...goals, 
      goal
    ];
    console.log(newGoals);

    setGoals(newGoals);
  }


  return(
    <div className="goal-container">
      <div className="header">
        <h1>{new Date().toDateString()}</h1>
    
      </div>
      <div className="goal-list">
        {goals.map((goal, index) => (
          <Goal
            goal={goal}
            key={index}
          />
        ))}
      </div>
      <div className="add-goal">
        <AddGoal addGoal={addGoal} />
      </div>
    </div>
  );
};

export default App;
