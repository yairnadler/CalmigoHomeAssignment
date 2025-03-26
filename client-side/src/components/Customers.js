import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Customers.css';

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    // Filter customers whenever searchTerm changes
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
  }, [searchTerm, customers]);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/customers');
      setCustomers(response.data);
      setFilteredCustomers(response.data);
    } catch (err) {
      setError('Failed to fetch customers');
    }
  };

  const handleSearch = () => {
    const filtered = customers.filter(customer =>
      customer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCustomers(filtered);
  };

  return (
    <div className="customers-container">
      <div className="customers-box">
        <h1>Customer Search</h1>
        
        <div className="search-section">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>

        {error && (
          <div className="error-message">{error}</div>
        )}

        <div className="customers-list">
          {filteredCustomers.map((customer, index) => (
            <div key={customer.customerId} className="customer-item">
              <div className="customer-name">{customer.name}</div>
              <div className="customer-details">
                <span>ID: {customer.customerId}</span>
                <span>Phone: {customer.phoneNumber}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers; 