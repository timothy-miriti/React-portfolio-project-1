import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, deleteProject }) {
  if (!projects.length) {
    return <div className="empty-state card">No projects found. Add your first project above.</div>;
  }

  return (
    <div className="grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} deleteProject={deleteProject} />
      ))}
    </div>
  );
}

export default ProjectList;

