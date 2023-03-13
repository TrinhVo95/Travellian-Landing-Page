import Header from "./components/Header";
import PopularDestination from "./components/PopularDestination";
import SpecialOffer from "./components/SpecialOffer";
import OurBlog from "./components/OurBlog";
import TripPlanners from "./components/TripPlanners";
import Gallery from "./components/Gallery";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <PopularDestination />
      <SpecialOffer />
      <OurBlog />
      <TripPlanners />
      <Gallery />
      <Experiences />
      <Footer />
    </>
  );
};

export default App;
