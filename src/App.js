import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false,
  });

  const [showDetails, setShowDetails] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowDetails(true);
  };

  return (
    <div className="container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder="1234 Main St" value={formData.address} onChange={handleChange} />

        <label htmlFor="address2">Address 2</label>
        <input type="text" id="address2" name="address2" placeholder="Apartment, studio, or floor" value={formData.address2} onChange={handleChange} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" placeholder="City" value={formData.city} onChange={handleChange} />

        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postalCode" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />

        <label htmlFor="province">Province</label>
        <select id="province" name="province" value={formData.province} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="ontario">Ontario</option>
          <option value="quebec">Quebec</option>
          <option value="alberta">Alberta</option>
          <option value="saskatchewan">Saskatchewan</option>
          <option value="manitoba">Manitoba</option>
          <option value="new brunswick">New Brunswick</option>
          <option value="prince edward island">Prince Edward Island</option>
          <option value="nova scotia">Nova Scotia</option>
          <option value="new foundland">New Foundland</option>
          <option value="british columbia">British Columbia</option>
        </select>

        <label>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} /> Agree Terms & Condition?
        </label>

        <button type="submit">Submit</button>
      </form>

      {showDetails && (
        <div className="details-container">
          <h3>Entered Details</h3>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Address:</strong> {formData.address}</p>
          <p><strong>Address 2:</strong> {formData.address2}</p>
          <p><strong>City:</strong> {formData.city}</p>
          <p><strong>Province:</strong> {formData.province}</p>
          <p><strong>Postal Code:</strong> {formData.postalCode}</p>
          <p><strong>Terms Accepted:</strong> {formData.terms ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default App;




