function Hero() {
  return (
    <section className="hero" id="top">

      {/* Background */}
      <div className="hero-background"></div>

      {/* Cinematic Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">

        {/* Sanskrit */}
        <p className="hero-sanskrit">
          नृत्याधीनं जगत्सर्वम्
        </p>

        {/* Gold Divider */}
        <div className="hero-line"></div>

        {/* Main Heading */}
        <h1 className="hero-title">
          NatyaShri
          <span>School of Performing Arts</span>
        </h1>

        {/* Tagline */}
        <p className="hero-tagline">
          Preserving Tradition. Nurturing Artists. Creating Excellence.
        </p>

        {/* Description */}
        <p className="hero-description">
          Authentic Bharatanatyam training in the Tanjore Bani,
          guided by Guru Veenashri Vijaykumar Alange.
        </p>

        {/* CTA Buttons */}
        <div className="hero-actions">

          <a
            href="#admission"
            className="hero-button hero-button-primary"
          >
            Enquire for Admission
          </a>

          <a
            href="#courses"
            className="hero-button hero-button-secondary"
          >
            Explore Courses
          </a>

        </div>

      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="hero-scroll">
        <span>Scroll to Explore</span>
        <span className="scroll-arrow">↓</span>
      </a>

    </section>
  );
}

export default Hero;