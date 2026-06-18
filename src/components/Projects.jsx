import chatLogin from "../assets/chat-login.png";
import chatApi from "../assets/chat-api.png";
import chatDashboard from "../assets/chat-dashboard.png";

import ecommerceHome from "../assets/ecommerce-home.png";
import ecommerceAuth from "../assets/ecommerce-auth.png";

import restaurantImg from "../assets/restaurant.png";

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      {/* CHATWAVE */}

      <div className="project-card">
        <h3>ChatWave</h3>

        <p>
          Real-time chat application built using Django,
          Django REST Framework, Django Channels and
          WebSockets. Supports live messaging, online
          users and REST API integration.
        </p>

        <div className="project-images">
          <img src={chatLogin} alt="Chat Login" />
          <img src={chatApi} alt="Chat API" />
          <img src={chatDashboard} alt="Chat Dashboard" />
        </div>

        <div className="tech-stack">
          <span>Django</span>
          <span>DRF</span>
          <span>WebSockets</span>
          <span>Django Channels</span>
          <span>SQLite</span>
        </div>
      </div>

      {/* ECOMMERCE */}

      <div className="project-card">
        <h3>E-Commerce Platform</h3>

        <p>
          Full-stack e-commerce application with user
          authentication, product catalog, shopping cart,
          order management and admin dashboard.
        </p>

        <div className="project-images">
          <img src={ecommerceHome} alt="Ecommerce Home" />
          <img src={ecommerceAuth} alt="Ecommerce Auth" />
        </div>

        <div className="tech-stack">
          <span>React</span>
          <span>Django</span>
          <span>DRF</span>
          <span>PostgreSQL</span>
        </div>
      </div>

      {/* RESTAURANT */}

      <div className="project-card">
        <h3>Restaurant Management System</h3>

        <p>
          Restaurant management application with menu
          management, order tracking, authentication,
          CRUD operations and admin controls.
        </p>

        <div className="project-images">
          <img
            src={restaurantImg}
            alt="Restaurant Project"
          />
        </div>

        <div className="tech-stack">
          <span>React</span>
          <span>Django</span>
          <span>DRF</span>
          <span>SQLite</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;