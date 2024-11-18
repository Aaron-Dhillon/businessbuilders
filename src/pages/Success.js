// success.js (or a component in your React app)
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  const location = useLocation();
  const [message, setMessage] = useState('Processing payment...');
  
  useEffect(() => {
    // Get the session_id from the URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get('session_id');
    
    // Call your backend to verify the payment status
    const verifyPayment = async () => {
      try {
        const response = await fetch(`http://localhost:3000/verify-payment?session_id=${sessionId}`);
        const data = await response.json();
        if (data.status === 'succeeded') {
          setMessage('Payment successful! Thank you for your purchase.');
        } else {
          setMessage('Payment failed. Please try again.');
        }
      } catch (error) {
        setMessage('There was an error verifying your payment.');
      }
    };

    if (sessionId) {
      verifyPayment();
    } else {
      setMessage('Session not found.');
    }
  }, [location]);

  return (
    <div>
      <h1>{message}</h1>
      {/* Optionally, you can provide a link to the home page or another page */}
      <a href="/">Go to Home</a>
    </div>
  );
};

export default Success;
