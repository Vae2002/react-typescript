// import React from 'react';
// import AddAdmin from './AddAdmin';
// import AddReview from './AddReview';
// import StartStopNotification from './StartStopNotification';
// // import { ShowReports } from './ShowReports';
// // import { ReportTable } from './components/ReportTable';  
// import ShowReports from './ShowReports';
// import ReportTable from './components/ReportTable';  
// const App: React.FC = () => {
//   return (
//     <>
//       <h1>Yelp</h1>
//       <AddAdmin />
//       <AddReview />
//       <StartStopNotification/>
//       <ShowReports/>
//       <ReportTable/>
//     </>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddAdmin from './AddAdmin';
import AddReview from './AddReview';
import StartStopNotification from './StartStopNotification';
import ShowReports from './ShowReports';
import ReportTable from './components/ReportTable';

// Define the Review type
type Review = {
  _id: string;
  review_id: string;
  date: string;
  stars: number;
  cool: number;
  funny: number;
  useful: number;
  text: string;
};

const App: React.FC = () => {
  const [recentReviews, setRecentReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchRecentReviews = async () => {
      try {
        const response = await axios.post('/api/recent-reviews');
        if (response.status === 200) {
          setRecentReviews(response.data);
        } else {
          throw new Error('Failed to fetch recent reviews');
        }
      } catch (error) {
        console.error('Error fetching recent reviews:', error);
      }
    };

    fetchRecentReviews();
  }, []);

  return (
    <>
      <h1>Yelp</h1>
      <AddAdmin />
      <AddReview />
      <StartStopNotification />
      <ShowReports recentReviews={recentReviews} />
      <ReportTable recentReviews={recentReviews} />
    </>
  );
};

export default App;
