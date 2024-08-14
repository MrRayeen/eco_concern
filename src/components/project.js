import React from "react";
import Button from "./Buttons/button";
import ProjectCard from "./Projects Card/project-card";

const Project = () => {
  return (
    <section className="bg-secondary mb-[520px] max-h-[680px] pb-56 h-full relative">
      <div className="container py-20 space-y-10 flex flex-col items-center relative">
        <h3 className="text-white">our projects</h3>
        <h2 className="text-white">EcoConcern Projects</h2>
        <div className="flex flex-col items-center space-y-20 absolute top-72">
          <div className="flex space-x-[75px]">
            <ProjectCard imgPath={"project-1.png"} />
            <div className="mt-24">
              <ProjectCard imgPath={"project-3.png"} />
            </div>
            <ProjectCard imgPath={"project-2.png"} />
            <div className="mt-24">
              <ProjectCard imgPath={"project-4.png"} />
            </div>
          </div>
          <Button text={"view more"} path={"/projects"} />
        </div>
      </div>
    </section>
  );
};

export default Project;
