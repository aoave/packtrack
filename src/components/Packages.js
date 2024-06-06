// src/components/Packages.js
import React from 'react';
import './Packages.css';
import { ProgressBar } from 'react-bootstrap';

const dummyPackages = [
  { id: 1, name: 'Amazon', status: 'Arrives today', progress: 100 },
  { id: 2, name: 'Atsuko', status: 'Ready to ship', progress: 20 },
  { id: 3, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 4, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 5, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 6, name: 'Amazon', status: 'In transit', progress: 50 },
];

const Packages = () => {
  return (
    <div className="packages">
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search" />
      </div>
      <button className="btn btn-primary">+ Add orders</button>
      <button className="btn btn-secondary">Archived orders</button>
      {dummyPackages.map(pkg => (
        <div key={pkg.id} className="package-card">
          <img src={`path/to/${pkg.name.toLowerCase()}.png`} alt={`${pkg.name} logo`} className="package-logo" />
          <div className="package-info">
            <h5>{pkg.name}</h5>
            <p>{pkg.status}</p>
            <ProgressBar now={pkg.progress} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Packages;
