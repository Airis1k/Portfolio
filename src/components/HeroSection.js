import { useEffect, useState } from "react";
import ArrowsDown from "../assets/ArrowsDown.svg";
import { HashLink } from "react-router-hash-link";

export default function HeroSection() {
   const [profession, setProfession] = useState("Web Developer");

   useEffect(() => {
      const interval = setInterval(() => {
         profession === "Web Developer" ? setProfession("Freelancer") : setProfession("Web Developer");
      }, 2000);

      return () => clearInterval(interval);
   }, [profession]);

   return (
      <section id="home" className="hero-section">
         <div className="content">
            <h1>Airingas <span className="second-header-text">Staraitis</span></h1>
            <p>I'm a <span className="second-paragraph-text">{profession}</span></p>
            <HashLink to="#about">
               <img src={ArrowsDown} alt="arrows down" className="arrows-down-logo" />
            </HashLink>
         </div>
      </section>
   );
}