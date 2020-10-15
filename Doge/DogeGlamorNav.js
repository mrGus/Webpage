import React from "react";


//heading and associated wording at the top
const styles = {
  backgroundSize: "cover",
  padding: 20,
  height: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column"
};


//Notice how in this script he calls the coverImage that is defined in another script
const DogeGlamorNav = ({ children, coverImage, ...props }) => (
  <div style={{ ...styles, backgroundImage: `url(${coverImage})` }}>
    <div {...props}>{children}</div>
  </div>
);

export default DogeGlamorNav;
