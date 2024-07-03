import React, { useState } from 'react';
import formimage from './Assets/fill form.png';

const AddExpenseForm = ({ addExpense }) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && amount) {
      addExpense({ name, amount: parseFloat(amount), category: selectedCategory });
      setName('');
      setAmount('');
      setSelectedCategory('Select Category');
    }
  };

  return (
    <>
      <p className="title">Add Expense Form</p>
      <div className="AddExpenseForm">
        <form onSubmit={handleSubmit}>
          <label className="Expense">With you and: </label>
          <br />
          <input type="text" placeholder="Enter the names, emails, or phone" />
          <br />
          <div className="dropdown">
            <button type="button" className="dropbtn">{selectedCategory}</button>
            <div className="dropdown-content">
              <p onClick={() => setSelectedCategory('Food')}>Food</p>
              <p onClick={() => setSelectedCategory('Stationary')}>Stationary</p>
              <p onClick={() => setSelectedCategory('Clothes')}>Clothes</p>
              <p onClick={() => setSelectedCategory('Electronics')}>Electronics</p>
              <p onClick={() => setSelectedCategory('Other')}>Other</p>
            </div>
          </div>
          <br />
          <label className="Expense">Expense Name: </label>
          <br />
          <input
            placeholder="Expense Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label className="Expense">Write Note </label>
          <br />
          <textarea placeholder="Enter a description" />
          <br />
          <label className="Expense">Amount: </label>
          <br />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <br />
          <div className="divforbtn">
            <button type="submit" className="addExpenseBtn">Add Expense</button>
          </div>
        </form>
        <div className="formimage">
          <img src={formimage} alt="formimage" className="formimageimg" />
        </div>
      </div>
    </>
  );
};

export default AddExpenseForm;
