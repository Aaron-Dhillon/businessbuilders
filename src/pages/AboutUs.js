import "../App.css";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import Connect from "../assets/Connect.svg";
import Educate from "../assets/Educate.svg";
import Inspire from "../assets/Inspire.svg";
import Grubhub from "../assets/grubhubLogo.png";
import Toyota from "../assets/toyota.png";
import Chipotle from "../assets/chipotle_logo.png"
import Olo from "../assets/olo_logo.jpg"
import WST from "../assets/webstaurant_logo.png"
import {Link} from 'react-router-dom';

function AboutUs() {
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
          <span className={styles.missionTitle2}>Who we are</span>
          <hr className={styles.horizontalLine}/>
          <div className={styles.missionItemsContainer}>
            <div className={styles.subtext}>
              <span>We are the premier entrepreneurship organization on campus striving to turn your idea into 
                    a startup. We aim to connect with industry professionals from the startup space and provide the resources
                    neccessary to complete your idea. Our mission is for our members to create an impact with their idea and elevate 
                    the startup culture not only campus, but in the real world. We inspire our members to by opening up their career 
                    paths to greater opportunities. Our general structure consists of weekly events with speakers from the startup and
                    corporate space, flagship events such as panels, career fairs, corporate tours, etc., and social events such as
                    sports, date parties, dinners, and much more!</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.missionTitle2}>Where we work</span>
          <hr className={styles.horizontalLine}/>
          <div className={styles.imageContainer}>
          <a href="https://www.linkedin.com/company/grubhub-seamless/" target="_blank">
            <img src={Grubhub} width="400px" alt="Grubhub"/>
          </a>
          <a href="https://www.linkedin.com/company/toyota/" target="_blank">
            <img src={Toyota} width="400px" alt="Toyota"/>
          </a>
          <a href= "https://www.linkedin.com/company/chipotle-mexican-grill/" target="_blank">
            <img src={Chipotle} width="200px" alt="Chipotle"/>
          </a>
          <a href="https://www.linkedin.com/company/olo/" target="_blank">
            <img src={Olo} width="200px" alt="Olo"/>
          </a>
          <a href="https://www.linkedin.com/company/webstaurantstore-com/" target="_blank">
            <img src={WST} width="400px" alt="WST"/>
          </a>
      </div>
    </div>
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
              <span className={styles.missionItemDescription}>Startup idea pitch compeition with a panel of 6-7 judges from successful local startups. Top idea got $1,000 in funding.</span>
            </div>
            <div className={styles.missionItemContainer}>
            <span className={styles.landingTitle}>Corporate Tours<br/></span>
              <span className={styles.missionItemDescription}>Visited corporate offices of companies such as Google, Lyft, Microsoft, Flashpoint Innovation, Societe Generale in cities such as San Francisco and Chicago.</span>
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
