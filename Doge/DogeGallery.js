import React from "react";

//format pictures
const styles = {
  outer: {
    textAlign: "center",
    padding: 20
  },
  img: {
    margin: "0 auto",
    maxWidth: "500px",
    width: "100%",
    display: "block"
  }
};

const DogeGallery = ({ pictures = [] }) => (
  <div style={styles.outer}>
    {pictures.map(picture => (
      <img src={picture} alt="doge" style={styles.img} key={picture} />
    ))}
  </div>
);

export default DogeGallery;
