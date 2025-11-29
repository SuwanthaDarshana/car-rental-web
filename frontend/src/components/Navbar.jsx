import React, { useCallback, useState } from "react";
import { navbarStyles as styles } from "../assets/dummyStyles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logocar.png";
import { FaSignOutAlt, FaUser } from "react-icons/fa";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("authToken")
  );

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/cars", label: "Cars" },
    { to: "/contact", label: "Contact" },
  ];

  const handleLogout = useCallback(() =>{
    localStorage.removeItem("authToken");
    setIsLoggedIn(false);
    navigate("/", { replace: true });
    setIsOpen(false);
  }, [navigate]);

  const isActive = (path) => {
    if (path == "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className={`${styles.nav.base} 
    ${scrolled ? styles.nav.scrolled : styles.nav.notScrolled}`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div
            className={`${styles.floatingNav.base}${
              scrolled
                ? styles.floatingNav.scrolled
                : styles.floatingNav.notScrolled
            }`}
            role="region"
            aria-roledescription="navigation"
          >
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="flex items-center">
                <div className={`${styles.logoContainer}`}>
                  <img
                    src={logo}
                    alt="logo"
                    className="h-[1em] w-auto block"
                    style={{ display: "block", objectFit: "contain" }}
                  />
                  <span className={styles.logoText}>CarBook</span>
                </div>
              </Link>
              <div className={styles.navLinksContainer}>
                <div className={styles.navLinksInner}>
                  {navLinks.map((link, index) => (
                    <React.Fragment key={link.to}>
                      <Link
                        to={link.to}
                        className={`${styles.navLink.base} ${
                          isActive(link.to)
                            ? styles.navLink.active
                            : styles.navLink.inactive
                        }`}
                      >
                        {link.label}
                      </Link>
                      {index < navLinks.length - 1 && (
                        <div className={styles.separator} aria-hidden="true" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className={styles.userActions}>
                {isLoggedIn ?(
                  <button onClick={handleLogout} className={styles.authButton} aria-label="Logout">
                    <FaSignOutAlt className="text-base"/>
                    <span className={styles.authText}>Logout</span>
                  </button>
                ):(
                  <button to='/login' className={styles.authButton} aria-label="Login">
                    <FaUser className="text-base"/>
                    <span className={styles.authText}>Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
