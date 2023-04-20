import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  let personalProject = projects.map((project) => {
    return <ProjectItem key = {project.id} name={project.name}about={project.about} technologies={project.technologies}></ProjectItem>
  })

  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{personalProject}</div>
    </div>
  );
}

export default ProjectList;