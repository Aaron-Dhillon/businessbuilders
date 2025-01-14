const express = require("express");
const stripe = require("stripe")("sk_test_51QKR1qAW9rQpoCcQcodzEBOBXXxyCK6ncmlZ7IeQ38fAFtc68wK1fIIIQzcbCKZUZ5DcFN7QChp8JYr1ruKlQhKR00xGn4aiHW");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { amount, planName } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: planName,
            },
            unit_amount: amount * 100, // Stripe expects amounts in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://google.com",
      cancel_url: "https://google.com"

    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating checkout session");
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
