import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

const AddAdmin: React.FC = () => {
  const [formData, setFormData] = useState({
    admin_business_name: '',
    admin_business_address: '',
    admin_business_city: '',
    admin_admin_name: '',
    admin_admin_username: '',
    admin_admin_email: '',
    admin_admin_password: '',
    admin_admin_password_confirm: '',
    admin_threshold_percentage: '',
    admin_last_n_reviews: ''
  });

  const [adminMessage, setAdminMessage] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/add_admin', formData);
      const data = response.data;
      if (data) {
        setAdminMessage(data);
      }
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
      } else {
        setAdminMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <h2>Add Admin</h2>
      <label htmlFor="admin_business_name">Business Name:</label>
      <input
        type="text"
        id="admin_business_name"
        name="admin_business_name"
        value={formData.admin_business_name}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_business_address">Business Address:</label>
      <input
        type="text"
        id="admin_business_address"
        name="admin_business_address"
        value={formData.admin_business_address}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_business_city">Business City:</label>
      <input
        type="text"
        id="admin_business_city"
        name="admin_business_city"
        value={formData.admin_business_city}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_admin_name">Admin Name:</label>
      <input
        type="text"
        id="admin_admin_name"
        name="admin_admin_name"
        value={formData.admin_admin_name}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_admin_username">Admin Username:</label>
      <input
        type="text"
        id="admin_admin_username"
        name="admin_admin_username"
        value={formData.admin_admin_username}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_admin_email">Admin Email:</label>
      <input
        type="text"
        id="admin_admin_email"
        name="admin_admin_email"
        value={formData.admin_admin_email}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_admin_password">Admin Password:</label>
      <input
        type="password"
        id="admin_admin_password"
        name="admin_admin_password"
        value={formData.admin_admin_password}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_admin_password_confirm">Confirm Admin Password:</label>
      <input
        type="password"
        id="admin_admin_password_confirm"
        name="admin_admin_password_confirm"
        value={formData.admin_admin_password_confirm}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_threshold_percentage">Threshold Percentage:</label>
      <input
        type="number"
        id="admin_threshold_percentage"
        name="admin_threshold_percentage"
        value={formData.admin_threshold_percentage}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="admin_last_n_reviews">Last N Reviews:</label>
      <input
        type="number"
        id="admin_last_n_reviews"
        name="admin_last_n_reviews"
        value={formData.admin_last_n_reviews}
        onChange={handleInputChange}
      /><br /><br />
      <input type="submit" value="Add Admin" />
      
      {adminMessage && (
        <div id="admin-message-container">
          <p id="admin-message">{adminMessage}</p>
        </div>
      )}
    </form>
  );
};

export default AddAdmin;
