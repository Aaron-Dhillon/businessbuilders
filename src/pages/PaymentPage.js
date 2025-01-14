import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const navigate = useNavigate();

  const handlePaymentRedirect = async (amount, planName) => {
    const stripe = await loadStripe("pk_test_51QKR1qAW9rQpoCcQljuyXomkRbLWXWSCUXydzQ5ByzldxfSVvBE3Nr5a1D8xU6Zawiy9PmA47zbuwJK2Wxnd5qor00qjMsYhoU");

    try {
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount, planName }), // Send amount and plan to backend
      });

      if (!response.ok) {
        throw new Error("Failed to create Stripe session");
      }

      const session = await response.json();
      const result = await stripe.redirectToCheckout({ sessionId: session.id });

      if (result.error) {
        console.error(result.error.message);
        alert("Payment redirect failed. Please try again.");
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please try again.");
      navigate("/")
    }
  };

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.header}>
        <Link to="/">
          <img src={Logo} className={styles.headerLogo} alt="Business Builders Logo" />
        </Link>
        <div className={styles.headerLinkContainer}>
          <Link className={styles.headerLink} to="/">Home</Link>
          <Link className={styles.headerLink} to="/aboutus">About Us</Link>
          <Link className={styles.headerLink} to="/leadership">Leadership</Link>
          <Link className={styles.headerLink} to="/appform">Join Us</Link>
        </div>
      </div>

      <div className={styles.container}>
        <h2>Corporate Sponsorship Packages</h2>
        <div className={styles.priceRow}>
          {[
            { plan: "Scarlet", amount: 500, benefits: ["Social Media Spotlight", "Website Spotlight"] },
            { plan: "Purple", amount: 750, benefits: ["Post Intern Opportunities", "Priority as Meeting Host"] },
            { plan: "Silver", amount: 1200, benefits: ["Resumes of All Members", "Speak + 2 tickets to Ceremony"] },
            { plan: "Gold", amount: 2000, benefits: ["Free Booth at Fair", "Join Advisory Board"] },
          ].map((pkg) => (
            <div className={styles.priceCol} key={pkg.plan}>
              <p>{pkg.plan}</p>
              <h3>${pkg.amount}</h3>
              <ul>
                {pkg.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button
                className={styles.hoverButton}
                onClick={() => handlePaymentRedirect(pkg.amount, pkg.plan)}
              >
                Pay {pkg.plan}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Payment;

