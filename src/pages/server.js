// server.js
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe('sk_test_51QKR1qAW9rQpoCcQcodzEBOBXXxyCK6ncmlZ7IeQ38fAFtc68wK1fIIIQzcbCKZUZ5DcFN7QChp8JYr1ruKlQhKR00xGn4aiHW');

app.use(cors());
app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // amount in cents
      currency: 'usd',
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
