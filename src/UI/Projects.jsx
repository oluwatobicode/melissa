import data from "../data/Projects.json";
import ProjectList from "./ProjectList";

function Projects() {
  return (
    <div className="px-10 py-5 leading-0 w-full">
      <h2 className="text-[#fff] text-[2rem] mb-5 w-fit md:text-left text-center  font-bold">
        Projects
      </h2>
      <p className="text-[#8c8c8c] md:text-[1.3rem] text-[1rem] mb-5">
        A few projects I&apos;ve worked on
      </p>

      <div className="flex md:flex-row md:flex-wrap gap-10 items-center flex-col">
        {data.map((el, index) => (
          <ProjectList el={el} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
