import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import CreditCardIcon from "../assets/credit_card_icon.png";
import PaypalIcon from "../assets/paypal.png";
import BankIcon from "../assets/bank_icon.png";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const [paymentError, setPaymentError] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(true);
  const [amount, setAmount] = useState(5000); // Example amount, can be dynamic

  // Handle the payment redirect to Stripe Checkout
  const handlePaymentRedirect = async () => {
    const stripe = await loadStripe("pk_test_51QKR1qAW9rQpoCcQljuyXomkRbLWXWSCUXydzQ5ByzldxfSVvBE3Nr5a1D8xU6Zawiy9PmA47zbuwJK2Wxnd5qor00qjMsYhoU")

    const headers = {
      "Content-Type": "application/json",
    }

    const response = await fetch(`http://localhost:3000/create-checkout-session`, {
      method: "POST",
      headers:headers,
      body:JSON.stringify({ amount })
    })

    const session = await response.json();    

    const result = stripe.redirectToCheckout({
      sessionId:session.id
    });
    if(result.error){
      console.log(result.error);
    }
  }

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
        <a className={styles.headerIconLink} href="/">
          <span className={`material-symbols-rounded ${styles.headerIcon}`}>hub</span>
        </a>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div></div>
        <div className={styles.landingSubcontainer}>
          <span className={styles.landingYear}>2024-25</span>
          <span className={styles.landingTitle}>Payment Information<br /></span>
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>arrow_downward_alt</span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.container}>
          <h2>Corporate Sponshorship Packages</h2>
          <div className={styles.priceRow}>
            <div className={styles.priceCol}>
              <p>Scarlett</p>
              <h3>$500 <span>/ month</span></h3>
              <ul>
                <li className={styles.positive}>Social Media Spotlight</li>
                <li className={styles.positive}>Website Spotlight</li>
                <li className={styles.negative}>Post Internship Opportunities</li>
                <li className={styles.negative}>Member Mentorship</li>
                <li className={styles.negative}>Any Priority as Meeting Host</li>
                <li className={styles.negative}>Resume Book of All Members</li>
                <li className={styles.negative}>Physical Marketing Material Spotlight</li>
                <li className={styles.negative}>Speak + X tickets to End of Year Ceremony</li>
                <li className={styles.negative}>Free Booth at Startup Career Fair</li>
                <li className={styles.negative}>Host Site Visit with Paid Members</li>
                <li className={styles.negative}>Join Advisory Board</li>
                <li className={styles.negative}>Send 1 judge to IdeaPitch Competition</li>
              </ul>

                <button className={styles.hoverButton}>Pay Scarlett</button>
            </div>
            <div className={styles.priceCol}>
              <p>Purple</p>
              <h3>$750 <span>/ year</span></h3>
              <ul>
                <li className={styles.positive}>Social Media Spotlight</li>
                <li className={styles.positive}>Website Spotlight</li>
                <li className={styles.positive}>Post Internship Opportunities</li>
                <li className={styles.positive}>Member Mentorship</li>
                <li className={styles.positive}>3rd Priority as Meeting Host</li>
                <li className={styles.negative}>Resume Book of All Members</li>
                <li className={styles.negative}>Physical Marketing Material Spotlight</li>
                <li className={styles.negative}>Speak + X tickets to End of Year Ceremony</li>
                <li className={styles.negative}>Free Booth at Startup Career Fair</li>
                <li className={styles.negative}>Host Site Visit with Paid Members</li>
                <li className={styles.negative}>Join Advisory Board</li>
                <li className={styles.negative}>Send 1 judge to IdeaPitch Competition</li>
              </ul>

              <button className={styles.hoverButton}>Pay Purple</button>
            </div>
            <div className={styles.priceCol}>
              <p>Silver</p>
              <h3>$1200 <span>/ year</span></h3>
              <ul>
                <li className={styles.positive}>Social Media Spotlight</li>
                <li className={styles.positive}>Website Spotlight</li>
                <li className={styles.positive}>Post Internship Opportunities</li>
                <li className={styles.positive}>Member Mentorship</li>
                <li className={styles.positive}>2nd Priority as Meeting Host</li>
                <li className={styles.positive}>Resume Book of All Members</li>
                <li className={styles.positive}>Physical Marketing Material Spotlight</li>
                <li className={styles.positive}>Speak + 2 tickets to End of Year Ceremony</li>
                <li className={styles.positive}>25% Discounted Booth at Startup Career Fair</li>
                <li className={styles.negative}>Host Site Visit with Paid Members</li>
                <li className={styles.negative}>Join Advisory Board</li>
                <li className={styles.negative}>Send 1 judge to IdeaPitch Competition</li>
            </ul>

              <button className={styles.hoverButton}>Pay Silver</button>
            </div>
            <div className={styles.priceCol}>
              <p>Gold</p>
              <h3>$2000 <span>/ year</span></h3>
              <ul>
                  <li className={styles.positive}>Social Media Spotlight</li>
                  <li className={styles.positive}>Website Spotlight</li>
                  <li className={styles.positive}>Post Internship Opportunities</li>
                  <li className={styles.positive}>Member Mentorship</li>
                  <li className={styles.positive}>2nd Priority as Meeting Host</li>
                  <li className={styles.positive}>Resume Book of All Members</li>
                  <li className={styles.positive}>Physical Marketing Material Spotlight</li>
                  <li className={styles.positive}>Speak + 4 tickets to End of Year Ceremony</li>
                  <li className={styles.positive}>Free Booth at Startup Career Fair</li>
                  <li className={styles.positive}>Host Site Visit with Paid Members</li>
                  <li className={styles.positive}>Join Advisory Board</li>
                  <li className={styles.positive}>Send 1 judge to IdeaPitch Competition</li>
              </ul>

              <button className={styles.hoverButton}>Pay Gold</button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <div className={styles.missionItemsContainer}>
            <button
              className={styles.hoverButton}
              onClick={handlePaymentRedirect}
            >
              Pay Now
            </button>
            {paymentError && <div className={styles.error}>{paymentError}</div>}
            {paymentSuccess && <div className={styles.success}>{paymentSuccess}</div>}
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Payment;
