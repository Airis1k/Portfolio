import { useEffect, useState } from "react";
import ProfilePic from "../assets/cut.jpg";

export default function AboutMeSection() {
   const [profession, setProfession] = useState("Web Developer");

   useEffect(() => {
      const interval = setInterval(() => {
         profession === "Web Developer" ? setProfession("Freelancer") : setProfession("Web Developer");
      }, 3000);

      return () => clearInterval(interval);
   }, [profession]);

   return (
      <section id="about" className="about-me-section">
         <div className="intro-text">
            <h2>About Me</h2>
            <p>Main information about me</p>
         </div>
         <div className="container-about-me">
            <div className="picture-wrapper">
               <img src={ProfilePic} alt="profile picture" />
               <div className="profile-border-custom"></div>
            </div>
            <div className="text-wrapper">
               <h3>I'm Airingas - <span className="second-header-text">{profession}</span></h3>
               <p className="paragraph-text">
                  Hi! My name is <span className="second-paragraph-text">Airingas Staraitis</span>. I am a Web Developer, and I'm very passionate and dedicated to my work. With 10 years experience as a professional Web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.
               </p>
               <ul className="information-about-me">
                  <li><span className="bold-text">Age:</span> 22</li>
                  <li><span className="bold-text">City:</span> Kaunas</li>
                  <li><span className="bold-text">Hobbies:</span> Books, Finance, IT, Sports</li>
                  <li><span className="bold-text">Website:</span> airingas.com</li>
                  <li><span className="bold-text">Mail:</span> airingasstar@gmail.com</li>
                  <li><span className="bold-text">Phone:</span> +37064049450</li>
               </ul>
               <div className="buttons-wrap">
                  <button className="orange-btn">Download CV</button>
                  <button className="orange-btn">Send Message</button>
               </div>
            </div>
         </div>
      </section>
   );
}