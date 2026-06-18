
import "./Skills.css";
function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Languages</h3>
          <p>Python</p>
        </div>

        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>
          <p>Django, Django REST Framework, WebSockets</p>
        </div>

        <div className="skill-card">
          <h3>Database</h3>
          <p>SQLite, PostgreSQL, MySQL</p>
        </div>

        <div className="skill-card">
          <h3>Tools</h3>
          <p>Git, GitHub, Postman, VS Code</p>
        </div>

        <div className="skill-card">
          <h3>Other</h3>
          <p>REST APIs, CRUD Operations, Authentication</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;