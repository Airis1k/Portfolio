import { useState } from "react";

export default function BurgerMenu() {
   const [activeClass, setActiveClass] = useState("ham hamRotate ham4");
   const [isHiddenMenu, setIsHiddenMenu] = useState(true);

   function handleClassChange() {
      setActiveClass(prevValue => {
         let resultClass = "ham hamRotate ham4";
         if (!prevValue.includes("active")) {
            resultClass += " active";
         }

         return resultClass;
      });

      if (isHiddenMenu) {
         document.querySelector("header .menu").style["margin-top"] = "0px";
         setIsHiddenMenu(false);
      } else {
         document.querySelector("header .menu").style["margin-top"] = "-253px";
         setIsHiddenMenu(true);
      }
   }

   return (
      <svg
         className={activeClass}
         viewBox="0 0 100 100"
         width="60px"
         height="60px"
         onClick={handleClassChange}
         filter="invert(100%) sepia(100%) saturate(0%) hue-rotate(335deg) brightness(104%) contrast(101%)"
      >
         <path
            className="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
         />
         <path className="line middle" d="m 70,50 h -40" />
         <path
            className="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
         />
      </svg>
   );
}