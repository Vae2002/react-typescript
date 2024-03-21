// import React, { useState } from 'react';
// import axios, { AxiosError } from 'axios';

// interface Review {
//   // Define the structure of a review object
//   // Adjust the fields as per your actual review object structure
//   _id: string;
//   business_id: string;
//   date: string;
//   // Add more fields as needed
// }

// const ShowReports: React.FC = () => {
//   const [formData, setFormData] = useState({
//     report_admin_username: '',
//     report_admin_password: '',
//     month: '',
//     year: new Date().getFullYear().toString()
//   });

//   const [messages, setMessages] = useState({
//     error_message_admin: '',
//     no_review_message: ''
//   });

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   //   event.preventDefault();
//   //   try {
//   //     const response = await axios.post('/show_reports', formData);
//   //     console.log(response.data)
//   //   } catch (error) {
//   //     console.error('Error:', error);
//   //   }
//   // };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('/show_reports', formData);
//       const data = response.data;

//       if ('error_message_admin' in data) {
//         setMessages(data);
//       } else if ('no_review_message' in data) {
//         setMessages(data);
//       } else if ('recent_reviews' in data) {
//         setMessages(data);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       if (axios.isAxiosError(error)) {
//         const axiosError = error as AxiosError;
//         // Handle Axios error
//       } else {
//         // Handle other errors
//       }
//     }
//   };
  
// //   return (
// //     <div>
// //       <form onSubmit={handleSubmit}>
// //         <h2>Get Monthly Reports</h2>
// //         <label htmlFor="report_admin_username">User Name:</label>
// //         <input
// //           type="text"
// //           id="report_admin_username"
// //           name="report_admin_username"
// //           value={formData.report_admin_username}
// //           onChange={handleInputChange}
// //         /><br /><br />

// //         <label htmlFor="report_admin_password">Password:</label>
// //         <input
// //           type="password"
// //           id="report_admin_password"
// //           name="report_admin_password"
// //           value={formData.report_admin_password}
// //           onChange={handleInputChange}
// //         /><br /><br />
        
// //         <label htmlFor="month">Month:</label>
// //         <select
// //           name="month"
// //           id="month"
// //           value={formData.month}
// //           onChange={handleInputChange}
// //         >
// //           <option>January</option>
// //           <option>February</option>
// //           <option>March</option>
// //           <option>April</option>
// //           <option>May</option>
// //           <option>June</option>
// //           <option>July</option>
// //           <option>August</option>
// //           <option>September</option>
// //           <option>October</option>
// //           <option>November</option>
// //           <option>December</option>
// //         </select><br /><br />
        
// //         <label htmlFor="year">Year:</label>
// //         <select
// //           name="year"
// //           id="year"
// //           value={formData.year}
// //           onChange={handleInputChange}
// //         >
// //           {[...Array(10)].map((_, i) => (
// //             <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>
// //           ))}
// //         </select><br /><br />

// //         <input type="submit" value="Get Reports" />
// //       </form>

// //       {messages.error_message_admin ? <p>Error: {messages.error_message_admin}</p> : <p>{messages.no_review_message}</p>}
// //     </div>
// //   );
// // };

// // export default ShowReports;

// return (
//   <div>
//     <form onSubmit={handleSubmit}>
//       <h2>Get Monthly Reports</h2>
//       <label htmlFor="report_admin_username">User Name:</label>
//       <input
//         type="text"
//         id="report_admin_username"
//         name="report_admin_username"
//         value={formData.report_admin_username}
//         onChange={handleInputChange}
//       /><br /><br />

//       <label htmlFor="report_admin_password">Password:</label>
//       <input
//         type="password"
//         id="report_admin_password"
//         name="report_admin_password"
//         value={formData.report_admin_password}
//         onChange={handleInputChange}
//       /><br /><br />
      
//       <label htmlFor="month">Month:</label>
//       <select
//         name="month"
//         id="month"
//         value={formData.month}
//         onChange={handleInputChange}
//       >
//         <option>January</option>
//         <option>February</option>
//         <option>March</option>
//         <option>April</option>
//         <option>May</option>
//         <option>June</option>
//         <option>July</option>
//         <option>August</option>
//         <option>September</option>
//         <option>October</option>
//         <option>November</option>
//         <option>December</option>
//       </select><br /><br />
      
//       <label htmlFor="year">Year:</label>
//       <select
//         name="year"
//         id="year"
//         value={formData.year}
//         onChange={handleInputChange}
//       >
//         {[...Array(10)].map((_, i) => (
//           <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>
//         ))}
//       </select><br /><br />

//       <input type="submit" value="Get Reports" />
//     </form>

//     {messages.error_message_admin && <p>Error: {messages.error_message_admin}</p>}
//     {messages.no_review_message && <p>{messages.no_review_message}</p>}
//     {messages.recent_reviews.length > 0 && (
//       <div>
//         <h2>Recent Reviews</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Review ID</th>
//               <th>Date</th>
//               {/* Add more table headers as needed */}
//             </tr>
//           </thead>
//           <tbody>
//             {messages.recent_reviews.map((review) => (
//               <tr key={review._id}>
//                 <td>{review._id}</td>
//                 <td>{review.date}</td>
//                 {/* Add more table cells for other review fields */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     )}
//   </div>
// );
// };

// export default ShowReports;







import React, { useState } from 'react';
import axios from 'axios';
import ReportTable from './components/ReportTable';

interface Review {
  _id: string;
  review_id: string;
  date: string;
  stars: number;
  cool: number;
  funny: number;
  useful: number;
  text: string;
}

interface Messages {
  error_message_admin: string;
  no_review_message: string;
  recent_reviews: Review[];
}

const ShowReports: React.FC<{ recentReviews: Review[] }> = ({ recentReviews }) => {
  const [formData, setFormData] = useState({
    report_admin_username: '',
    report_admin_password: '',
    month: '',
    year: new Date().getFullYear().toString()
  });

  const [messages, setMessages] = useState<Messages>({
    error_message_admin: '',
    no_review_message: '',
    recent_reviews: []  
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post('/show_reports', formData);
      const data = response.data;

      if ('error_message_admin' in data) {
        setMessages(data);
      } else if ('no_review_message' in data) {
        setMessages(data);
      } else if ('recent_reviews' in data) {
        setMessages(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };  


  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Get Monthly Reports</h2>
        <label htmlFor="report_admin_username">User Name:</label>
        <input
          type="text"
          id="report_admin_username"
          name="report_admin_username"
          value={formData.report_admin_username}
          onChange={handleInputChange}
        /><br /><br />

        <label htmlFor="report_admin_password">Password:</label>
        <input
          type="password"
          id="report_admin_password"
          name="report_admin_password"
          value={formData.report_admin_password}
          onChange={handleInputChange}
        /><br /><br />
        
        <label htmlFor="month">Month:</label>
        <select
          name="month"
          id="month"
          value={formData.month}
          onChange={handleInputChange}
        >
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select><br /><br />
        
        <label htmlFor="year">Year:</label>
        <select
          name="year"
          id="year"
          value={formData.year}
          onChange={handleInputChange}
        >
          {[...Array(10)].map((_, i) => (
            <option key={i} value={new Date().getFullYear() - i}>{new Date().getFullYear() - i}</option>
          ))}
        </select><br /><br />

        <input type="submit" value="Get Reports" />
      </form>

      {messages.error_message_admin && <p>Error: {messages.error_message_admin}</p>}
      {messages.no_review_message && <p>{messages.no_review_message}</p>}
      {messages.recent_reviews.length > 0 && (
        <div>
          <h2>Recent Reviews</h2>
          <ReportTable recentReviews={recentReviews} />
          {/* <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Review ID</th>
                <th>Stars</th>
                <th>Cool</th>
                <th>Funny</th>
                <th>Useful</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {messages.recent_reviews.map((review) => (
                <tr key={review._id}>
                  <td>{review.date}</td>
                  <td>{review.review_id}</td>
                  <td>{review.stars}</td>
                  <td>{review.cool}</td>
                  <td>{review.funny}</td>
                  <td>{review.useful}</td>
                  <td>{review.text}</td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      )}
    </div>
  );
};

export default ShowReports;
