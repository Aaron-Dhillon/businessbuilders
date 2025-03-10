import "../App.css";
import styles from "../assets/styles/Leadership.module.css";
import Logo from "../assets/images/Business Builders Logo.png";
import Rohan from "../assets/images/rohan.jpg";
import LinkedIn from "../assets/images/linkedin.svg";
import {Link} from 'react-router-dom';

function Leadership() {
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
          <span className={styles.landingYear}>2024-25</span>
          <span className={styles.landingTitle}>Meet the Team<br/></span>
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>arrow_downward_alt</span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.sectionTitle}>Executive</span>
          <div className={styles.missionItemsContainer}>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Rohan Suggala<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.sectionTitle}>Technology</span>
          <div className={styles.missionItemsContainer}>
          <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Trevor Gerald<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Pratham Kancherla<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Kathir Maari<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Aaron Dhillon<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.sectionTitle}>Social</span>
          <div className={styles.missionItemsContainer}>
          <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Jen Hazlett<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Ava Kolesnikov<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.sectionTitle}>Finance</span>
          <div className={styles.missionItemsContainer}>
          <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Andrew Shaheen<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Henry Guerrera<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <span className={styles.sectionTitle}>Events</span>
          <div className={styles.missionItemsContainer}>
          <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Alex McNichols<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
            <div className={styles.missionItemContainer}>
              <img src={Rohan} className={styles.leadershipHeadshot} alt="Rohan Suggala - President"></img>
              <span className={styles.leadershipName}>Aryan Bommena<br/></span>
              <div className={styles.leadershipInfoContain}>
                <span className={styles.leadershipTitle}>President</span>
                <a href="https://www.linkedin.com/in/rohansuggala/" style={{margin: 0, padding: 0, width: "20px", height: "20px"}}>
                  <img src={LinkedIn} className={styles.leadershipIcon} alt="LinkedIn"></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Leadership;
