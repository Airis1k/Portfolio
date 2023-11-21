import ShowcaseItem from "./ShowcaseItem";

export default function ShowcaseList() {
   return (
      <div className="showcase-list">
         <ShowcaseItem skill="HTML5" />
         <ShowcaseItem skill="CSS" />
         <ShowcaseItem skill="JavaScript" />
         <ShowcaseItem skill="Java" />
         <ShowcaseItem skill="React JS" />
         <ShowcaseItem skill="Bootstrap" />
         <ShowcaseItem skill="GIT" />
         <ShowcaseItem skill="C++" />
      </div>
   );
}