import React from 'react';
import { Helmet } from 'react-helmet-async';
import Marquee from "react-fast-marquee";
import styles from "../assets/styles/Builders.module.css";
import Header from "../components/Header";

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
          {/* Placeholder cards - we can add real builder data here */}
          <div className={styles.builderCard}>
            <div className={styles.cardContent}>
              <h3>Builder Name</h3>
              <p>Company Name</p>
            </div>
          </div>
          <div className={styles.builderCard}>
            <div className={styles.cardContent}>
              <h3>Builder Name</h3>
              <p>Company Name</p>
            </div>
          </div>
          <div className={styles.builderCard}>
            <div className={styles.cardContent}>
              <h3>Builder Name</h3>
              <p>Company Name</p>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Builders;
