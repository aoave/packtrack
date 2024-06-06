// src/components/Tracker.js
import React, { useState } from 'react';
import './Tracker.css';

const Tracker = () => {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]);
      setInput('');
    }
  };

  return (
    <div className="tracker">
      <h2>Item Tracker</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          id="itemInput"  // Add id attribute
          name="itemInput"  // Add name attribute
        />
        <div className="input-group-append">
          <button className="btn btn-primary" onClick={addItem}>Add Item</button>
        </div>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tracker;
