import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <p className="hero-eyebrow">AVAILABLE FOR WORK</p>

      <h1 className="hero-name">
        Kasulu <br />
        <span>JALASUTRAM KASULU</span>
      </h1>

      <p className="hero-title">
        Jr. Python Full Stack Developer
      </p>

      <p className="hero-desc">
        CS undergraduate with hands-on experience
        building full-stack web applications,
        REST APIs and real-time systems using
        Django and React.
      </p>

      <div className="hero-actions">
        <a
          className="btn-primary"
          href="mailto:yourmail@gmail.com"
        >
          Contact Me
        </a>

        <a
          className="btn-resume"
          href="/resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;