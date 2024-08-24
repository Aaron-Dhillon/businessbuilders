import "../App.css";
import logo from "../assets/Business Builders Logo.png";

function AboutUs() {
  return (
    <div className="App">
      <div className="header">
        <img src={logo} className="header-logo" alt="Business Builders Logo"></img>
        <div className="header-link-contain">
            <a className="header-link" href="/">About Us</a>
            <a className="header-link" href="/">Leadership</a>
            <a className="header-link" href="/">Support</a>
        </div>
        <img src={logo} className="header-logo" alt="Business Builders Logo"></img>
      </div>

      <div className="landing-contain">
        <span className="landing-year">Est. 2001</span>
        <span className="landing-title">Busess<br />Builders</span>
      </div>

      {/* <div className="marquee-contain">
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
      </div> */}
    </div>
  );
}

export default AboutUs;
