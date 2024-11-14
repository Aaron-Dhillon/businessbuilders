// PaymentPage.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {Link} from 'react-router-dom';
import React from 'react';

// Replace with your publishable key
const stripePromise = loadStripe('pk_test_51QKR1qAW9rQpoCcQljuyXomkRbLWXWSCUXydzQ5ByzldxfSVvBE3Nr5a1D8xU6Zawiy9PmA47zbuwJK2Wxnd5qor00qjMsYhoU');

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      // Use a backend route to create a Payment Intent
      '/create-payment-intent', {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setMessage(`Payment failed: ${error.message}`);
    } else if (paymentIntent.status === 'succeeded') {
      setMessage('Payment successful!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {message && <div>{message}</div>}
    </form>
  );
};

const PaymentPage = () => {
    return (
      <div>
        <h1>Donate to Business Builders</h1>
        {/* Payment form components go here */}
      </div>
    );
  };

export default PaymentPage;
