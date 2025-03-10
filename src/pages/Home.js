import "../App.css";
import styles from "../assets/styles/Home.module.css";
import Header from "../components/Header";
import Marquee from "react-fast-marquee";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroYear}>Est. 2001</span>
          <span className={styles.heroTitle}>
            Business
            <br />
            Builders
          </span>
          <span className={styles.heroSubtitleTop}>
            The premier entrepreneurship organization at
          </span>
          <span className={styles.heroSubtitle}>The Ohio State University</span>
        </div>
        <span className={`material-symbols-rounded ${styles.heroIcon}`}>
          arrow_downward_alt
        </span>
      </div>

      {/* Mission */}
      <div className={styles.missionContainer}>
        <span
          className={styles.sectionTitle}
          style={{ marginTop: 30, marginLeft: 30 }}
        >
          Our Mission
        </span>
        <span className={styles.missionStatement} style={{ marginLeft: 30 }}>
          We are on a mission to make Columbus an
        </span>
        <span
          className={styles.missionStatementBold}
          style={{ marginLeft: 30 }}
        >
          entrepreneurial destination.
        </span>
        <div className={styles.missionGrid}>
          <div className={styles.missionItem}>
            <span className={styles.missionNumber}>5K</span>
            <span className={styles.missionTitle}>Initial Investment</span>
            <span className={styles.missionSubtitle}>
              To kickstart your venture.
            </span>
          </div>

          <div className={styles.missionItem}>
            <span className={styles.missionNumber}>5K</span>
            <span className={styles.missionTitle}>Initial Investment</span>
            <span className={styles.missionSubtitle}>
              To kickstart your venture.
            </span>
          </div>

          <div className={styles.missionItem}>
            <span className={styles.missionNumber}>5K</span>
            <span className={styles.missionTitle}>Initial Investment</span>
            <span className={styles.missionSubtitle}>
              To kickstart your venture.
            </span>
          </div>

          <div className={styles.missionItem}>
            <span className={styles.missionNumber}>5K</span>
            <span className={styles.missionTitle}>Initial Investment</span>
            <span className={styles.missionSubtitle}>
              To kickstart your venture.
            </span>
          </div>
        </div>
      </div>

      {/* Initiatives */}
      <div className={styles.initiativesContainer}>
        <span
          className={styles.sectionTitle}
          style={{ marginTop: 30, marginLeft: 30 }}
        >
          Our Initiatives
        </span>
        <span className={styles.missionStatement} style={{ marginLeft: 30 }}>
          Building the future of entrepreneurship through:
        </span>

        <div className={styles.initiativeGrid}>
          <div className={styles.initiativeItem}>
            <div className={styles.liveContainer}>
              <div className={styles.liveIndicator}></div>
              <span className={styles.liveText}>SP '25 is Live!</span>
            </div>
            <img
              className={styles.initiativeNumber}
              alt="Business Builders Logo"
            ></img>
            <span className={styles.initiativeTitle}>Product Studio</span>
            <span className={styles.initiativeSubtitle}>
              To kickstart your venture.
            </span>
          </div>

          <div className={styles.initiativeItem}>
            <img
              className={styles.initiativeNumber}
              alt="Business Builders Logo"
            ></img>
            <span className={styles.initiativeTitle}>Ship-It Sundays</span>
            <span className={styles.initiativeSubtitle}>
              To kickstart your venture.
            </span>
          </div>

          <div className={styles.initiativeItem}>
            <img
              className={styles.initiativeNumber}
              alt="Business Builders Logo"
            ></img>
            <span className={styles.initiativeTitle}>Initial Investment</span>
            <span className={styles.initiativeSubtitle}>
              To kickstart your venture.
            </span>
          </div>

          <div className={styles.initiativeItem}>
            <img
              className={styles.initiativeNumber}
              alt="Business Builders Logo"
            ></img>
            <span className={styles.initiativeTitle}>Initial Investment</span>
            <span className={styles.initiativeSubtitle}>
              To kickstart your venture.
            </span>
          </div>
        </div>
      </div>

      {/* Founders */}
      <div className={styles.foundersContainer}>
        <Marquee>
          <div className={styles.founderCard}>
            <img />
            <span>Name</span>
            <span>Company</span>
            <button>{"-->"}</button>
          </div>
          <div>
            <img />
            <span>Name</span>
            <span>Company</span>
            <button>{"-->"}</button>
          </div>
          <div>
            <img />
            <span>Name</span>
            <span>Company</span>
            <button>{"-->"}</button>
          </div>
        </Marquee>
      </div>

      {/* Testimonials */}

      {/* Sitemap */}
      <div className={styles.sitemapContainer}>site[map]</div>
    </>
  );
}

export default Home;
