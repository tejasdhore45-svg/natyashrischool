function Testimonials() {
  const testimonials = [
    {
      quote:
        "Natyashri is a wonderful place to learn classical dance. My daughters are very happy with their learning experience and the warm, friendly guidance of Veenashri Ma'am.",
      name: "Samyaka Yambal",
      role: "Parent",
      rating: 5
    },
    {
      quote:
        "An amazing dance school with a supportive and motivating instructor. You can learn, perform and gain valuable knowledge. Highly recommended.",
      name: "Rachana Kulkarni",
      role: "Student",
      rating: 5
    },
    {
      quote:
        "I have been learning Bharatanatyam with Veenashri Ma'am for three years. Her individual attention and teaching method make learning the steps easier and more meaningful.",
      name: "Smita Prasad",
      role: "Student",
      rating: 5
    },
    {
      quote:
        "A perfect place to learn the beautiful and ancient art of Bharatanatyam. I am truly happy to be a part of the NatyaShri family.",
      name: "Shreya Mankar",
      role: "Student",
      rating: 5
    },
    {
      quote:
        "Even as a distance learner, I never felt a difference between online and physical classes. My journey with Guru Veenashri Ma'am has been truly meaningful.",
      name: "Priyanka Raja",
      role: "Adult Learner",
      rating: 5
    },
    {
      quote:
        "A lovely and friendly learning environment. My daughter has improved beautifully under Veenashri Ma'am's guidance.",
      name: "Sunayana Halnor",
      role: "Parent",
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">

      <div className="testimonials-container">

        {/* Section Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Experiences at NatyaShri
          </p>

          <h2>
            What Our Community Says
          </h2>

          <div className="section-line"></div>

          <p className="testimonials-intro">
            Hear from students and families who have experienced
            the learning, guidance and culture of NatyaShri.
          </p>

        </div>


        {/* Testimonials */}

        <div className="testimonials-grid">

          {testimonials.map((testimonial, index) => (
            <article
              className="testimonial-card"
              key={index}
            >

              {/* Quote */}

              <div className="testimonial-mark">
                “
              </div>


              {/* Review */}

              <p className="testimonial-quote">
                {testimonial.quote}
              </p>


              {/* Rating */}

              <div className="testimonial-rating">
                {"★".repeat(testimonial.rating)}
              </div>


              {/* Author */}

              <div className="testimonial-author">

                <strong>
                  {testimonial.name}
                </strong>

                <span>
                  {testimonial.role}
                </span>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;