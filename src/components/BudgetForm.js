import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './BudgetForm.css';

const BudgetForm = ({ addBudget }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount) return;

    const newBudgetEntry = {
      id: uuidv4(),
      description,
      amount: Number(amount),
    };

    addBudget(newBudgetEntry);
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className='budget-form'>
      <input
        type='text'
        placeholder='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='input-field'
      />
      <input
        type='number'
        placeholder='amount'
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className='input-field'
      />
      <button type='submit' className='submit-button'>
        Add Budget Entry
      </button>
    </form>
  );
};

export default BudgetForm;
