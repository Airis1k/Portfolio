import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import FacebookIcon from "../assets/facebook.svg";
import LinkedinIcon from "../assets/linkedin.svg";
import InstagramIcon from "../assets/instagram.svg";
import ArrowLeft from "../assets/arrowLeft.svg";
import ArrowRight from "../assets/arrowRight.svg";
import { useState } from "react";
import KeyboardLogo from "../assets/KeyboardLogo.svg";

export default function SideNavigation() {
   const [isHidden, setIsHidden] = useState(true);
   const [sideBarImg, setSideBarImg] = useState(ArrowLeft);

   function handleBtnClick() {
      if (isHidden) {
         setIsHidden(false);
         document.querySelector(".side-navigation").style.left = "-300px";
         document.querySelector(".sidebar-btn").style.right = "-30px";
         document.getElementById("home").style.width = "100%";
         document.getElementById("about").style.width = "100%";
         document.querySelector(".abilities-section").style.width = "100%";
         document.getElementById("services").style.width = "100%";
         document.getElementById("portfolio").style.width = "100%";
         document.querySelector(".coding-info-section").style.width = "100%";
         document.getElementById("contact").style.width = "100%";
         document.querySelector("footer").style.width = "100%";
         setSideBarImg(ArrowRight);
         
      } else {
         
         document.querySelector(".side-navigation").style.left = "0px";
         document.querySelector(".sidebar-btn").style.right = "0px";
         document.getElementById("home").style.width = "calc(100% - 300px)";
         document.getElementById("about").style.width = "calc(100% - 300px)";
         document.querySelector(".abilities-section").style.width = "calc(100% - 300px)";
         document.getElementById("services").style.width = "calc(100% - 300px)";
         document.getElementById("portfolio").style.width = "calc(100% - 300px)";
         document.querySelector(".coding-info-section").style.width = "calc(100% - 300px)";
         document.getElementById("contact").style.width = "calc(100% - 300px)";
         document.querySelector("footer").style.width = "calc(100% - 300px)";
         setSideBarImg(ArrowLeft);
         setIsHidden(true);
      }
   }

   return (
      <div className="side-navigation">
         <div className="inner-container-wrap">
            <div className="logo-container">
               <Link to="#">
                  <img src={KeyboardLogo} alt="keyboard logo" />
               </Link>
            </div>
            <nav className="links">
               <ul>
                  <li>
                     <HashLink to="#home">Home</HashLink>
                  </li>
                  <li>
                     <HashLink to="#about">About</HashLink>
                  </li>
                  <li>
                     <HashLink to="#services">Services</HashLink>
                  </li>
                  <li>
                     <HashLink to="#portfolio">Portfolio</HashLink>
                  </li>
                  <li>
                     <HashLink to="#contact">Contact</HashLink>
                  </li>
               </ul>
            </nav>
         </div>
         <button className="sidebar-btn" onClick={handleBtnClick}>
            <img src={sideBarImg} alt="left-arrow" />
         </button>
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
