function Affiliations() {
  const affiliations = [
    {
      number: "01",
      name: "Akhil Bhartiya Gandharva Mahavidyalaya Mandal",
      location: "Mumbai"
    },
    {
      number: "02",
      name: "Suro Bharati",
      location: "Kolkata"
    },
    {
      number: "03",
      name: "Bridge Academy",
      location: "Chennai"
    }
  ];

  return (
    <section className="affiliations" id="affiliations">

      <div className="affiliations-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Academic Recognition
          </p>

          <h2>
            Affiliated Examination Boards
          </h2>

          <div className="section-line"></div>

          <p className="affiliations-intro">
            NatyaShri supports structured learning and
            certification-oriented education through the
            examination organizations associated with the academy.
          </p>

        </div>


        {/* Affiliations */}

        <div className="affiliations-grid">

          {affiliations.map((affiliation) => (
            <article
              className="affiliation-card"
              key={affiliation.number}
            >

              <span className="affiliation-number">
                {affiliation.number}
              </span>

              <div>

                <h3>
                  {affiliation.name}
                </h3>

                <p>
                  {affiliation.location}
                </p>

              </div>

            </article>
          ))}

        </div>


        {/* Note */}

        <div className="affiliations-note">

          <p>
            Examination and certification details may vary
            by course and level. Contact NatyaShri for current
            information.
          </p>

          <a
            href="#contact"
            className="affiliations-link"
          >
            Ask About Certification →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Affiliations;