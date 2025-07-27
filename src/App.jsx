import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Phones from "./components/Phones";
import Dashboards from "./components/Dashboards";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import FeatureSection from "./components/FeatureSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Phones />
        <Dashboards />
        <FeatureSection />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default App
