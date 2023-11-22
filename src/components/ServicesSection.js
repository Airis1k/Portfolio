import ServiceList from "./ServiceList";

export default function ServicesSection() {
   return (
      <section id="services" className="services-section">
         <div className="container">
            <div className="intro-text">
               <h2>Amazing Services</h2>
               <p>Meet our amazing services</p>
            </div>
            <ServiceList />
         </div>
      </section>
   );
}