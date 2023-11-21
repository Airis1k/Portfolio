import "./App.css";
import SideNavigation from "./components/SideNavigation";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ServicesSection from "./components/ServicesSection";
import MyWorksSection from "./components/MyWorksSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";

function App() {
   return (
      <div className="App">
         <SideNavigation />
         <HeroSection />
         <AboutMeSection />
         {/* <ServicesSection /> */}
         {/* <MyWorksSection /> */}
         {/* <ContactMeSection /> */}
         {/* <Footer /> */}
      </div>
   );
}

export default App;
