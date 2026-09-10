import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="navbar-shell">

          {/* ========================================
              LOGO
          ======================================== */}

          <a
            href="#top"
            className="navbar-brand"
            onClick={handleLogoClick}
            aria-label="NatyaShri School of Dance - Home"
          >
            <div className="logo-glow"></div>

            <img
              src="/images/natyashri-logo.png"
              alt="NatyaShri School of Dance"
              className="navbar-logo"
            />
          </a>


          {/* ========================================
              NAVIGATION
          ======================================== */}

          <nav
            id="main-navigation"
            className={`navbar-links ${
              menuOpen ? "navbar-links-open" : ""
            }`}
            aria-label="Main navigation"
          >

            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <span className="nav-divider">✦</span>

            <a href="#courses" onClick={closeMenu}>
              Courses
            </a>

            <span className="nav-divider">✦</span>

            <a href="#gallery" onClick={closeMenu}>
              Gallery
            </a>

            <span className="nav-divider">✦</span>

            <a href="#videos" onClick={closeMenu}>
              Videos
            </a>

            <span className="nav-divider">✦</span>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>


            {/* Mobile CTA */}

            <a
              href="#admission"
              className="mobile-nav-button"
              onClick={closeMenu}
            >
              Enquire Now
              <span>→</span>
            </a>

          </nav>


          {/* ========================================
              DESKTOP CTA
          ======================================== */}

          <a
            href="#admission"
            className="navbar-button"
          >
            <span>Enquire Now</span>
            <span className="cta-arrow">→</span>
          </a>


          {/* ========================================
              MOBILE MENU
          ======================================== */}

          <button
            type="button"
            className={`navbar-menu-button ${
              menuOpen ? "menu-open" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;