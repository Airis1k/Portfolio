export default function ServiceItem({logo, header, description}) {
   return (
      <div className="service-item">
         <img src={logo} alt="service logo" className="orange-service-logo" />
         <h3>{header}</h3>
         <p>{description}</p>
      </div>
   );
}