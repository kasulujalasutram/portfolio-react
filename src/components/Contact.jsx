import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="contact-grid">

        <div className="contact-card">
          <h3>Email</h3>
          <p>jalasutramkasulu09@gmail.com</p>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <p>7013984737</p>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/kasulujalasutram"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a
            href="https://linkedin.com/in/kasulu-jalasutram-25b332338"
            target="_blank"
            rel="noreferrer"
          >
            View LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contact;