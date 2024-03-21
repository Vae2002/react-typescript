import React, { useState } from 'react';
import axios from 'axios';

const Notification: React.FC = () => {
  const [formData, setFormData] = useState({
    admin_username: '',
    admin_password: ''
  });

  const [messages, setMessages] = useState({
    error_message: '',
    notification_message: ''
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/start_stop_notification', formData);
      setMessages(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Get Notification</h2>
        <label htmlFor="admin_username">User Name:</label>
        <input
          type="text"
          id="admin_username"
          name="admin_username"
          value={formData.admin_username}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="admin_password">Password:</label>
        <input
          type="password"
          id="admin_password"
          name="admin_password"
          value={formData.admin_password}
          onChange={handleInputChange}
        /><br /><br />
        
        <input type="submit" value="Start Notification" name="Start" />
        <input type="submit" value="Stop Notification" name="Stop" />
      </form>

      {messages.error_message ? <p>Error: {messages.error_message}</p> : <p>{messages.notification_message}</p>}
    </div>
  );
};

export default Notification;
