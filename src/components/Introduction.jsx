function Introduction() {
  return (
    <section className="introduction" id="about">

      <div className="introduction-container">

        {/* Section Heading */}
        <div className="section-heading">

          <p className="section-eyebrow">
            The NatyaShri Philosophy
          </p>

          <h2>
            Where Tradition Meets Excellence
          </h2>

          <div className="section-line"></div>

        </div>


        {/* Main Content */}
        <div className="introduction-grid">

          {/* Image */}
          <div className="introduction-image">

            <img
              src="/images/introduction-placeholder.jpg"
              alt="Bharatanatyam dancer performing"
            />

          </div>


          {/* Text */}
          <div className="introduction-content">

            <p className="introduction-lead">
              NatyaShri School of Performing Arts is dedicated
              to preserving and promoting the rich tradition of
              Bharatanatyam through systematic and authentic training.
            </p>

            <p>
              Guided by Guru Veenashri Vijaykumar Alange,
              students are nurtured through a balanced approach
              that combines practical dance, theory, rhythm,
              expression and stage performance.
            </p>

            <p>
              The academy provides learning opportunities for
              students at different stages of their artistic
              journey, encouraging discipline, confidence,
              cultural understanding and artistic excellence.
            </p>


            {/* Training Areas */}
            <div className="training-points">

              <span>Practical Dance</span>
              <span>Theory</span>
              <span>Rhythm</span>
              <span>Expression</span>
              <span>Nattuvangam</span>
              <span>Choreography</span>
              <span>Stage Performance</span>
              <span>Examination Preparation</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Introduction;