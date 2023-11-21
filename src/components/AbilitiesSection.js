import ShowcaseList from "./ShowcaseList";

export default function AbilitiesSection() {
   return (
      <section className="abilities-section">
         <div className="abilities-wrap">
            <div className="text">
               <h4>My Abilities</h4>
               <p>
                  I am Web developer able to build a Web presence from the
                  ground up - from concept, navigation, layout and programming
                  to UX and SEO. Skilled at writing well-designed, testable and
                  efficient code using current best practices in Web
                  development. Fast learner, hard worker and team player who is
                  proficient in an array of scripting languages and multimedia
                  Web tools.
               </p>
            </div>
            <ShowcaseList />
         </div>
      </section>
   );
}
