import { HashLink } from "react-router-hash-link";
import ArrowUp from "../assets/ArrowUp.svg";

export default function BackToTopBtn() {
   return (
      <HashLink to="#" className="back-to-top-btn">
         <img src={ArrowUp} alt="arrow-up logo" />
      </HashLink>
   );
}