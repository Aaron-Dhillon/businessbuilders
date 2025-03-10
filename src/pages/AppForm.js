import FormfacadeEmbed from "@formfacade/embed-react";
import {Link} from 'react-router-dom';
import styles from "../assets/styles/Home.module.css";
import Logo from "../assets/images/Business Builders Logo.png";

function AppForm() {
  return (
    <div classname = "AppForm">
      <Link to= "/">
          <img src={Logo} className={styles.headerLogo} alt="Business Builders Logo"></img>
        </Link>
        <FormfacadeEmbed
         formFacadeURL="https://formfacade.com/include/110309349648599726383/form/1FAIpQLSd9jvn9_0BLoV5jR6fTUKTiDfx1SomAuTiZMEjDy_DhJ10qPA/classic.js/?div=ff-compose"
         onSubmitForm={() => console.log('Form submitted')}
         />
      </div>
  );
}

export default AppForm;
