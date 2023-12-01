import KeyboardLogo from "../assets/KeyboardLogo.svg";
import { HashLink } from "react-router-hash-link";
import BurgerMenu from "./BurgerMenu";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <header>
         <div className="container">
            <Link to="#">
               <img src={KeyboardLogo} alt="logo" />
            </Link>
            <div className="hamburger-menu">
               <BurgerMenu />
            </div>
         </div>
         <div className="menu">
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
         </div>
      </header>
   );
}