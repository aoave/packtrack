import React, { useState } from 'react'; // Import React and useState hook
import './Packages.css'; // Import component-specific CSS
import { ProgressBar } from 'react-bootstrap'; // Import ProgressBar component from react-bootstrap
import logo from '../assets/packagelogo.png'; // Import package logo image

// Initial active packages data
const initialActivePackages = [
  { id: 1, name: 'Amazon', status: 'Arrives today', progress: 100 },
  { id: 2, name: 'Atsuko', status: 'Ready to ship', progress: 20 },
  { id: 3, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 4, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 5, name: 'Amazon', status: 'In transit', progress: 50 },
  { id: 6, name: 'Amazon', status: 'In transit', progress: 50 },
];

// Initial archived packages data
const archivedPackages = [
  { id: 1, name: 'Amazon', status: 'Delivered', date: 'Jan 26, 2021' },
  { id: 2, name: 'Amazon', status: 'Delivered', date: 'Jan 22, 2021' },
  { id: 3, name: 'Amazon', status: 'Delivered', date: 'Jan 22, 2021' },
  { id: 4, name: 'Amazon', status: 'Delivered', date: 'Jan 15, 2021' },
  { id: 5, name: 'Amazon', status: 'Delivered', date: 'Jan 13, 2021' },
  { id: 6, name: 'Amazon', status: 'Delivered', date: 'Jan 16, 2021' },
];

const Packages = () => {
  // State to toggle between active and archived packages
  const [showArchived, setShowArchived] = useState(false);
  // State to manage active packages
  const [activePackages, setActivePackages] = useState(initialActivePackages); 
  // State to manage new package form inputs
  const [newPackage, setNewPackage] = useState({ name: '', status: '', progress: 0 }); 
  // State to show/hide the form for adding new packages
  const [showForm, setShowForm] = useState(false); 

  // Toggle the visibility of archived packages
  const toggleArchived = () => {
    setShowArchived(!showArchived);
  };

  // Handle input change in the new package form
  // event object parameter e
  const handleInputChange = (e) => {
    //grab name and value from the target input
    const { name, value } = e.target;
    //updates the state of the "new package" form
    setNewPackage((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Add new package to the list of active packages
  const addNewPackage = () => {
    //checks for both name and status properties before adding a new package
    if (newPackage.name && newPackage.status) {
      setActivePackages((prevPackages) => [
        ...prevPackages,
        { ...newPackage, id: prevPackages.length + 1, progress: Number(newPackage.progress) },
      ]);
      setNewPackage({ name: '', status: '', progress: 0 }); // Reset the form
      setShowForm(false); // Hide the form after adding a new package
    }
  };

  // Toggle the visibility of the add package form
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="packages">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" className="form-control" placeholder="Search" id="search" name="search" />
      </div>
      {/* Buttons to toggle form and archived packages */}
      <div className="button-group mb-3">
        <button className="btn btn-primary me-2" onClick={toggleForm}>+ Add orders</button>
        <button className="btn btn-secondary" onClick={toggleArchived}>
          {showArchived ? 'Active orders' : 'Archived orders'}
        </button>
      </div>
      {/* Form for adding new packages */}
      {showForm && (
        <div className="form-overlay">
          <div className={`new-package-form ${showForm ? 'slide-up' : ''}`}>
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
                placeholder="Progress Percentage"
                name="progress"
                value={newPackage.progress}
                onChange={handleInputChange}
              />
              <button className="btn btn-success add-package-btn" onClick={addNewPackage}>Add Package</button>
            </div>
          </div>
        </div>
      )}
      {/* Package List */}
      <div className={`package-list ${showArchived ? 'slide-in' : ''}`}>
        {/* Conditionally check if archived packages should be displayed, if active map pkg data */}
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
