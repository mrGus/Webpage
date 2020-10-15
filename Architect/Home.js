import React, { Fragment, useEffect, useRef, useState } from "react";
import debounce from 'lodash.debounce';
import Welcome from "./Welcome";
import Navbar from "./Navbar";

const Home = () => {
  const [isSticky, setSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);

  const handleScroll = () => {
    window.pageYOffset > stickyRef.current.getBoundingClientRect().bottom
      ? setSticky(true)
      : setSticky(false);
  };

  window.addEventListener("scroll", debounce(handleScroll, 20));

  return (
    <Fragment>
      <Navbar sticky={isSticky} />
      <Welcome stickyRef={stickyRef} />
    </Fragment>
  );
};

export default Home;
