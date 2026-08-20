function Events() {
  const events = [
    {
      date: "Event Date",
      title: "Navaratna Classical Dance Production",
      type: "Classical Production",
      description:
        "A unique classical dance production presented by NatyaShri."
    },
    {
      date: "Event Date",
      title: "Bharatanatyam Workshop",
      type: "Workshop",
      description:
        "A focused learning experience centred around Bharatanatyam."
    },
    {
      date: "Event Date",
      title: "Cultural Performance",
      type: "Performance",
      description:
        "A classical presentation showcasing the artistic journey of NatyaShri students."
    }
  ];

  return (
    <section className="events" id="events">

      <div className="events-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Experience the Art
          </p>

          <h2>
            Events & Performances
          </h2>

          <div className="section-line"></div>

          <p className="events-intro">
            Discover performances, workshops and cultural
            experiences presented by NatyaShri.
          </p>

        </div>


        {/* Events */}

        <div className="events-list">

          {events.map((event, index) => (
            <article
              className="event-item"
              key={index}
            >

              <div className="event-number">
                0{index + 1}
              </div>


              <div className="event-date">
                {event.date}
              </div>


              <div className="event-content">

                <span>
                  {event.type}
                </span>

                <h3>
                  {event.title}
                </h3>

                <p>
                  {event.description}
                </p>

              </div>


              <a
                href="#contact"
                className="event-link"
              >
                Enquire →
              </a>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Events;