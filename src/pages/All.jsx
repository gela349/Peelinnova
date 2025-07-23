import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";
import Sdgs from "./Area";
import Team from "./Team";
// import VisionMission from "./VisionMission";
import Partners from "./Partners"; // if you have a Partners page

const All = () => {
  return (
    <div className="">
    <Hero />
    <Navbar />
    <Product />
    <About />
    <Sdgs />
    <Team />
    <Partners />
    {/* <VisionMission /> */}
    <Contact />
    <Footer />
     
    
    </div>
  );
}

export default All;