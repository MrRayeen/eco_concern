import React from "react";

const ProjectCard = ({ imgPath }) => {
  return (
    <div className="rounded-2xl max-h-[395px] max-w-[380px] bg-white p-4 overflow-clip drop-shadow-lg">
      <picture>
        <img src={imgPath} alt="project-img" width={290} height={300} />
      </picture>
    </div>
  );
};

export default ProjectCard;
