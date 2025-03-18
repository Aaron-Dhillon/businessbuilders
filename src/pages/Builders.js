import React from 'react';
import { Helmet } from 'react-helmet-async';
import Marquee from "react-fast-marquee";
import styles from "../assets/styles/Builders.module.css";
import Header from "../components/Header";

const buildersData = [
  {
    founderName: "Kathir Maarikartheykeyan",
    businessName: "Polymer",
    description: "Kathir is revolutionizing the world of music with his innovative Polymer platform.",
    imageUrl: "/images/founders/kathir.jpeg"
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
              <div className={styles.imageContainer}>
                <img 
                  src={builder.imageUrl} 
                  alt={`${builder.founderName}`} 
                  className={styles.founderImage}
                  onError={(e) => {
                    e.target.src = "/images/founders/placeholder.jpg";
                  }}
                />
                <div className={styles.category}>FOUNDER</div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.businessName}>{builder.businessName}</h3>
                <p className={styles.description}>{builder.description}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      <div className={styles.alumniSection}>
        <h2>Past Alumni Success Stories</h2>
        <div className={styles.alumniGrid}>
          {/* Alumni success stories will be populated here */}
        </div>
      </div>

      <div className={styles.cohortsSection}>
        <h2>Past Cohorts</h2>
        <div className={styles.cohortMarquee}>
          <Marquee
            gradient={false}
            speed={40}
            pauseOnHover={false}
          >
            <div className={styles.cohortMessage}>
              <span>🚀 First Cohort In Progress 🚀</span>
              <span>•</span>
              <span>Making History</span>
              <span>•</span>
              <span>Building The Future</span>
              <span>•</span>
              <span>Stay Tuned For Success Stories</span>
              <span>•</span>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Builders;
