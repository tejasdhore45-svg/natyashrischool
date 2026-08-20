function Achievements() {
  const achievements = [
    {
      number: "01",
      title: "Examination Achievements",
      description:
        "Structured preparation for students appearing for Bharatanatyam certification examinations."
    },
    {
      number: "02",
      title: "Certifications",
      description:
        "Certification-oriented learning through the examination pathways associated with NatyaShri."
    },
    {
      number: "03",
      title: "Stage Performances",
      description:
        "Opportunities for students to develop confidence through classical stage performances."
    },
    {
      number: "04",
      title: "Workshops",
      description:
        "Learning experiences through workshops and focused artistic training."
    },
    {
      number: "05",
      title: "Cultural Events",
      description:
        "Participation in cultural programs that encourage artistic expression and discipline."
    },
    {
      number: "06",
      title: "Student Milestones",
      description:
        "Celebrating the individual progress and artistic development of students."
    }
  ];

  return (
    <section className="achievements" id="achievements">

      <div className="achievements-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            The Journey of Learning
          </p>

          <h2>
            Student Achievements
          </h2>

          <div className="section-line"></div>

          <p className="achievements-intro">
            Every stage of a student's journey represents
            dedication, discipline and artistic growth.
          </p>

        </div>


        {/* Achievement Grid */}

        <div className="achievements-grid">

          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.number}
            >

              <span className="achievement-number">
                {achievement.number}
              </span>

              <h3>
                {achievement.title}
              </h3>

              <p>
                {achievement.description}
              </p>

              <div className="achievement-line"></div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Achievements;