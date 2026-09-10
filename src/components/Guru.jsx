function Guru() {
  return (
    <section className="guru" id="guru">

      <div className="guru-container">

        {/* Section Heading */}
        <div className="section-heading guru-heading">

          <p className="section-eyebrow">
            The Guiding Presence
          </p>

          <h2>
            Meet the Guru
          </h2>

          <div className="section-line"></div>

        </div>


        {/* Guru Content */}
        <div className="guru-grid">

          {/* Guru Image */}
          <div className="guru-image">

            <img
              src="/images/guru-placeholder.jpg"
              alt="Guru Veenashri Vijaykumar Alange"
            />

          </div>


          {/* Guru Information */}
          <div className="guru-content">

            <p className="guru-label">
              Founder & Guru
            </p>

            <h3>
              Guru Veenashri
              <span>Vijaykumar Alange</span>
            </h3>

            <p className="guru-introduction">
              Guru Veenashri Vijaykumar Alange is a passionate
              Bharatanatyam performer, choreographer and teacher
              dedicated to preserving and promoting the rich
              tradition of Bharatanatyam in the Tanjore Bani.
            </p>

            <p>
              Through NatyaShri School of Performing Arts,
              she trains students with equal importance to
              practical dance, theory, rhythm, expression
              and stage performance.
            </p>


            {/* Qualifications */}
            <div className="guru-details">

              <h4>
                Qualifications
              </h4>

              <ul>
                <li>M.A. in Bharatanatyam</li>
                <li>Alankar in Bharatanatyam</li>
                <li>Diploma in Music</li>
                <li>Diploma in Nattuvangam</li>
                <li>Engineering Graduate</li>
              </ul>

            </div>


            {/* Experience */}
            <div className="guru-details">

              <h4>
                Experience & Achievements
              </h4>

              <ul>
                <li>
                  Founder & Director of NatyaShri School
                  of Performing Arts
                </li>

                <li>
                  Nrutya Vibhushan Awardee
                </li>

                <li>
                  Conducted numerous workshops and
                  cultural programs
                </li>

                <li>
                  Choreographer of the unique Navaratna
                  Classical Dance Production
                </li>

                <li>
                  Students regularly appear for
                  certification examinations and
                  stage performances
                </li>
              </ul>

            </div>


            {/* CTA */}
            <a
              href="#admission"
              className="guru-button"
            >
              Learn Under Guru
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Guru;