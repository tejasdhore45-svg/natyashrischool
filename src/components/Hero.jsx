function Hero() {
  return (
    <section className="hero" id="top">

      {/* Background Image */}
      <div className="hero-background"></div>

      {/* Cinematic Overlay */}
      <div className="hero-overlay"></div>

      {/* Premium Ambient Glow */}
      <div className="hero-glow"></div>

      {/* Hero Content */}
      <div className="hero-content">

        <p className="hero-sanskrit">
          नृत्याधीनं जगत्सर्वम्
        </p>

        <div className="hero-line">
          <span></span>
          <i>✦</i>
          <span></span>
        </div>

        <h1 className="hero-title">
          NatyaShri
          <span>School of Performing Arts</span>
        </h1>

        <p className="hero-tagline">
          Preserving Tradition. Nurturing Artists. Creating Excellence.
        </p>

        <p className="hero-description">
          Authentic Bharatanatyam training in the Tanjore Bani,
          guided by Guru Veenashri Vijaykumar Alange.
        </p>

        <div className="hero-actions">

          <a
            href="#admission"
            className="hero-button hero-button-primary"
          >
            <span>Enquire for Admission</span>
            <span className="hero-button-arrow">→</span>
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
      <a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to explore"
      >
        <span>Scroll to Explore</span>
        <span className="scroll-arrow">↓</span>
      </a>

    </section>
  );
}

export default Hero;