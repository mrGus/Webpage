import React, { Component } from "react";

class DogeNav extends Component {
  state = {
    distanceFromTop: undefined,
    isStuck: false,
    unstickAt: undefined
  };
  outerContainerRef = React.createRef();
  handleScroll = () => {
    window.requestAnimationFrame(() => {
      const {
        top,
        height
      } = this.outerContainerRef.current.getBoundingClientRect();

      const { isStuck, unstickAt } = this.state;

      if (!isStuck && top <= 0) {
        console.log("stuck at position", window.scrollY);
        this.setState(
          {
            isStuck: true,
            unstickAt: window.scrollY
          },
          () => {
            this.props.onStick(height);
          }
        );
      } else if (isStuck) {
        if (window.scrollY <= unstickAt) {
          console.log("unstick me!");
          this.setState(
            {
              isStuck: false
            },
            () => {
              this.props.onUnstick(height);
            }
          );
        } else {
          console.log("keep sticking");
        }
      }

      this.setState({ distanceFromTop: top });
    });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  render() {
    const { title, children } = this.props;
    return (
      <div
        ref={this.outerContainerRef}
        style={{
          boxSizing: "border-box",
          left: 0,
          right: 0,
          top: 0,
          position: this.state.isStuck ? "fixed" : "relative"
        }}
      >
        {children}
      </div>
    );
  }
}

export default DogeNav;
