import React, { useState, useEffect } from "react";
import "./App.css";
import profilePhoto from "./assets/profile-photo.jpg";

function App() {
  // State for tracking active section, visibility, and mouse position
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Intersection Observer to track section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Mouse position tracking for animated background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Project data with updated GitHub links
  const projects = [
    {
      title: "Real-Time Study Rooms",
      subtitle: "Scalable Real-Time Messaging",
      description:
        "Designed a real-time study room system to enable remote collaboration with instant updates. Implemented Socket.IO over WebSockets for message streaming, room management, and user presence tracking — optimized for low latency and scalability.",
      tech: ["Socket.io", "Node.js", "WebSockets", "HTML", "CSS", "JavaScript"],
      highlight: "⚡ Creative Solution",
      category: "Real-Time Systems",
      github: "https://github.com/mhmdbrkv/rooms-nodejs",
      demo: "",
      color: "orange-red",
    },
    {
      title: "Learning Gate",
      subtitle: "Award-Winning E-Learning Platform",
      description:
        "Led a full-stack team to build a scalable e-learning platform with real-time classrooms. Engineered backend using Node.js & MongoDB, integrated JWT-based authentication, live attendance tracking, and interactive rooms via WebSockets. Deployed on cloud infrastructure for continuous availability.",
      tech: [
        "Node.js",
        "React.js",
        "Socket.io",
        "MongoDB",
        "Express.js",
        "JWT",
      ],
      highlight: "🏆 Excellent Rating",
      category: "Team Leadership",
      github: "https://github.com/mhmdbrkv/graduation-project-backend",
      demo: "",
      color: "blue-cyan",
    },
    {
      title: "Event Management APIs",
      subtitle: "Enterprise-Grade Booking Platform",
      description:
        "Built a production-grade event management API system, handling events, tickets, and payments. Solved caching bottlenecks using Redis, enforced role-based access control with JWT, and achieved 95%+ unit/integration test coverage using Supertest and Jest. Follows SOLID design patterns and clean architecture.",
      tech: ["TypeScript", "Express.js", "Prisma", "Redis", "JWT", "Supertest"],
      highlight: "🚀 2025 Production",
      category: "System Architecture",
      github: "https://github.com/mhmdbrkv",
      demo: "",
      color: "emerald-teal",
    },
    {
      title: "E-Commerce Backend",
      subtitle: "Secure & Scalable APIs",
      description:
        "Architected a modular e-commerce backend handling product listings, carts, orders, and secure payments. Applied layered architecture, optimized performance with Redis caching, and added Swagger API docs. Emphasized security (JWT auth, input validation) and scalability for growing traffic demands.",
      tech: ["Node.js", "MongoDB", "Redis", "JWT", "API Documentation"],
      highlight: "💼 Real-Life Problem Solution",
      category: "Backend Engineering",
      github: "https://github.com/mhmdbrkv",
      demo: "",
      color: "purple-pink",
    },
  ];

  // Skills data
  const skills = [
    {
      category: "Backend Engineering",
      items: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "REST APIs",
        "Microservices",
        "API Design",
      ],
      icon: "fas fa-code",
      color: "blue",
    },
    {
      category: "Database & Storage",
      items: [
        "MongoDB",
        "PostgreSQL",
        "Redis",
        "Prisma",
        "Database Design",
        "Query Optimization",
      ],
      icon: "fas fa-database",
      color: "emerald",
    },
    {
      category: "Security & Testing",
      items: [
        "JWT Authentication",
        "OAuth 2.0",
        "Jest",
        "Supertest",
        "API Security",
        "Input Validation",
      ],
      icon: "fas fa-shield-alt",
      color: "purple",
    },
    {
      category: "Software Concepts & Tools",
      items: [
        "System Design",
        "SOLID Principles",
        "Data Structures",
        "Algorithms",
        "Git/GitHub",
        "CI/CD",
        "Docker",
        "Postman",
      ],
      icon: "fas fa-cloud",
      color: "orange",
    },
  ];

  // Achievements data
  const achievements = [
    {
      icon: "🎓",
      text: "B.Sc. Computer & Information Sciences",
      detail: "Suez Canal University (2020-2024)",
    },
    {
      icon: "🏆",
      text: "Graduation Project Excellence",
      detail: "Learning Gate - Team Leadership",
    },
    {
      icon: "🧩",
      text: "400+ Problems Solved",
      detail: "Codeforces & LeetCode",
    },
    {
      icon: "📜",
      text: "Professional Certifications",
      detail: "ITI & GDSC Training",
    },
  ];

  // Problem-solving solutions data
  const problemSolvingSolutions = [
    {
      title: "The Idea",
      description:
        "Enable students to join real-time classes from anywhere, offering a streaming-like experience for seamless learning.",
      icon: "fas fa-lightbulb",
      color: "blue-cyan",
    },
    {
      title: "The Solution",
      description:
        "Built a WebSocket-based system with Socket.io and Node.js, ensuring real-time communication.",
      icon: "fas fa-cogs",
      color: "emerald-teal",
    },
    {
      title: "The Project",
      description:
        "Real-Time Study Rooms: A platform for interactive remote collaboration, with chatbox.",
      icon: "fas fa-code",
      color: "orange-red",
    },
  ];

  // Social links data
  const socialLinks = [
    {
      href: "https://github.com/mhmdbrkv",
      icon: "fab fa-github",
      label: "GitHub",
      btnClass: "btn-primary",
    },
    {
      href: "https://www.linkedin.com/in/mohamed-baraka-3b832a250/", // Replace with your LinkedIn URL
      icon: "fab fa-linkedin",
      label: "LinkedIn",
      btnClass: "btn-primary",
    },
    {
      href: "mailto:barakamohamed946@gmail.com",
      icon: "fas fa-envelope",
      label: "Email",
      btnClass: "btn-primary",
    },
    {
      href: "https://drive.google.com/file/d/1gAVKDkMk2JVcOZSXTOGf-4o-S8THTfUS/view?usp=sharing",
      icon: "fas fa-file-pdf",
      label: "Resume",
      btnClass: "btn-primary",
    },
  ];

  // Scroll to section handler
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  // Resume link
  const resumeLink =
    "https://drive.google.com/file/d/1gAVKDkMk2JVcOZSXTOGf-4o-S8THTfUS/view?usp=sharing";

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background">
        <div className="gradient-overlay"></div>
        <div
          className="mouse-follower"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">MB</div>
            <div className="nav-links">
              {[
                "hero",
                "about",
                "solutions",
                "projects",
                "skills",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`nav-link ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  {section === "hero"
                    ? "Home"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <a
                href={resumeLink}
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="container">
          <div className={`hero-content ${isVisible.hero ? "visible" : ""}`}>
            <div className="hero-text">
              <div className="hero-title-container">
                <img
                  src={profilePhoto}
                  alt="Mohamed Baraka"
                  className="profile-photo"
                />
                <h1 className="hero-title">Mohamed Baraka</h1>
              </div>
              <div className="hero-subtitle">
                <div className="divider"></div>
                <p className="subtitle-text">
                  Backend Engineer | Problem Solver
                </p>
                <div className="divider"></div>
              </div>
            </div>

            <p className="hero-description">
              Backend Developer focused on building{" "}
              <strong>robust systems</strong> and solving
              <strong> real-world problems</strong> through APIs, architecture,
              and automation.
              <br />
              Over <span className="highlight-blue">
                400+ problems solved
              </span>{" "}
              &{" "}
              <span className="highlight-purple">
                production-level backend systems shipped
              </span>
              .
            </p>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-text">{achievement.text}</div>
                  <div className="achievement-detail">{achievement.detail}</div>
                </div>
              ))}
            </div>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <i className="fas fa-envelope"></i>
                <span>Connect</span>
                <i className="fas fa-sparkles"></i>
              </a>
              <a
                href="https://github.com/mhmdbrkv"
                className="btn btn-secondary"
              >
                <i className="fab fa-github"></i>
                <span>Projects</span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="scroll-indicator"
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div
            className={`section-content ${isVisible.about ? "visible" : ""}`}
          >
            <h2 className="section-title">Problem-Solving Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-card">
                <h3 className="card-title">User-Centered Design</h3>
                <p className="card-description">
                  I focus on user needs to deliver impactful solutions like
                  Learning Gate’s real-time classroom experience for remote
                  students.
                </p>
              </div>
              <div className="philosophy-card">
                <h3 className="card-title">Scalable Architecture</h3>
                <p className="card-description">
                  I design robust systems with SOLID principles, using
                  TypeScript and Redis for high-performance scalability.
                </p>
              </div>
              <div className="philosophy-card">
                <h3 className="card-title">Results-Driven Delivery</h3>
                <p className="card-description">
                  I ensure measurable success with maintainable code, 95%+ test
                  coverage, and award-winning project outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Solving Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <div
            className={`section-content ${
              isVisible.solutions ? "visible" : ""
            }`}
          >
            <h2 className="section-title">Problem Solving in Action</h2>
            <p className="section-subtitle">
              Seamless collaboration beyond physical boundaries
            </p>
            <div className="solutions-grid">
              {problemSolvingSolutions.map((solution, index) => (
                <div key={index} className="solution-card">
                  <div className={`solution-icon ${solution.color}`}>
                    <i className={solution.icon}></i>
                  </div>
                  <h3 className="solution-title">{solution.title}</h3>
                  <p className="solution-description">{solution.description}</p>
                </div>
              ))}
            </div>
            <div className="project-link-container">
              <a
                href="https://github.com/mhmdbrkv/rooms-nodejs"
                className="project-link"
              >
                <i className="fab fa-github"></i>
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div
            className={`section-content ${isVisible.projects ? "visible" : ""}`}
          >
            <h2 className="section-title">Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="project-content">
                    <div
                      className={`project-text ${
                        index % 2 === 1 ? "order-2" : ""
                      }`}
                    >
                      <div className="project-meta">
                        <div className={`project-dot ${project.color}`}></div>
                        <span className="project-category">
                          {project.category}
                        </span>
                        <span className="project-highlight">
                          {project.highlight}
                        </span>
                      </div>
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-subtitle">{project.subtitle}</p>
                      <p className="project-description">
                        {project.description}
                      </p>
                      <div className="tech-stack">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="project-links">
                        <a href={project.github} className="project-link">
                          <i className="fab fa-github"></i>
                          <span>View Code</span>
                        </a>
                        {project.demo && (
                          <a href={project.demo} className="project-link">
                            <i className="fas fa-external-link-alt"></i>
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                    <div
                      className={`project-visual ${
                        index % 2 === 1 ? "order-1" : ""
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div
            className={`section-content ${isVisible.skills ? "visible" : ""}`}
          >
            <h2 className="section-title">Technical Expertise</h2>
            <div className="skills-grid">
              {skills.map((skillGroup, index) => (
                <div key={index} className="skill-card">
                  <div className="skill-header">
                    <div className={`skill-icon ${skillGroup.color}`}>
                      <i className={skillGroup.icon}></i>
                    </div>
                    <h3 className="skill-title">{skillGroup.category}</h3>
                  </div>
                  <ul className="skill-list">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div
            className={`section-content ${isVisible.contact ? "visible" : ""}`}
          >
            <h2 className="section-title">Let’s Build Something Great</h2>
            <p className="contact-description">
              Let’s build scalable systems or debug hard problems together. If
              you're hiring or collaborating — I’m open to backend-focused roles
              and problem-solving challenges.
            </p>

            <div className="contact-buttons">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className={`btn ${link.btnClass} social-btn`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={link.icon}></i>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">
            © 2025 Mohamed Baraka • Built with <span className="heart">♥</span>{" "}
            and <span className="react">React</span> •{" "}
            <a
              href={resumeLink}
              className="react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
