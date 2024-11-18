// cancel.js (or a component in your React app)
import React from 'react';

const Cancel = () => {
  return (
    <div>
      <h1>Payment Canceled</h1>
      <p>Unfortunately, your payment was not completed. If this was a mistake, you can try again.</p>
      <a href="/">Go to Home</a>
    </div>
  );
};

export default Cancel;
