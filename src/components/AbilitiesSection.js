import ShowcaseList from "./ShowcaseList";

export default function AbilitiesSection() {
   return (
      <section className="abilities-section">
         <div className="abilities-wrap">
            <div className="text">
               <h4>My Abilities</h4>
               <p>
                  I specialize in web development, creating websites using HTML,
                  CSS, and JavaScript. I'm skilled in frameworks like ReactJS
                  and use Git for managing code. Design-wise, I'm familiar with
                  Bootstrap, ensuring websites look great on different devices.
                  On the data side, I'm experienced with databases, especially
                  SQL, and I know how to handle CRUD operations smoothly.
                  Beyond coding, I've spent five years mastering Microsoft
                  Excel, using it for tasks like data analysis and creating
                  useful dashboards. I'm in love with learning new things.
               </p>
            </div>
            <ShowcaseList />
         </div>
      </section>
   );
}
