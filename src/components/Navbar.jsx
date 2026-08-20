import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Brand */}
        <a
          href="#top"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="NatyaShri School of Performing Arts"
        >
          <span className="brand-name">
            NATYASHRI
          </span>

          <span className="brand-subtitle">
            School of Performing Arts
          </span>
        </a>


        {/* Navigation */}
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

          <a href="#courses" onClick={closeMenu}>
            Courses
          </a>

          <a href="#gallery" onClick={closeMenu}>
            Gallery
          </a>

          <a href="#videos" onClick={closeMenu}>
            Videos
          </a>

          <a href="#events" onClick={closeMenu}>
            Events
          </a>

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
          </a>
        </nav>


        {/* Desktop CTA */}
        <a
          href="#admission"
          className="navbar-button"
        >
          Enquire Now
        </a>


        {/* Mobile Menu */}
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
    </header>
  );
}

export default Navbar;