# Personal Project Showcase App (React SPA)

A modern, responsive single-page application (SPA) built with React to showcase personal or agency projects.  
This app allows users to add new projects dynamically, search/filter projects, and view them in a clean, responsive layout.

---

##  Features
- **Landing Page**: Displays a list of projects.
- **Add Project Form**: Dynamically add new projects with title and description.
- **Search Projects**: Filter projects in real-time by title.
- **Delete Projects**: Remove projects with a simple click.
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile.

---

## Tech Stack
- **React** (functional components, hooks)
- **CSS Grid and Flexbox for responsive styling
- **GitHub** for version control and collaboration

---

## Project Structure

src/
├── App.jsx
├── components/
│     ├── AddProjectForm.jsx
│     ├── SearchBar.jsx
│     ├── ProjectList.jsx
│     └── ProjectCard.jsx
├── App.test.jsx
└── styles.css


---

## ⚙️ Installation & Setup
1. Clone the repository:
   git clone https://github.com/your-username/portfolio-spa.git
   cd portfolio-spa

Install dependencies:
npm install

Run the development server:
npm start

Run tests:
npm test

Testing
The app includes unit tests for:
Rendering initial projects
Adding new projects
Searching/filtering projects
Deleting projects
Example:
npm test

Responsive Design
Uses CSS Grid and Flexbox for layout.

Automatically adapts to different screen sizes.

Tested on desktop, tablet, and mobile.

 Documentation & Maintenance
Code is modular and reusable.

State management centralized in App.

Clear prop passing between components.

Easy to extend with new features (e.g., images, tags, routing).

Author
Developed by Timothy Miriti.
