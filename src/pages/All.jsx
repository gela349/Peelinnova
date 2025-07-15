import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Sdgs from "./SDGs";
import Team from "./Team";
import VisionMission from "./VisionMission";

const All = () => {
  return (
    <div className="">
    <Hero />
    <Navbar />
    <Product />
    <About />
    <Sdgs />
    <Team />
    <VisionMission />
    <Contact />
    <Footer /> 

    </div>
  );
}

export default All;