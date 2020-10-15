import React from "react";
import classnames from "classnames";
import Logo from 'src/Components/Architect/Logo.png';
import './Logo.css';

const Navbar = ({ sticky }) => (
  <nav
    className={classnames("navbar-section", {
      "navbar-sticky": sticky
    })}
  >
    <div className="logo-container">
      {sticky ? <img src={Logo} alt="logo" className="logo" /> : null}
      <h1 className="title">SpaceCube</h1>
    </div>
    <ul className="navbar-link">
      <li className="navbar-link-item">Home</li>
      <li className="navbar-link-item">About</li>
      <li className="navbar-link-item">Blog</li>
    </ul>
  </nav>
);
export default Navbar;
