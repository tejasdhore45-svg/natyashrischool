function Videos() {
  const videos = [
    {
      title: "Katanakutuhala Tillana",
      category: "Performance",
      videoId: "LohtSgVL04I"
    },
    {
      title: "Performance | Nawinashree",
      category: "Performance",
      videoId: "DomwRdsi6Eo"
    },
    {
      title: "Bharatanatyam Workshop",
      category: "Workshop",
      videoId: "cr4H62aVSLI"
    },
    {
      title: "Ardhanarishwara Ashtakam",
      category: "Performance",
      videoId: "mZHIsLEWdPU"
    },
    {
      title: "Murlidhar Kauttuwam",
      category: "Performance",
      videoId: "efA2tQx7ye0"
    },
    {
      title: "NatyaShri Student Presentation",
      category: "Students",
      videoId: "AXOHX9adU0Q"
    },
    {
      title: "Performance | Shreya Mankar",
      category: "Performance",
      videoId: "EeFyOf9D9Xg"
    },
    {
      title: "NatyaShri Dance Production",
      category: "Production",
      videoId: "MSlR17ixS6w"
    }
  ];

  return (
    <section className="videos" id="videos">

      <div className="videos-container">

        {/* Heading */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Watch NatyaShri
          </p>

          <h2>
            Video Library
          </h2>

          <div className="section-line"></div>

          <p className="videos-intro">
            Explore performances, workshops, training moments
            and artistic presentations from NatyaShri.
          </p>

        </div>


        {/* Video Grid */}

        <div className="videos-grid">

          {videos.map((video, index) => (
            <article
              className="video-card"
              key={index}
            >

              <div className="video-wrapper">

                <iframe
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  loading="lazy"
                  allow="
                    accelerometer;
                    autoplay;
                    clipboard-write;
                    encrypted-media;
                    gyroscope;
                    picture-in-picture;
                    web-share
                  "
                  allowFullScreen
                ></iframe>

              </div>

              <div className="video-info">

                <span>
                  {video.category}
                </span>

                <h3>
                  {video.title}
                </h3>

              </div>

            </article>
          ))}

        </div>


        {/* YouTube CTA */}

        <div className="youtube-cta">

          <p>
            Discover more performances, workshops and
            artistic moments on the official NatyaShri
            YouTube channel.
          </p>

          <a
            href="https://www.youtube.com/@natyashrischoolofperformin8095"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit YouTube Channel →
          </a>

        </div>

      </div>

    </section>
  );
}

export default Videos;