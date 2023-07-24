import React from 'react';
import './BudgetList.css';

const BudgetList = ({ budgetEntries }) => {
  return (
    <div className='budget-list'>
      {budgetEntries.map((entry) => (
        <div key={entry.id} className='budget-item'>
          {entry.description && <p>Description: {entry.description}</p>}
          {entry.amount && <p>Amount: ${entry.amount.toFixed(2)}</p>}
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
