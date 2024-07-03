import './App.css';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';
import React, { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const now = new Date();
    const expenseWithTime = {
      ...expense,
      time: now.toLocaleTimeString(),
      category: expense.category || 'N/A',
    };
    setExpenses([...expenses, expenseWithTime]);
  };

  const deleteExpense = (index) => {
    const newExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(newExpenses);
  };

  const editExpense = (index, updatedExpense) => {
    const newExpenses = expenses.map((expense, i) =>
      i === index ? { ...expense, ...updatedExpense } : expense
    );
    setExpenses(newExpenses);
  };
  return (
    <div className="App">
      <Navbar/>
      <div id="home" className="section">
      <HeroSection/>
      </div>
      <div className="RestSite">
      <div id="add-expense" className="section">
        <AddExpenseForm  addExpense={addExpense} />
      </div>
      <div id="expense-list" className="section">
      <ExpenseList  expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense}  />
      </div>
      </div>
    </div>
  );
}

export default App;
