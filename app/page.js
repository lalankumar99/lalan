export default function Home() {
  return (
    <main className="home">
      <nav className="navbar">
        <div className="logo">LK</div>

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
            Hi, I'm <span>Lalan Kumar</span>
          </h1>

          <h2>Electrical Engineering Student</h2>

          <p className="description">
            Passionate about Electrical Engineering, technology and building
            useful digital projects.
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
          <div className="circle">
            ⚡
          </div>

          <div className="circuit-line line-one"></div>
          <div className="circuit-line line-two"></div>
          <div className="circuit-line line-three"></div>

          <div className="node node-one"></div>
          <div className="node node-two"></div>
          <div className="node node-three"></div>
        </div>
      </section>

      <section id="about" className="section">
        <p className="section-tag">ABOUT ME</p>
        <h2>Electrical Engineering Student</h2>

        <p>
          I am a Diploma student interested in electrical systems,
          technology, web development and innovative projects. I enjoy
          learning new technologies and turning ideas into practical projects.
        </p>
      </section>

      <section id="skills" className="section">
        <p className="section-tag">MY SKILLS</p>
        <h2>Skills & Technologies</h2>

        <div className="cards">
          <div className="card">⚡ Electrical Engineering</div>
          <div className="card">💻 Web Development</div>
          <div className="card">📱 App Development</div>
          <div className="card">🎨 UI Design</div>
        </div>
      </section>

      <section id="projects" className="section">
        <p className="section-tag">PROJECTS</p>
        <h2>My Projects</h2>

        <div className="cards">
          <div className="project-card">
            <span>01</span>
            <h3>Polytechnic Hub</h3>
            <p>
              An educational platform for polytechnic students.
            </p>
          </div>

          <div className="project-card">
            <span>02</span>
            <h3>Portfolio Website</h3>
            <p>
              A modern personal portfolio built with Next.js.
            </p>
          </div>

          <div className="project-card">
            <span>03</span>
            <h3>Electrical Projects</h3>
            <p>
              Practical electrical engineering learning projects.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-tag">CONTACT</p>
        <h2>Let's Connect</h2>

        <p>
          Interested in my work or want to connect?
        </p>

        <a href="mailto:your@email.com" className="primary-btn">
          Email Me
        </a>
      </section>

      <footer>
        <p>© 2026 Lalan Kumar. All rights reserved.</p>
      </footer>
    </main>
  );
}

अब Next step "app/globals.css" होगा, जिससे पूरा page premium Electrical dark theme में दिखाई देगा।
