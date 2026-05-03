import React, { useState } from "react";

function AddProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDesc = description.trim();
    if (!trimmedTitle || !trimmedDesc) return;
    addProject({ title: trimmedTitle, description: trimmedDesc });
    setTitle("");
    setDescription("");
  };

  return (
    <form className="card form-card" onSubmit={handleSubmit} aria-label="Add project form">
      <div className="form-row">
        <label className="sr-only" htmlFor="title">Add Project.</label>
        <input
          id="title"
          className="input"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={80}
        />
      </div>

      <div className="form-row">
        <label className="sr-only" htmlFor="description">Add Description of the project.</label>
        <input
          id="description"
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
        />
      </div>

      <div className="form-actions">
        <button className="btn primary" type="submit">Add</button>
      </div>
    </form>
  );
}

export default AddProjectForm;
