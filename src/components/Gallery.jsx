import { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [

    // PERFORMANCES
    {
      image: "/images/Performance1.webp",
      category: "Performances",
      title: "Classical Performance"
    },
    {
      image: "/images/Performance2.webp",
      category: "Performances",
      title: "Stage Performance"
    },
    {
      image: "/images/Performance3.webp",
      category: "Performances",
      title: "Student Performance"
    },
    {
      image: "/images/Performance4.webp",
      category: "Performances",
      title: "Student Performance"
    },
    

    // STUDENTS
    {
      image: "/images/gallery-1.jpg",
      category: "Students",
      title: "NatyaShri Student"
    },
     {
      image: "/images/gallery-2.jpg",
      category: "Students",
      title: "NatyaShri Student"
    },
     {
      image: "/images/gallery-5.jpg",
      category: "Students",
      title: "NatyaShri Student"
    },
     {
      image: "/images/gallery-9.jpg",
      category: "Students",
      title: "NatyaShri Student"
    },

    // GURU
    {
      image: "/images/guru-section1.jpg",
      category: "Guru",
      title: "Guru Veenashri"
    },
    {
      image: "/images/guru-section2.jpg",
      category: "Guru",
      title: "Guru Veenashri"
    },
    {
      image: "/images/guru-section3.jpg",
      category: "Guru",
      title: "Guru Veenashri"
    },
    {
      image: "/images/guru-section4.jpg",
      category: "Guru",
      title: "Guru Veenashri"
    },
    {
      image: "/images/guru-section5.jpg",
      category: "Guru",
      title: "Guru Veenashri Teaching"
    },

    // WORKSHOPS
    {
      image: "/images/Workshop1.webp",
      category: "Workshops",
      title: "Classical Dance Workshop"
    },
    {
      image: "/images/Workshop2.webp",
      category: "Workshops",
      title: "Bharatanatyam Workshop"
    },
    {
      image: "/images/Workshop3.webp",
      category: "Workshops",
      title: "Classical Dance Workshop"
    },
    {
      image: "/images/Workshop4.webp",
      category: "Workshops",
      title: "Bharatanatyam Workshop"
    },
    {
      image: "/images/Workshop5.webp",
      category: "Workshops",
      title: "Dance Workshop"
    },
    
    {
      image: "/images/Workshop6.webp",
      category: "Workshops",
      title: "Dance Workshop"
    },
    {
      image: "/images/Workshop7.webp",
      category: "Workshops",
      title: "Bharatanatyam Workshop"
    },
    {
      image: "/images/Workshop8.webp",
      category: "Workshops",
      title: "Classical Dance Workshop"
    },
    {
      image: "/images/Workshop9.webp",
      category: "Workshops",
      title: "Dance Workshop"
    },
   {
      image: "/images/Workshop10.webp",
      category: "Workshops",
      title: "Dance Workshop"
    },

    


    // CLASSES
    {
      image: "/images/classes1.jpg",
      category: "Classes",
      title: "Bharatanatyam Class"
    },
    {
      video: "/images/classes2.mp4",
      category: "Classes",
      title: "Bharatanatyam Training"
    },
    {
      video: "/images/classes3.mp4",
      category: "Classes",
      title: "Classical Dance Practice"
    },
   
    {
      video: "/images/classes5.mp4",
      category: "Classes",
      title: "Dance Learning Session"
    },
  ];

  const categories = [
    "All",
    "Classes",
    "Performances",
    "Students",
    "Guru",
    "Workshops",
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

        {/* HEADING */}
        <div className="section-heading">

          <p className="section-eyebrow">
            Moments of NatyaShri
          </p>

          <h2>Gallery</h2>

          <div className="section-line"></div>

          <p className="gallery-intro">
            A glimpse into the learning, performances,
            workshops and artistic journey of NatyaShri.
          </p>

        </div>

        {/* FEATURED DIVINE IMAGE */}
        <div className="gallery-featured">

          <img
            src="/images/god.jpg"
            alt="Divine inspiration of NatyaShri"
            loading="lazy"
          />

          <div className="gallery-featured-overlay">

            <span>Divine Inspiration</span>

            <h3>The Spirit of Natya</h3>

          </div>

        </div>

        {/* CATEGORY BUTTONS */}
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

        {/* GALLERY GRID */}
        <div className="gallery-grid">

          {filteredItems.map((item, index) => (

            <article
              className="gallery-item"
              key={`${item.category}-${index}`}
            >

              {/* DISPLAY VIDEO OR IMAGE */}
              {item.video ? (

                <video
                  controls
                  playsInline
                  preload="metadata"
                  className="gallery-video"
                >
                  <source
                    src={item.video}
                    type="video/mp4"
                  />

                  Your browser does not support video playback.

                </video>

              ) : (

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

              )}

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
