import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
   const [errMessage, setErrMessage] = useState("");
   const form = useRef();

   function notifySuccess() {
      toast.success("Message has been sent successfully!", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
      });
   }

   function notifyError() {
      toast.error("There was an error with the message.", {
         position: "top-right",
         autoClose: 3000,
         hideProgressBar: false,
         closeOnClick: true,
         pauseOnHover: true,
         draggable: true,
         progress: undefined,
         theme: "dark",
      });
   }

   const sendEmail = (e) => {
      e.preventDefault();

      const nameInput = e.target.elements.name.value;
      const emailInput = e.target.elements.email.value;
      const textMessageInput = e.target.elements.message.value;

      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      
      let errorFieldArr = [];
      if (nameInput.length < 3 || nameInput.length > 30 || !isNaN(nameInput)) {
         errorFieldArr.push("Name");
      }
      if (!emailRegex.test(emailInput)) {
         errorFieldArr.push("Email");
      }
      if (textMessageInput.length < 6) {
         errorFieldArr.push("Message");
      }

      const errMessageWrapper = document.querySelector(".error-message-wrapper");
      let successValue = false;
      if (errorFieldArr.length === 3) {
         setErrMessage("All input fields are incorrect");
         errMessageWrapper.style.display = "block";

      } else if (errorFieldArr.length === 2) {
         const twoTextFieldError = errorFieldArr.join().replace(",", " and ");
         setErrMessage(`${twoTextFieldError} fields are incorrect`);
         errMessageWrapper.style.display = "block";

      } else if (errorFieldArr.length === 1) {
         setErrMessage(`${errorFieldArr[0]} field is incorrect`);
         errMessageWrapper.style.display = "block";

      } else {
         successValue = true;
         errMessageWrapper.style.display = "none";
      }

      if (successValue) {
         emailjs.sendForm("service_djympcl", "template_ths1c89", form.current, "Na2gu24PBjUIu-LYu")
            .then((result) => {
               notifySuccess();
               console.log(result.text);
            }, (error) => {
               notifyError();
               console.log(error.text);
            });
   
         e.target.reset();
      }
   }

   return (
      <>
         <form ref={form} id="contact-me-form" onSubmit={sendEmail}>
            <div className="error-message-wrapper">
               <label className="error-message">{errMessage}</label>
            </div>
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
         <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
         />
      </>
   );
}