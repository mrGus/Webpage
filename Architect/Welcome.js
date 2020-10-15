import React from "react";
import Logo from "./Logo.png";
import "./Logo.css";
import About from "./About";
import ScrollToTop from "./ScrollToTop";



const Welcome = ({ stickyRef }) => (
  <>
    <section className="welcome-section">
      <div ref={stickyRef}>
        <img src={Logo} alt="logo" className="welcome-logo" />
        <p>Even if you scroll, i will stick with you</p>
        <button className="button-primary">Contact us</button>
      </div>
    </section>
    <About />
    <About />
    <About />
    <ScrollToTop />
  </>
);

export default Welcome;