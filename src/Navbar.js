import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return ( 
    <nav className="navbar">
      <h1 className="logo">SpendTrend</h1>
      <ul className={`sectionNames ${menuOpen ? 'open' : ''}`}>
        <li className='sectionLinks' onClick={() => scrollToSection('home')}>Home</li>
        <li className='sectionLinks' onClick={() => scrollToSection('add-expense')}>Add Expenses Form</li>
        <li className='sectionLinks' onClick={() => scrollToSection('expense-list')}>Expense List</li>
        <li className='sectionLinks'>Contact Us</li>
        <li className='sectionLinks'>User</li>
      </ul>
    </nav>
  );
};

export default Navbar;
