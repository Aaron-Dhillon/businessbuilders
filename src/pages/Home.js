import "../App.css";
import "../AppForm.css";
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/Business Builders Logo.png";
import Instagram from "../assets/instagram-logo.png";
import LinkedIn from "../assets/linkedin-logo.png";
import GMail from "../assets/gmail-logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/aboutus');
  };

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
          <Link className={styles.headerLink} to="/payment">Payment</Link>
        </div>
        <a className={styles.headerIconLink} href="/">
          <span className={`material-symbols-rounded ${styles.headerIcon}`}>hub</span>
        </a>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div></div>
        <div className={styles.landingSubcontainer}>
          <span className={styles.landingYear}>Est. 2001</span>
          <span className={styles.landingTitle}>Business<br />Builders</span>
          <span className={styles.landingSubtitle}>The premier entrepreneurship organization at The Ohio State University</span>
          <div className="container">
            <button className="hover-button" onClick={handleClick}>More About Us</button>
          </div>        
        </div>
        <span className={`material-symbols-rounded ${styles.landingIcon}`}>arrow_downward_alt</span>
      </div>

      <div className={styles.scrollSubcontainer}>
        <div className={styles.missionSubContainer}>
          <div className={styles.missionItemsContainer}>
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&src=YmJjLm9zdUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%237986CB"
              style={{ border: 'solid 1px #777' }}
              width="800"
              height="600"
              title="Google Calendar"
            />
          </div>
        </div>
        <footer>
          <p>&copy; 2024 Business Builders</p>
          <p>
            <a href="https://www.instagram.com/businessbuildersosu/" target="_blank">
              <img src={Instagram} width = "25px" margin-top = "10px" alt="Instagram"/></a>
            <a href="https://www.linkedin.com/company/business-builders-club/" target="_blank">
              <img src={LinkedIn} width = "25px" margin-top = "10px" alt="LinkedIn"/></a>
            <a href="mailto:bbc-osu@gmail.com" target="_blank">
              <img src={GMail} width = "25px" margin-top = "10px" alt="GMail"/></a>
            </p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
