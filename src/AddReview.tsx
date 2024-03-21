import React, { useState } from 'react';
import axios, { AxiosError } from 'axios';

axios.defaults.baseURL = "http://localhost:3000/";

const AddReview: React.FC = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    business_name: '',
    business_address: '',
    business_city: '',
    stars: '',
    useful: '',
    funny: '',
    cool: '',
    text: ''
  });

  const [reviewMessage, setReviewMessage] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/add_review', formData);
      const { data } = response;
      if (data) {
        setReviewMessage(data);
      }
    } catch (error) {
      console.error('Error:', error);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
      } else {
        setReviewMessage('An error occurred. Please try again.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Review</h2>
      <label htmlFor="user_name">User Name:</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        value={formData.user_name}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="business_name">Business Name:</label>
      <input
        type="text"
        id="business_name"
        name="business_name"
        value={formData.business_name}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="business_address">Business Address:</label>
      <input
        type="text"
        id="business_address"
        name="business_address"
        value={formData.business_address}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="business_city">Business City:</label>
      <input
        type="text"
        id="business_city"
        name="business_city"
        value={formData.business_city}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="stars">Stars:</label>
      <input
        type="number"
        id="stars"
        name="stars"
        value={formData.stars}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="useful">Useful:</label>
      <input
        type="number"
        id="useful"
        name="useful"
        value={formData.useful}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="funny">Funny:</label>
      <input
        type="number"
        id="funny"
        name="funny"
        value={formData.funny}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="cool">Cool:</label>
      <input
        type="number"
        id="cool"
        name="cool"
        value={formData.cool}
        onChange={handleInputChange}
      /><br /><br />

      <label htmlFor="text">Review:</label>
      <input
        type="text"
        id="text"
        name="text"
        value={formData.text}
        onChange={handleInputChange}
      /><br /><br />

      <input type="submit" value="Add Review" />

      <div id="review-message-container">
        <p id="review-message">{reviewMessage}</p>
      </div>
    </form>
  );
};

export default AddReview;
