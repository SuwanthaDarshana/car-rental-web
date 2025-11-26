import React, { useState } from "react";
import { navbarStyles as styles } from "../assets/dummyStyles";
import { Link } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${styles.nav.base} 
    ${scrolled ? styles.nav.scrolled : styles.nav.notScrolled}`}
      area-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            className={`${styles.floatingNav.base}${
              scrolled
                ? styles.floatingNav.scrolled
                : styles.floatingNav.notScrolled
            }`} role="region" area-roledescription="navigation"
          >
            <div className="flex items-center justify-between gap-4">
            <Link to="/" className="flex items-center">
            <div className={`${styles.logoContainer}`}>
                <img src="{logo}" alt="logo" className="h-[1em] w-auto block" 
                    style={{display: 'block', objectFit: 'contain'}}
                />
            </div>

            </Link>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
