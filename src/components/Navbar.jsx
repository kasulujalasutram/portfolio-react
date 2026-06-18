import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <span className="nav-logo">KJ.dev</span>

      <div className="nav-links">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;