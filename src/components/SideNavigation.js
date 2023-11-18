import { Link } from "react-router-dom";
import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import CodingLogo from "../assets/coding-logo.png";

export default function SideNavigation() {
   return (
      <div className="side-navigation">
         <div className="logo-container">
            <Link>
               <img src={CodingLogo} alt="coding-logo" />
            </Link>
         </div>
         <nav>
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
         <div className="socials">
            <ul>
               <li>
                  <Link>
                     <img src={FacebookIcon} alt="facebook-icon" />
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={LinkedinIcon} alt="linkedin-icon" />
                  </Link>
               </li>
               <li>
                  <Link>
                     <img src={InstagramIcon} alt="instagram-icon" />
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}
