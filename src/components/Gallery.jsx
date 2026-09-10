import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    // CLASSES
    {
      image: "/images/gallery-1.jpg",
      category: "Classes",
      title: "Bharatanatyam Training"
    },
    {
      image: "/images/gallery-2.jpg",
      category: "Classes",
      title: "Classical Dance Practice"
    },

    // PERFORMANCES
    {
      image: "/images/gallery-3.jpg",
      category: "Performances",
      title: "Classical Performance"
    },
    {
      image: "/images/gallery-4.jpg",
      category: "Performances",
      title: "Stage Performance"
    },

    // STUDENTS
    {
      image: "/images/gallery-5.jpg",
      category: "Students",
      title: "Student Performance"
    },
    {
      image: "/images/gallery-6.jpg",
      category: "Students",
      title: "Student Learning"
    },

    // GURU
    {
      image: "/images/gallery-7.jpg",
      category: "Guru",
      title: "Guru Veenashri"
    },
    {
      image: "/images/gallery-8.jpg",
      category: "Guru",
      title: "Guru Veenashri Teaching"
    },

    // WORKSHOPS
    {
      image: "/images/gallery-9.jpg",
      category: "Workshops",
      title: "Classical Dance Workshop"
    },
    {
      image: "/images/gallery-10.jpg",
      category: "Workshops",
      title: "Bharatanatyam Workshop"
    },

    // EVENTS
    {
      image: "/images/gallery-11.jpg",
      category: "Events",
      title: "Cultural Program"
    },
    {
      image: "/images/gallery-12.jpg",
      category: "Events",
      title: "NatyaShri Event"
    }
  ];

  const categories = [
    "All",
    "Classes",
    "Performances",
    "Students",
    "Guru",
    "Workshops",
    "Events"
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === activeCategory
        );

  return (
    <section className="gallery" id="gallery">

      <div className="gallery-container">

        {/* ================================
            HEADING
        ================================= */}

        <div className="section-heading">

          <p className="section-eyebrow">
            Moments of NatyaShri
          </p>

          <h2>
            Gallery
          </h2>

          <div className="section-line"></div>

          <p className="gallery-intro">
            A glimpse into the learning, performances,
            workshops and artistic journey of NatyaShri.
          </p>

        </div>


        {/* ================================
            FEATURED DIVINE IMAGE
            NOT PART OF ANY CATEGORY
        ================================= */}

        <div className="gallery-featured">

          <img
            src="/images/god.jpg"
            alt="Divine inspiration of NatyaShri"
            loading="lazy"
          />

          <div className="gallery-featured-overlay">

            <span>
              Divine Inspiration
            </span>

            <h3>
              The Spirit of Natya
            </h3>

          </div>

        </div>


        {/* ================================
            CATEGORY BUTTONS
        ================================= */}

        <div className="gallery-categories">

          {categories.map((category) => (

            <button
              key={category}
              className={
                activeCategory === category
                  ? "active"
                  : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>

          ))}

        </div>


        {/* ================================
            GALLERY GRID
        ================================= */}

        <div className="gallery-grid">

          {filteredItems.map((item, index) => (

            <article
              className="gallery-item"
              key={`${item.category}-${index}`}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
              />

              <div className="gallery-overlay">

                <span>
                  {item.category}
                </span>

                <h3>
                  {item.title}
                </h3>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;