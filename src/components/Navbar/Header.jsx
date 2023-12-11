"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useEffect, useState } from "react";

const Header = () => {
  // Effect Hook to handle scroll event
  useEffect(() => {
    // Adding the scroll listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      // Removing listener to prevent memory leaks
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Flag to track whether the screen is scrolled
  const [isScrolled, setScrolled] = useState(false);

  // Handler for scroll events
  const handleScroll = () => {
    // Update the scrolled state based on the scroll position
    if (window.scrollY > 1) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <header
      className={`${
        isScrolled ? "top-5 z-10 container" : "top-0 mx-0 px-0"
      } sticky transition-all duration-300`}
    >
      <div
        className={`${isScrolled} ? bg-color-accent/75 backdrop-blur-sm rounded-lg : bg-color-accent shadow-md shadow-color-dark/30 transition-all duration-300`}
      >
        <div className="container py-4 flex gap-2 justify-between md:items-center md:flex-row flex-col">
          <Link href="/" className="font-bold text-[150%]">
            MeeAnimeList
          </Link>
          <InputSearch />
        </div>
      </div>
    </header>
  );
};

export default Header;
