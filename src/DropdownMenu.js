import React, { useState } from 'react';

const DropdownMenu = ({ onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-menu">
      <button className="menu-button" onClick={toggleMenu}>
        &#x22EE;
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <p onClick={onEdit}>Edit</p>
          <p onClick={onDelete}>Delete</p>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
