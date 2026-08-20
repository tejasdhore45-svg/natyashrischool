function Locations() {
  const locations = [
    {
      number: "01",
      title: "Sindhu Vihar",
      address: [
        "28 L Sindhu Vihar, Mule, Solapur",
        "Near Celebration Hotel",
        "Maharashtra, India"
      ],
      mapLink: "https://share.google/dbhVgrYHDbtEzEYu3"
    },
    {
      number: "02",
      title: "Kasar Society",
      address: [
        "Ajit Kasturkar Building, Kasar Society",
        "Near Old IMS College",
        "Solapur, Maharashtra, India"
      ],
      mapLink:
        "https://www.google.com/maps/place/17%C2%B037'40.4%22N+75%C2%B054'37.4%22E/@17.6278941,75.9078103,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.6278941!4d75.9103852"
    }
  ];

  const phoneNumber = "+919172890424";

  return (
    <section className="locations" id="locations">

      <div className="locations-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Visit NatyaShri
          </p>

          <h2>
            Our Locations
          </h2>

          <div className="section-line"></div>

          <p className="locations-intro">
            Find your nearest NatyaShri learning space and
            connect with the academy for current batch details.
          </p>

        </div>


        {/* Location Cards */}

        <div className="locations-grid">

          {locations.map((location) => (
            <article
              className="location-card"
              key={location.number}
            >

              <span className="location-number">
                {location.number}
              </span>

              <h3>
                {location.title}
              </h3>


              <div className="location-address">

                {location.address.map((line, index) => (
                  <p key={index}>
                    {line}
                  </p>
                ))}

              </div>


              {/* Actions */}

              <div className="location-actions">

                <a
                  href={location.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-button location-button-primary"
                >
                  View on Google Maps
                </a>

                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                    location.address.join(", ")
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-button"
                >
                  Get Directions
                </a>

                <a
                  href={`tel:${phoneNumber}`}
                  className="location-button"
                >
                  Call
                </a>

                <a
                  href={`https://wa.me/${phoneNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="location-button"
                >
                  WhatsApp
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Locations;