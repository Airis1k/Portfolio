export default function ContactMeSection() {
   return (
      <section id="contact" className="contact-me-section">
         <div className="container">
            <div className="intro-text">
               <h2>Contact Me</h2>
               <p>Get in touch with me</p>
            </div>
            <div className="my-info">
               <h3>Get In Touch</h3>
               <ul className="info-list">
                  <li>
                     <span className="bold-text">Address:</span> Kaunas, Lithuania
                  </li>
                  <li>
                     <span className="bold-text">Email:</span> airingasstar@gmail.com
                  </li>
                  <li>
                     <span className="bold-text">Phone:</span> +37064049450
                  </li>
                  <li>
                     <span className="bold-text">Website:</span> airingas.com
                  </li>
               </ul>
            </div>
            <form id="contact-me-form">
               <div className="wrap">
                  <input id="name" type="text" placeholder="Your name" />
               </div>
               <div className="wrap">
                  <input id="email" type="email" placeholder="Your email" />
               </div>
               <div className="wrap">
                  <textarea id="message" placeholder="Your message"></textarea>
               </div>
               <div className="submit-wrap">
                  <input type="submit" value="Send Message" className="orange-btn" />
               </div>
            </form>
         </div>
      </section>
   );
}