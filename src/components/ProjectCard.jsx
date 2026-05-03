import React from "react";

function ProjectCard({ project, deleteProject }) {
  return (
    <article className="card project-card" aria-labelledby={`title-${project.id}`}>
      <div className="card-media" aria-hidden="true">
        <div className="placeholder-icon"></div>
      </div>

      <div className="card-body">
        <h3 id={`title-${project.id}`} className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
      </div>

      <div className="card-actions">
        <button
          className="btn danger"
          onClick={() => deleteProject(project.id)}
          aria-label={`Delete ${project.title}`}
        >
          ✕
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
