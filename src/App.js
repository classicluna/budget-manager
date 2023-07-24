import React, { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';
import './App.css';

function App() {
  const [budgetEntries, setBudgetEntries] = useState([]);
  const [totalBudget, setTotalBudget] = useState(0);
  const [numPlaceHolder, setNumPlaceHolder] = useState(0);

  const addBudgetEntry = (entry) => {
    setBudgetEntries([...budgetEntries, entry]);
    setTotalBudget(totalBudget - entry.amount);
  };

  const handleChange = (e) => {
    setNumPlaceHolder(e.target.value);
  };

  const handleClick = () => {
    setTotalBudget(numPlaceHolder);
  };
  return (
    <div className='container'>
      <h1>Personal Budget Manager</h1>
      <input
        type='number'
        value={numPlaceHolder}
        onChange={handleChange}
        placeholder='Enter New Budget'
      />
      <button onClick={handleClick}>Update Budget</button>
      <p className='total-budget'>
        Total Budget Remaining: ${Number(totalBudget).toFixed(2)}
      </p>
      <BudgetForm addBudget={addBudgetEntry} />
      <BudgetList budgetEntries={budgetEntries} />
    </div>
  );
}

export default App;
