// components/PageLayout.js
"use client";
import React, { useEffect, useState } from "react";

const PageLayout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calculateFontSize = () => {
    // Calculate font size based on scroll position
    const maxFontSize = 48;
    const minFontSize = 24;
    const scrollRange = 500; // Adjust as needed
    const fontSizeRange = maxFontSize - minFontSize;
    const fontSize =
      maxFontSize - (scrollPosition / scrollRange) * fontSizeRange;
    return Math.max(minFontSize, fontSize);
  };
  const leftPosition = Math.max(50 - scrollPosition * 0.05, 5);
  const topPosition = Math.max(50 - scrollPosition * 0.05, 5);

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
      {/* <Logo /> */}
      <h1
        className="text-3xl md:text-5xl"
        style={{
          fontSize: `${calculateFontSize()}px`,
          left: `${leftPosition}%`,
          top: `${topPosition}%`
        }}
      >
        Page Lay out Big Words
      </h1>
    </div>
  );
};

export default PageLayout;
