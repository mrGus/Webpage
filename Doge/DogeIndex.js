import React, { Component } from "react";
import { render } from "react-dom";
import DogeGallery from "./DogeGallery";
import DogeNav from "./DogeNav";
import DogeGlamorNav from "./DogeGlamorNav";


//banner
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  padding: 0,
  margin: "-8px"
};

/**
 * Using marquee as a joke :)
 * Can remove the scrolling marquee
 * Embedded CSS within the main code
 */


const DogeNavHeading = ({ children }) => (
  <marquee
    //scrollamount="5"
    style={{
      backgroundColor: "red",
      padding: "30px",
      color: "white",
      width: "100%",
      fontSize: "25px",
      border: "10px solid cyan",
      boxSizing: "border-box",
      fontFamily: '"Comic Sans", "Comic Sans MS"'
    }}
  >
    {children}
  </marquee>
);

class App extends Component {
  state = {
    paddingOffset: 0
  };
  render() {
    return (
      <div style={{ ...styles, paddingTop: this.state.paddingOffset }}>
        <DogeGlamorNav
          coverImage="http://celebwallpapers.net/wp-content/uploads/2017/11/doge-wallpaper-doge-wallpaper-hd-images-of-doge-wallpaper.jpg"
          style={{
            color: "white",
            textShadow: "0 0 5px black",
            fontFamily: '"Sans Serif", "Sans Serif"'
          }}
        >
          <h1>World of Doge</h1>
          <h3>Such dazzle, pretty glam</h3>
        </DogeGlamorNav>
   
        <DogeGallery
        />
        <DogeNav
          onUnstick={height => {
            this.setState({ paddingOffset: 0 });
          }}
          onStick={height => {
            this.setState({ paddingOffset: height });
          }}
        >
          <DogeNavHeading>sample text</DogeNavHeading>
        </DogeNav>
        <DogeGallery
          pictures={[

          ]}
        />
      </div>
    );
  }
}

//render(<App />, document.getElementById("root"));
export default App;