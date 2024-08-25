import "../AppForm.css";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import Connect from "../assets/Connect.svg";
import Educate from "../assets/Educate.svg";
import Inspire from "../assets/Inspire.svg";
import {Link} from 'react-router-dom';

function JoinUs() {
  return (
    <div className={styles.scrollContainer}>
      <div className={styles.header}>
        <img src={Logo} className={styles.headerLogo} alt="Business Builders Logo"></img>
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
          <span className={styles.landingYear}>Est. 2001</span>
          <span className={styles.landingTitle}>Business<br/>Builders</span>
          <span className={styles.landingSubtitle}>The premier entrepreneurship organization at The Ohio State University</span>
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>arrow_downward_alt</span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Mission</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img className={styles.missionItemImage} src={Connect} alt="Business Builders - Connect Pillar"></img>
              <span className={styles.missionItemDescription}>Build a community of innovators, problem-solvers, and doers with relationships that will last a lifetime.</span>
            </div>
            <div className={styles.missionItemContainer}>
              <img className={styles.missionItemImage} src={Educate} alt="Business Builders - Educate Pillar"></img>
              <span className={styles.missionItemDescription}>Provide members with the knowledge required to build a sustainable business, think creatively, and achieve career goals.</span>
            </div>
            <div className={styles.missionItemContainer}>
              <img className={styles.missionItemImage} src={Inspire} alt="Business Builders - Inspire Pillar"></img>
              <span className={styles.missionItemDescription}>Inspire students to explore and realize new career heights and life possibilities that are within their reach.</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle}>Our Mission</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img className={styles.missionItemImage} src={Connect} alt="Business Builders - Connect Pillar"></img>
              <span className={styles.missionItemDescription}>Build a community of innovators, problem-solvers, and doers with relationships that will last a lifetime.</span>
            </div>
            <div className={styles.missionItemContainer}>
              <img className={styles.missionItemImage} src={Educate} alt="Business Builders - Educate Pillar"></img>
              <span className={styles.missionItemDescription}>Provide members with the knowledge required to build a sustainable business, think creatively, and achieve career goals.</span>
            </div>
            <div className={styles.missionItemContainer}>
              <img className={styles.missionItemImage} src={Inspire} alt="Business Builders - Inspire Pillar"></img>
              <span className={styles.missionItemDescription}>Inspire students to explore and realize new career heights and life possibilities that are within their reach.</span>
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

export default JoinUs;
