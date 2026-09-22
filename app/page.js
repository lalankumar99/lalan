const skills = [
  {
    title: "Electrical Engineering",
    icon: "/icons/electrical-icon.png",
  },
  {
    title: "Web Development",
    icon: "/icons/web-development-icon.png",
  },
  {
    title: "App Development",
    icon: "/icons/app-development-icon.png",
  },
  {
    title: "UI Design",
    icon: "/icons/ui-design-icon.png",
  },
];

const projects = [
  {
    number: "01",
    title: "Polytechnic Hub",
    description:
      "An educational platform for polytechnic students with notes, courses, quizzes and learning resources.",
    image: "/projects/polytechnic-hub.png",
  },
  {
    number: "02",
    title: "Personal Portfolio",
    description:
      "A modern personal portfolio website built with Next.js and designed around an electrical engineering theme.",
    image: "/projects/portfolio.png",
  },
  {
    number: "03",
    title: "Electrical Projects",
    description:
      "Practical electrical engineering projects focused on learning, experimentation and real-world applications.",
    image: "/projects/electrical-project.png",
  },
];

export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <a href="#home" className="logo">
          <img
            src="/icons/logo.png"
            alt="Lalan Kumar Portfolio Logo"
          />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="tag">DIPLOMA ENGINEERING STUDENT</p>

          <h1>
            Hi, I&apos;m <span>Lalan Kumar</span>
          </h1>

          <h2>Electrical Engineering Student</h2>

          <p className="description">
            I am passionate about Electrical Engineering, technology,
            web development and building useful digital projects.
          </p>

          <div className="buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="electrical-card">
          <img
            src="/icons/electrical-icon.png"
            alt="Electrical Engineering"
            className="hero-icon"
          />

          <div className="circuit-line line-one" />
          <div className="circuit-line line-two" />
          <div className="circuit-line line-three" />

          <div className="node node-one" />
          <div className="node node-two" />
          <div className="node node-three" />
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-tag">ABOUT ME</p>

        <h2>Electrical Engineering Student</h2>

        <p>
          I am a Diploma student interested in electrical systems,
          modern technology, web development and innovative digital
          projects. I enjoy learning new technologies and turning
          ideas into practical projects.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-tag">MY SKILLS</p>

        <h2>Skills & Technologies</h2>

        <div className="cards">
          {skills.map((skill) => (
            <div className="card" key={skill.title}>
              <img
                src={skill.icon}
                alt={skill.title}
                className="skill-icon"
              />

              <h3>{skill.title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-tag">MY WORK</p>

        <h2>Featured Projects</h2>

        <div className="cards">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.number}
            >
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <span>{project.number}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <a href="#contact" className="project-link">
                  View Project
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-tag">CONTACT</p>

        <h2>Let&apos;s Connect</h2>

        <p>
          Interested in my work or want to connect with me?
        </p>

        <a
          href="mailto:your@email.com"
          className="primary-btn"
        >
          Contact Me
        </a>
      </section>

      <footer>
        <p>© 2026 Lalan Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}