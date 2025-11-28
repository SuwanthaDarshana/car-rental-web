import React, { use, useState } from "react";
import { navbarStyles as styles } from "../assets/dummyStyles";
import { Link } from "react-router-dom";
import logo from "../assets/logocar.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(()=> localStorage.getItem('authToken'));
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path) => {
    if(path=='/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }

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
                <img src={logo} alt="logo" className="h-[1em] w-auto block" 
                    style={{display: 'block', objectFit: 'contain'}}
                />
                <span className={styles.logoText}>CarBook</span>
            </div>
            

            </Link>
            <div className={styles.navLinksContainer}>
              <div className={styles.navLinksInner}>
                {navLinks.map((link,index) => (
                  <React.Fragment key={link.to}>
                  <Link to={link.to} className={`${styles.navLink.base}`}> ${
                    isA
                  }


                  </Link>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
