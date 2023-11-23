import ServiceItem from "./ServiceItem";
import WebDevIcon from "../assets/FileCode.svg";
import DatabaseIcon from "../assets/database.svg";
import ExcelIcon from "../assets/ExcelTable.svg";

export default function ServiceList() {
   return (
      <div className="service-list">
         <ServiceItem
            logo={WebDevIcon}
            header="Web Development"
            description="Web Development is the art and science of creating interactive and dynamic websites that enhance user experiences on the internet. It involves a combination of programming languages, design principles, and server management to build web applications and sites. As a web developer, I leverage my skills in HTML, CSS, and JavaScript to craft visually appealing and functional websites."
         />
         <ServiceItem
            logo={DatabaseIcon}
            header="Databases"
            description="I am proficient in Web3 technologies, which enable the creation of decentralized applications that can interact with blockchain networks, such as Ethereum. My skills in Web3 enable me to develop front-end interfaces that seamlessly integrate with the blockchain back-end, delivering a seamless user experience."
         />
         <ServiceItem
            logo={ExcelIcon}
            header="Excel Services"
            description="Whether you need a simple mobile app or a complex enterprise-level solution, I can provide end-to-end mobile app development services, from conceptualization and design to development, testing, and deployment. By entrusting me with your mobile app development project, you can be assured that your app will be delivered on time, within budget, and to the highest quality standards."
         />
      </div>
   );
}