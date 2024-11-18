// server.js
const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');

const app = express();
const stripe = Stripe("sk_test_51QKR1qAW9rQpoCcQcodzEBOBXXxyCK6ncmlZ7IeQ38fAFtc68wK1fIIIQzcbCKZUZ5DcFN7QChp8JYr1ruKlQhKR00xGn4aiHW");

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  const { amount } = req.body; // amount in cents, for example $50.00 = 5000

  const lineItems = products.map((product)=>({
    price_data:{
      currency: "usd",
      product_data:{
        name: "Business Builders Membership"
      },
      unit_amount: Math.round(amount),
    },
    quantity:1
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types:["card"],
    line_items:lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url:"http://localhost:3000/cancel",
  })
  res.json({id:session.id})
})

  // try {
  //   // Create a new Checkout session
  //   const session = await stripe.checkout.sessions.create({
  //     payment_method_types: ['card'],
  //     line_items: [
  //       {
  //         price_data: {
  //           currency: 'usd',
  //           product_data: {
  //             name: 'Business Builders Membership', // Replace with your product name
  //           },
  //           unit_amount: amount, // The amount for the charge (in cents)
  //         },
  //         quantity: 1,
  //       },
  //     ],
  //     mode: 'payment', // Payment mode
  //     success_url: `${process.env.FRONTEND_URL}/success`, // Replace with your frontend success URL
  //     cancel_url: `${process.env.FRONTEND_URL}/cancel`,  // Replace with your frontend cancel URL
  //   });

  //   // Send the session URL to redirect to Stripe Checkout page
  //   res.send({ url: session.url });
  // } catch (error) {
  //   res.status(500).send({ error: error.message });
  // }
// })

app.listen(3000, () => console.log('Server running on port 3000'));
