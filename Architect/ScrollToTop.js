import React, { useEffect, useState } from "react";
import debounce from 'lodash.debounce';
import { UpCircleFilled } from '@ant-design/icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => handleToggleVisibility);
    };
  }, []);

  const handleToggleVisibility = () => {
    window.pageYOffset > 300 ? setIsVisible(true) : setIsVisible(false);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", debounce(handleToggleVisibility, 20));

  return (
    <div className="scroll-to-top-section">
      {isVisible && (
        <div className="scroll-btn" onClick={handleScrollToTop}>
          <UpCircleFilled />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;