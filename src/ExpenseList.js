import React, { useState } from 'react';
import DropdownMenu from './DropdownMenu';

const ExpenseList = ({ expenses, deleteExpense, editExpense }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const startEditing = (index) => {
    const expense = expenses[index];
    setEditingIndex(index);
    setName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
  };

  const handleEdit = (index) => {
    editExpense(index, { name, amount, category });
    setEditingIndex(null);
    setName('');
    setAmount('');
    setCategory('');
  };

  return (
    <div className="ExpenseListdiv">
      <h2 className="title">Expense List</h2>
      <table className="expense-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Expense Name</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              {editingIndex === index ? (
                <>
                  <td>{index + 1}</td>
                  <td>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </td>
                  <td>{expense.time}</td>
                  <td>
                    <input
                      type="text"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Save</button>
                    <button onClick={() => setEditingIndex(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{index + 1}</td>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.time}</td>
                  <td>{expense.category}</td>
                  <td>
                    <DropdownMenu
                      onEdit={() => startEditing(index)}
                      onDelete={() => deleteExpense(index)}
                    />
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
