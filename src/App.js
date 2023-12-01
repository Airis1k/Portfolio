import "./App.css";
import SideNavigation from "./components/SideNavigation";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import AbilitiesSection from "./components/AbilitiesSection";
import ServicesSection from "./components/ServicesSection";
import MyWorksSection from "./components/MyWorksSection";
import CodingInfo from "./components/CodingInfo";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import BackToTopBtn from "./components/BackToTopBtn";
import Header from "./components/Header";

function App() {
   return (
      <div className="App">
         <Header />
         <SideNavigation />
         <HeroSection />
         <AboutMeSection />
         <AbilitiesSection />
         <ServicesSection />
         <MyWorksSection />
         <CodingInfo />
         <ContactMeSection />
         <Footer />
         <BackToTopBtn />
      </div>
   );
}

export default App;
