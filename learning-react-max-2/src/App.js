import AddItem from "./components/AddItem/AddGoal"
import Goals from "./components/Items/Goals"
import { useState } from "react";

const App = () => {

  const [goals, setGoals] = useState([
    { id: "0", text: "first" },
    { id: "1", text: "second" }
  ]);

  const addNewGoalHandler = (goal) => {
    setGoals(prevGoals => ([
      ...prevGoals,
      goal
    ]))
  }
  const removeGoalHandler = (goalId) => {
    setGoals(prevGoals => {
      const newGoals = prevGoals.filter(goal => goal.id !== goalId);
      return newGoals;
    })
  }
  return (
    <div>
      <AddItem onAddingNewGoal={addNewGoalHandler} />
      <Goals goals={goals}
        removeGoalHandler={removeGoalHandler}
      />
    </div>
  );
}

export default App;