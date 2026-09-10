function Contact() {
  const phoneNumber = "+919172890424";

  const whatsappMessage = encodeURIComponent(
    "Hello NatyaShri, I would like to enquire about Bharatanatyam classes."
  );

  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Begin Your Journey
          </p>

          <h2>
            Contact NatyaShri
          </h2>

          <div className="section-line"></div>

          <p className="contact-intro">
            Have questions about courses, batches, admissions
            or fees? Connect with NatyaShri directly.
          </p>

        </div>


        {/* Contact Grid */}

        <div className="contact-grid">

          {/* Phone */}

          <div className="contact-item">

            <span className="contact-label">
              Phone
            </span>

            <a href={`tel:${phoneNumber}`}>
              +91 9172890424
            </a>

          </div>


          {/* WhatsApp */}

          <div className="contact-item">

            <span className="contact-label">
              WhatsApp
            </span>

            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat with NatyaShri
            </a>

          </div>


          {/* Email */}

          <div className="contact-item">

            <span className="contact-label">
              Email
            </span>

            <a href="mailto:natyashrischoolofdance@gmail.com">
              natyashrischoolofdance@gmail.com
            </a>

          </div>


          {/* Fees */}

          <div className="contact-item">

            <span className="contact-label">
              Fee Details
            </span>

            <p>
              Contact NatyaShri for the current fee structure.
            </p>

            <a
              href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
                "Hello NatyaShri, I would like to know the current fee structure."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-fee-link"
            >
              Get Fee Details on WhatsApp →
            </a>

          </div>

        </div>


        {/* CTA */}

        <div className="contact-cta">

          <div>

            <span>
              Ready to begin?
            </span>

            <h3>
              Enquire about admission.
            </h3>

          </div>

          <a
            href="#admission"
            className="contact-cta-button"
          >
            Enquire for Admission →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Contact;