function Profile() {
  return (
    <section id="profile" className="profile-section">

      <div className="about-card">
        <h2>ABOUT ME</h2>

        <p>
          I am a Computer Science undergraduate passionate about
          building scalable and efficient web applications.
          I enjoy solving problems, writing clean code,
          and continuously learning new technologies.
        </p>

        <a href="/resume.pdf" className="download-btn">
          Download Resume
        </a>
      </div>

      <div className="info-card">

        <div className="info-row">
          <span>Name</span>
          <span>Jalasutram Kasulu</span>
        </div>

        <div className="info-row">
          <span>Email</span>
          <span>jalasutramkasulu09@gmail.com</span>
        </div>

        <div className="info-row">
          <span>Phone</span>
          <span>7013984737</span>
        </div>

        <div className="info-row">
          <span>Location</span>
          <span>Hyderabad, India</span>
        </div>

        <div className="info-row">
          <span>Languages</span>
          <span>English, Telugu</span>
        </div>

      </div>

    </section>
  );
}

export default Profile;