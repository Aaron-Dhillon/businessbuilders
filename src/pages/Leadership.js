import "../App.css";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import Rohan from "../assets/rsuggala.png";
import Trevor from "../assets/tgerald.png";
import Kathir from "../assets/kmaari.png";
import Andrew from "../assets/ashaheen.jpg";
import Jen from "../assets/jhazlett.jpg";
import Pratham from "../assets/pratham.kancherla_headshot.png";
import {Link} from 'react-router-dom';

function Leadership() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.header}>
        <Link to= "/">
          <img src={Logo} className={styles.headerLogo} alt="Business Builders Logo"></img>
        </Link>
        <div className={styles.headerLinkContainer}>
        <Link className={styles.headerLink} to="/">Home</Link>
          <Link className={styles.headerLink} to="/aboutus">About Us</Link>
          <Link className={styles.headerLink} to="/leadership">Leadership</Link>
          <Link className={styles.headerLink} to="/appform">Join Us</Link>
          <Link className={styles.headerLink} to="/payment">Payment</Link>
        </div>
        <a className={styles.headerIconLink} href="/">
          <span class={`material-symbols-rounded ${styles.headerIcon}`}>hub</span>
        </a>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div></div>
        <div className={styles.landingSubcontainer}>
          <span className={styles.landingYear}>2024-25</span>
          <span className={styles.landingTitle}>Meet the Team<br/></span>
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>arrow_downward_alt</span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Leadership</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
            <img src={Rohan} alt="Profile" style={{borderRadius: "50%" }} />
              <span className={styles.landingTitle}>Rohan Suggala<br/></span>
              <span className={styles.missionItemDescription}>President</span>
            </div>
            <div className={styles.missionItemContainer}>
            <img src={Trevor} alt="Profile" style={{borderRadius: "50%" }} />
            <span className={styles.landingTitle}>Trevor Gerald<br/></span>
              <span className={styles.missionItemDescription}>Vice President</span>
            </div>
            <div className={styles.missionItemContainer}>
            <img src={Pratham} alt="Profile" style={{borderRadius: "50%" }} />
            <span className={styles.landingTitle}>Pratham Kancherla<br/></span>
              <span className={styles.missionItemDescription}>Vice President of Technology</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Leadership</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
            <img src={Andrew} alt="Profile" style={{borderRadius: "50%" }} />
            <span className={styles.landingTitle}>Andrew Sheehan<br/></span>
              <span className={styles.missionItemDescription}>Vice President of Finance</span>
            </div>
            <div className={styles.missionItemContainer}>
            <img src={Kathir} alt="Profile" style={{borderRadius: "50%" }} />
            <span className={styles.landingTitle}>Kathir Maari<br/></span>
              <span className={styles.missionItemDescription}>Vice President of Marketing</span>
            </div>
            <div className={styles.missionItemContainer}>
            <img src={Jen} alt="Profile" style={{borderRadius: "50%" }} />
            <span className={styles.landingTitle}>Jen Hazlett<br/></span>
              <span className={styles.missionItemDescription}>Vice President of Socials</span>
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
        </div>
        <div className="marquee-sub-contain">
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

export default Leadership;
