import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm("service_djympcl", "template_ths1c89", form.current, "Na2gu24PBjUIu-LYu")
         .then((result) => {
            console.log(result.text);
         }, (error) => {
            console.log(error.text);
         });

      e.target.reset();
   }

   return (
      <form ref={form} id="contact-me-form" onSubmit={sendEmail}>
         <div className="wrap">
            <input id="name" type="text" name="user_name" placeholder="Your Name" />
         </div>
         <div className="wrap">
            <input id="email" type="email" name="user_email" placeholder="Your Email" />
         </div>
         <div className="wrap">
            <textarea id="message" name="message" placeholder="Your Message"></textarea>
         </div>
         <div className="submit-wrap">
            <input type="submit" value="Send Message" className="orange-btn" />
         </div>
      </form>
   );
}