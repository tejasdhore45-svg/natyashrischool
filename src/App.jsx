import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Guru from "./components/Guru";
import Courses from "./components/Courses";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Admission from "./components/Admission";
import WhatsAppButton from "./components/WhatsAppButton";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <Introduction />
        <Guru />
        <Courses />
         <Gallery />
         <Videos/>
         <Testimonials/>
         <Locations/>
         <Contact/>
          <WhatsAppButton/>
         <Admission/>
         <Chatbot/>
         <Footer/>
      </main>
    </>
  );
}

export default App;