import React, { useState } from "react";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";
import ProjectList from "./components/ProjectList";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Project 1", description: "Description of the project" },
    { id: 2, title: "Project 2", description: "Description of the project" },
    { id: 3, title: "Project 3", description: "Description of the project" }
  ]);
  const [searchQuery, setSearchQuery] = useState("");

  const addProject = (project) => {
    setProjects((prev) => [{ ...project, id: Date.now() }, ...prev]);
  };

  const deleteProject = (id) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
  };

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase().trim())
  );

  return (
    <main className="app">
      <Header/>
      
      <section className="panel">
        <AddProjectForm addProject={addProject} />
      </section>

      <section className="panel">
        <SearchBar setSearchQuery={setSearchQuery} />
      </section>

      <section className="panel project-area">
        <h2 className="panel-title">Projects</h2>
        <ProjectList projects={filteredProjects} deleteProject={deleteProject} />
      </section>

    
      <Footer/>
    </main>
  );
}

export default App;
