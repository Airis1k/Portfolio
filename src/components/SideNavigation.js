import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";

export default function SideNavigation() {
   return (
      <div className="side-navigation">
         <div className="inner-container-wrap">
            <div className="logo-container">
               <Link to="#">
                  <p className="logo-text">&lt;/&gt;</p>
               </Link>
            </div>
            <nav className="links">
               <ul>
                  <li>
                     <Link>Home</Link>
                  </li>
                  <li>
                     <Link>About</Link>
                  </li>
                  <li>
                     <Link>Services</Link>
                  </li>
                  <li>
                     <Link>Portfolio</Link>
                  </li>
                  <li>
                     <Link>Contact</Link>
                  </li>
               </ul>
            </nav>
         </div>
         <div className="socials">
            <ul>
               <li>
                  <Link
                     to="https://www.facebook.com/airingas.staraitis/"
                     target="_blank"
                  >
                     <img
                        src={FacebookIcon}
                        alt="facebook-icon"
                        className="social-logo"
                     />
                  </Link>
               </li>
               <li>
                  <Link
                     to="https://www.linkedin.com/in/airingas-staraitis/"
                     target="_blank"
                  >
                     <img
                        src={LinkedinIcon}
                        alt="linkedin-icon"
                        className="social-logo"
                     />
                  </Link>
               </li>
               <li>
                  <Link
                     to="https://www.instagram.com/airingas7/"
                     target="_blank"
                  >
                     <img
                        src={InstagramIcon}
                        alt="instagram-icon"
                        className="social-logo"
                     />
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}
