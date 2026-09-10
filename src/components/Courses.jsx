function Courses() {
  const courses = [
    {
      number: "01",
      title: "Bharatanatyam — Tanjore Bani",
      description:
        "Authentic Bharatanatyam training rooted in the traditional Tanjore Bani."
    },

    {
      number: "02",
      title: "Nattuvangam",
      description:
        "Training in rhythm, tala and the art of conducting Bharatanatyam performances."
    },

    {
      number: "03",
      title: "Examination Coaching",
      description:
        "Structured preparation for Bharatanatyam certification examinations."
    },

    {
      number: "04",
      title: "Margam Training",
      description:
        "Focused training in the traditional Bharatanatyam Margam repertoire."
    },

    {
      number: "05",
      title: "Teacher Training",
      description:
        "Professional development for aspiring Bharatanatyam teachers."
    },

    {
      number: "06",
      title: "Choreography Training",
      description:
        "Creative choreography training grounded in traditional Bharatanatyam vocabulary."
    },

    {
      number: "07",
      title: "Theory Classes",
      description:
        "Learn Bharatanatyam theory, terminology, history, rhythm and related concepts."
    },

    {
      number: "08",
      title: "Individual Training",
      description:
        "One-to-one personalised training designed around the student's learning needs."
    },

    {
      number: "09",
      title: "Group Classes",
      description:
        "Structured group training that develops technique, rhythm and performance confidence."
    },

    {
      number: "10",
      title: "Online & Offline Classes",
      description:
        "Flexible learning options for students seeking online or in-person training."
    }
  ];

  return (
    <section className="courses" id="courses">

      <div className="courses-container">

        {/* Section Heading */}
        <div className="section-heading courses-heading">

          <p className="section-eyebrow">
            Explore Your Path
          </p>

          <h2>
            Courses & Training
          </h2>

          <div className="section-line"></div>

          <p className="courses-intro">
            From foundational learning to advanced artistic development,
            NatyaShri offers structured training for students at different
            stages of their Bharatanatyam journey.
          </p>

        </div>


        {/* Course Grid */}
        <div className="courses-grid">

          {courses.map((course) => (
            <article
              className="course-card"
              key={course.number}
            >

              <span className="course-number">
                {course.number}
              </span>

              <div className="course-card-content">

                <h3>
                  {course.title}
                </h3>

                <p>
                  {course.description}
                </p>

                <a
                  href="#admission"
                  className="course-link"
                >
                  Enquire About Course
                  <span aria-hidden="true">→</span>
                </a>

              </div>

            </article>
          ))}

        </div>


        {/* Fee Information */}
        <div className="course-fee-note">

          <p>
            Fee Details: Contact NatyaShri for the current fee structure.
          </p>

          <a
            href="https://wa.me/919172890424?text=Hello%20NatyaShri%2C%20I%20would%20like%20to%20know%20about%20the%20current%20fee%20structure."
            target="_blank"
            rel="noopener noreferrer"
            className="fee-whatsapp-button"
          >
            Get Fee Details on WhatsApp
          </a>

        </div>

      </div>

    </section>
  );
}

export default Courses;