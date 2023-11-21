import ProfilePic from "../assets/cut.jpg";
import ShowcaseList from "./ShowcaseList";

export default function AboutMeSection() {
   return (
      <section className="about-me-section">
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
               <h3>I'm Airingas and <span className="second-header-text">Freelancer</span></h3>
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
         <div className="abilities-container">
            <div className="abilities-wrap">
               <div className="text">
                  <h4>My Abilities</h4>
                  <p>
                     I am Web developer able to build a Web presence from the ground up - from concept, navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable and efficient code using current best practices in Web development. Fast learner, hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools.
                  </p>
               </div>
               <ShowcaseList />
            </div>
         </div>
      </section>
   );
}