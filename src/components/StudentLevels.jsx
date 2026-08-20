function StudentLevels() {
  const levels = [
    {
      number: "01",
      title: "Beginner",
      description:
        "For students starting their Bharatanatyam journey and building strong foundations."
    },

    {
      number: "02",
      title: "Intermediate",
      description:
        "For students developing stronger technique, rhythm, expression and repertoire."
    },

    {
      number: "03",
      title: "Advanced",
      description:
        "For serious artistic development and deeper exploration of Bharatanatyam."
    },

    {
      number: "04",
      title: "Alankar Special Batch",
      description:
        "Focused preparation for students pursuing advanced examination levels."
    },

    {
      number: "05",
      title: "Weekend Margam Batch",
      description:
        "Focused Margam training for students seeking structured repertoire development."
    },

    {
      number: "06",
      title: "Teacher Training Batch",
      description:
        "Training designed for aspiring Bharatanatyam teachers and practitioners."
    },

    {
      number: "07",
      title: "Nattuvangam Basic Batch",
      description:
        "Foundation-level training in rhythm, tala and Nattuvangam."
    }
  ];

  return (
    <section className="student-levels" id="levels">

      <div className="student-levels-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Find Your Level
          </p>

          <h2>
            Learning Pathways
          </h2>

          <div className="section-line"></div>

          <p className="levels-intro">
            Structured learning opportunities for students at
            different stages of their Bharatanatyam journey.
          </p>

        </div>


        {/* Levels */}

        <div className="levels-grid">

          {levels.map((level) => (
            <article
              className="level-card"
              key={level.number}
            >

              <span className="level-number">
                {level.number}
              </span>

              <h3>
                {level.title}
              </h3>

              <p>
                {level.description}
              </p>

              <a
                href="#admission"
                className="level-link"
              >
                Enquire
                <span>→</span>
              </a>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default StudentLevels;