"use client";

import Link from "next/link";
import InputSearch from "./InputSearch";
import { useEffect, useState } from "react";

const Navbar = () => {
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
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };


  return (
    <header className={`${isScrolled ? 'sticky top-5 bg-slate-200/75 backdrop-blur-sm mx-4 rounded-lg z-10' : 'flex bg-slate-200 shadow-xl mx-0'} transition-all`}>
      <div className="container mx-auto px-4 py-4 flex gap-2 justify-between">
        <Link href="/" className="uppercase font-bold text-2xl">
          mexanime
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
