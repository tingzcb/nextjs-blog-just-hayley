"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {};

const ScrollingText = (props: Props) => {
  const [fontSize, setFontSize] = useState(50); // Initial font size
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Adjust font size based on scroll position
      const newFontSize = Math.max(50, 100 - scrollPosition * 10); // Example calculation
      setFontSize(newFontSize);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" flex items-center justify-center h-screen ">
      <Link href={"/"} className="flex  gap-2">
        <p
          className="text-6xl font-bold text-center hover:-translate-y-[2px] md:block dark:border-white"
          style={{ fontSize: `${fontSize}px` }}
        >
          Just Hayley
        </p>
      </Link>
      {/* Just Hayley */}
    </div>
  );
};

export default ScrollingText;
