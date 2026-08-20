function AgeAndClasses() {
  const ageGroups = [
    "Children — 5+ Years",
    "Teenagers",
    "Adults",
    "Housewives",
    "Working Professionals"
  ];

  const classFormats = [
    {
      title: "Online Classes",
      description:
        "Flexible online learning options with morning and evening batches."
    },
    {
      title: "Offline Classes",
      description:
        "In-person training with scheduled weekend batches."
    },
    {
      title: "Individual Training",
      description:
        "Personalised training with customised timings where available."
    }
  ];

  return (
    <section className="age-classes" id="classes">

      <div className="age-classes-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Find Your Way to Learn
          </p>

          <h2>
            Learning for Different Journeys
          </h2>

          <div className="section-line"></div>

        </div>


        {/* Age Groups */}

        <div className="age-groups">

          <div className="age-content">

            <h3>
              Who Can Join?
            </h3>

            <p>
              NatyaShri provides learning opportunities for
              students and learners at different stages of life
              and artistic experience.
            </p>

          </div>

          <div className="age-list">

            {ageGroups.map((group, index) => (
              <div
                className="age-item"
                key={index}
              >
                <span>0{index + 1}</span>
                <p>{group}</p>
              </div>
            ))}

          </div>

        </div>


        {/* Class Formats */}

        <div className="class-formats">

          <div className="class-format-heading">

            <p className="section-eyebrow">
              Flexible Learning
            </p>

            <h3>
              Choose Your Class Format
            </h3>

          </div>


          <div className="format-grid">

            {classFormats.map((format, index) => (
              <article
                className="format-card"
                key={index}
              >

                <span className="format-number">
                  0{index + 1}
                </span>

                <h4>
                  {format.title}
                </h4>

                <p>
                  {format.description}
                </p>

                <a
                  href="#admission"
                  className="format-link"
                >
                  Find Your Ideal Batch →
                </a>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AgeAndClasses;