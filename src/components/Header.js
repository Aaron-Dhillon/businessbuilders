import styles from "../assets/styles/Header.module.css";
import Logo from "../assets/images/Business Builders Logo.png";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
    <div className={styles.header}>
        <Link to= "/">
          <img src={Logo} className={styles.headerLogo} alt="Business Builders Logo"></img>
        </Link>
        <div className={styles.headerLinkContainer}>
          <Link className={styles.headerLink} to="/">About Us</Link>
          <Link className={styles.headerLink} to="/">Leadership</Link>
          <Link className={styles.headerLink} to="/">Join Us</Link>
          <Link className={styles.headerLink} to="/builders">Builders</Link>
        </div>
        <a className={styles.headerIconLink} href="/">
          <span className={`material-symbols-rounded ${styles.headerIcon}`}>hub</span>
        </a>
    </div>
    )
}