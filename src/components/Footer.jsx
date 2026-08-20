function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">

          <span className="footer-eyebrow">
            NatyaShri
          </span>

          <h2>
            School of Performing Arts
          </h2>

          <p className="footer-sanskrit">
            नृत्याधीनं जगत्सर्वम्
          </p>

          <p className="footer-description">
            Preserving tradition, nurturing artists and
            creating excellence through authentic
            Bharatanatyam education.
          </p>

        </div>


        {/* Explore */}
        <div className="footer-column">

          <h3>Explore</h3>

          <a href="#about">About</a>
          <a href="#guru">Guru</a>
          <a href="#courses">Courses</a>
          <a href="#gallery">Gallery</a>
          <a href="#videos">Videos</a>
          <a href="#events">Events</a>

        </div>


        {/* Admissions */}
        <div className="footer-column">

          <h3>Admissions</h3>

          <a href="#levels">Student Levels</a>
          <a href="#classes">Classes</a>
          <a href="#affiliations">Examination Boards</a>
          <a href="#admission">Admission Enquiry</a>
          <a href="#contact">Contact</a>

        </div>


        {/* Contact */}
        <div className="footer-column footer-contact">

          <h3>Connect</h3>

          <a href="tel:+919172890424">
            +91 9172890424
          </a>

          <a href="mailto:natyashrischoolofdance@gmail.com">
            natyashrischoolofdance@gmail.com
          </a>

          <p>
            Solapur, Maharashtra, India
          </p>

          <a
            href="https://wa.me/919172890424"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
          >
            WhatsApp Enquiry →
          </a>

        </div>

      </div>


      {/* Social */}
      <div className="footer-social">

        <div className="footer-social-heading">
          <span>Stay Connected</span>

          <h3>
            Follow the NatyaShri Journey
          </h3>
        </div>

        <div className="social-links">

          <a
            href="https://www.instagram.com/natyashri_veena/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100080369293172"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>

          <a
            href="https://www.youtube.com/@natyashrischoolofperformin8095"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>

        </div>

      </div>


      {/* Bottom */}
      <div className="footer-bottom">

        <p>
          © {currentYear} NatyaShri School of Performing Arts.
          All rights reserved.
        </p>

        <p className="footer-tagline">
          Bharatanatyam · Tanjore Bani
        </p>

        <div className="footer-legal">

          <a href="#privacy">
            Privacy Policy
          </a>

          <a href="#terms">
            Terms & Conditions
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;