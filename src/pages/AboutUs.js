import "../App.css";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/images/Business Builders Logo.png";
import {Link} from 'react-router-dom';

function AboutUs() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.header}>
        <Link to= "/">
          <img src={Logo} className={styles.headerLogo} alt="Business Builders Logo"></img>
        </Link>
        <div className={styles.headerLinkContainer}>
          <Link className={styles.headerLink} to="/aboutus">About Us</Link>
          <Link className={styles.headerLink} to="/leadership">Leadership</Link>
          <Link className={styles.headerLink} to="/appform">Join Us</Link>
        </div>
        <a className={styles.headerIconLink} href="/">
          <span class={`material-symbols-rounded ${styles.headerIcon}`}>hub</span>
        </a>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div></div>
        <div className={styles.landingSubcontainer}>
          <span className={styles.landingTitle}>About&nbsp;&nbsp;Us!<br/></span>
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>arrow_downward_alt</span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Past Events</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
            <span className={styles.landingTitle}>Speaker EVENT<br/></span>
              <span className={styles.missionItemDescription}>Alexis Ohanian: Reddit Co-founder + tech entrepreneur Shereen Agrawal: Director of Center of Software Innovation Jeff Schumann: CEO of Aware </span>
            </div>
            <div className={styles.missionItemContainer}>
            <span className={styles.landingTitle}>IDEA<br/>Pitch<br/></span>
              <span className={styles.missionItemDescription}>Startup idea pitch compeition with a panel of 6-7 judges from successful local startups. Top idea got 1K in funding.</span>
            </div>
            <div className={styles.missionItemContainer}>
            <span className={styles.landingTitle}>Corporate Tours<br/></span>
              <span className={styles.missionItemDescription}>Visited corporate offices of companies such as Google, Lyft, Microsoft, Flashpoint Innovation, Societe Generale in cities such as San Francisco and Chicago.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee-contain">
        <div className="marquee-sub-contain">
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
          <span className="landing-text">Business Builders</span>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
