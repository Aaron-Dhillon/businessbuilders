import React from 'react';
import { Helmet } from 'react-helmet-async';
import Marquee from "react-fast-marquee";
import styles from "../assets/styles/Builders.module.css";
import Header from "../components/Header";

const buildersData = [
  {
    founderName: "Kathir Maarikartheykeyan",
    businessName: "Polymer",
    imageUrl: "/images/founders/kathir.jpeg"
  },
  {
    founderName: "Sarah Chen",
    businessName: "EcoTech Solutions",
    imageUrl: "/images/founders/sarah.jpg"
  },
  {
    founderName: "Marcus Johnson",
    businessName: "FinFlow",
    imageUrl: "/images/founders/marcus.jpg"
  }
  // Add more builders as needed
];

function Builders() {
  return (
    <div className={styles.buildersPage}>
      <Helmet>
        <title>Our Builders | Business Builders</title>
        <meta name="description" content="Meet our exceptional business builders and their success stories." />
      </Helmet>

      <Header />

      <div className={styles.carouselSection}>
        <h1>Our Builders</h1>
        <Marquee
          gradient={false}
          speed={40}
          pauseOnHover={true}
        >
          {buildersData.map((builder, index) => (
            <div key={index} className={styles.builderCard}>
              <div className={styles.cardContent}>
                <img 
                  src={builder.imageUrl} 
                  alt={`${builder.founderName}`} 
                  className={styles.founderImage}
                  onError={(e) => {
                    e.target.src = "/images/founders/placeholder.jpg";
                  }}
                />
                <p className={styles.businessName}>{builder.businessName}</p>
                <p className={styles.founderName}>{builder.founderName}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Builders;
