import React, { useState } from 'react';
import './Packages.css';
import { ProgressBar } from 'react-bootstrap';
import logo from '../assets/packagelogo.png';

const initialActivePackages = [
  { id: 1, name: 'Amazon', status: 'Arrives today', progress: 100 },
  { id: 2, name: 'Atsuko', status: 'Ready to ship', progress: 20 },
  { id: 3, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 4, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 5, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 6, name: 'Amazon', status: 'In transit', progress: 50 },
];

const archivedPackages = [
  { id: 1, name: 'Amazon', status: 'Delivered', date: 'Jan 26, 2021' },
  { id: 2, name: 'Amazon', status: 'Delivered', date: 'Jan 22, 2021' },
  { id: 3, name: 'Amazon', status: 'Delivered', date: 'Jan 22, 2021' },
  { id: 4, name: 'Amazon', status: 'Delivered', date: 'Jan 15, 2021' },
  { id: 5, name: 'Amazon', status: 'Delivered', date: 'Jan 13, 2021' },
  { id: 6, name: 'Amazon', status: 'Delivered', date: 'Jan 16, 2021' },
];

const Packages = () => {
  const [showArchived, setShowArchived] = useState(false);
  const [activePackages, setActivePackages] = useState(initialActivePackages);
  const [newPackage, setNewPackage] = useState({ name: '', status: '', progress: 0 });
  const [showForm, setShowForm] = useState(false);

  const toggleArchived = () => {
    setShowArchived(!showArchived);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPackage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addNewPackage = () => {
    if (newPackage.name && newPackage.status) {
      setActivePackages((prevPackages) => [
        ...prevPackages,
        { ...newPackage, id: prevPackages.length + 1, progress: Number(newPackage.progress) },
      ]);
      setNewPackage({ name: '', status: '', progress: 0 });
      setShowForm(false);  // Hide the form after adding a new package
    }
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="packages">
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search" id="search" name="search" />
      </div>
      <div className="button-group mb-3">
        <button className="btn btn-primary me-2" onClick={toggleForm}>+ Add orders</button>
        <button className="btn btn-secondary" onClick={toggleArchived}>Archived orders</button>
      </div>
      {showForm && (
        <div className="form-overlay">
          <div className="new-package-form slide-up">
            <div className="form-header">
              <h2>Add Orders</h2>
              <button className="close-btn" onClick={toggleForm}>X</button>
            </div>
            <hr />
            <div className="form-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Package Name"
                name="name"
                value={newPackage.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Status"
                name="status"
                value={newPackage.status}
                onChange={handleInputChange}
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Progress"
                name="progress"
                value={newPackage.progress}
                onChange={handleInputChange}
              />
              <button className="btn btn-success add-package-btn" onClick={addNewPackage}>Add Package</button>
            </div>
          </div>
        </div>
      )}
      <div className={`package-list ${showArchived ? 'slide-in' : ''}`}>
        {showArchived ? (
          archivedPackages.map(pkg => (
            <div key={pkg.id} className="package-card">
              <img src={logo} alt="Package logo" className="package-logo" />
              <div className="package-info">
                <h5>{pkg.name}</h5>
                <p>{pkg.status}</p>
                <p>{pkg.date}</p>
              </div>
            </div>
          ))
        ) : (
          activePackages.map(pkg => (
            <div key={pkg.id} className="package-card">
              <img src={logo} alt="Package logo" className="package-logo" />
              <div className="package-info">
                <h5>{pkg.name}</h5>
                <p>{pkg.status}</p>
                <ProgressBar now={pkg.progress} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Packages;
