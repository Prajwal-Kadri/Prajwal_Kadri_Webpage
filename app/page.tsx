"use client";

import { useState } from "react";

const links = {
  linkedin: "https://www.linkedin.com/in/prajwalkadri/",
  github: "https://github.com/thedragoncoder",
  scholar: "https://scholar.google.com/citations?user=REqZexwAAAAJ&hl=en",
  email: "mailto:prajwalk17072001@gmail.com",
};

const publications = [
  { title: "Language Detection in Overlapping Multilingual Speech: A Focus on Indian Languages", venue: "IEEE WiSPNET · 2025", summary: "Developed a separation-first language-identification pipeline for overlapping Indian-language speech, using a synthetic dataset derived from VoxLingua107.", href: "https://ieeexplore.ieee.org/abstract/document/11005336" },
  { title: "Cardiovascular Disease Prediction Using Machine Learning", venue: "IEEE ICITIIT · 2022", summary: "Evaluated five machine-learning classifiers for early heart-disease prediction from physiological and demographic features.", href: "https://ieeexplore.ieee.org/document/9744199/" },
  { title: "Multi-Vehicle Tracking and Speed Estimation Model Using Deep Learning", venue: "ACM IC3 · 2022", summary: "Combined YOLOv5 detection, multi-object tracking, and calibrated pixel-to-distance conversion for real-time vehicle speed estimation.", href: "https://dl.acm.org/doi/abs/10.1145/3549206.3549254" },
];

const projects = [
  { title: "D2D Pairs Sharding Based on Distance", category: "Networks · ns-3 · 5G", summary: "Implemented distance-based D2D clustering and SINR calculation using an ns-3 simulation environment.", href: "https://github.com/thedragoncoder/D2D-clustering" },
  { title: "CAPTCHA Solver", category: "Machine Learning · CNN", summary: "Built CNN-based CAPTCHA solvers and a web application for interactive prediction demos.", href: "https://github.com/thedragoncoder/IE.Recaptcha" },
  { title: "NITK Social Media App", category: "Full-stack · Angular · Node.js", summary: "Created a campus platform for student discussions, anonymous questions, and organization event discovery.", href: "https://github.com/thedragoncoder/nitkSocialApp?tab=readme-ov-file" },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={close}>PK<span>.</span></a>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
        <div className={`nav-links ${open ? "show" : ""}`}>
          <a href="#experience" onClick={close}>Experience</a><a href="#research" onClick={close}>Research</a><a href="#education" onClick={close}>Education</a><a className="nav-contact" href={links.email}>Contact</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Software engineer · Machine learning researcher</p>
          <h1>Prajwal <span>Kadri</span></h1>
          <p className="intro">I build reliable software systems and explore speech and language technologies for more inclusive communication.</p>
          <div className="hero-actions"><a className="button primary" href="#experience">View experience <span>↘</span></a><a className="button text-button" href={links.email}>Get in touch <span>↗</span></a></div>
        </div>
        <aside className="hero-note" aria-label="Current focus"><span className="note-line" /><p>Currently focused on</p><strong>Intelligent information systems, speech processing, and dependable software.</strong></aside>
        <div className="hero-index" aria-hidden="true">01 / 04</div>
      </section>

      <section className="summary section" aria-label="Profile summary"><p className="eyebrow">Profile</p><div><h2>Building at the intersection of production engineering and applied research.</h2><p>I have contributed to Visa profile systems across feature delivery, releases, and security work. Alongside industry experience, my research has examined multilingual speech, computer vision, and machine-learning applications.</p></div></section>

      <section className="experience section" id="experience">
        <div className="section-heading"><p className="eyebrow">Selected experience</p><span>02 / 04</span></div>
        <div className="timeline">
          <article className="role"><div className="role-meta"><span>2023 — 2026</span><span>Visa</span></div><div className="role-content"><h2>Software Developer</h2><p>Built and maintained microservices for Visa profile systems across the full delivery lifecycle, from requirements through deployment and monitoring.</p><ul><li>Delivered 70+ product features and served as release lead for multiple releases.</li><li>Contributed security fixes and cross-functional integrations for scalable profile services.</li></ul><div className="chips"><span>Java</span><span>Spring Boot</span><span>Angular</span><span>TypeScript</span><span>Microservices</span><span>Docker</span><span>Kubernetes</span></div></div></article>
          <article className="role"><div className="role-meta"><span>2022</span><span>Visa</span></div><div className="role-content"><h2>Software Developer Intern</h2><p>Designed and deployed an administrative feature that let teams configure profile fields without manual code changes.</p><ul><li>Reduced profile-field configuration time by 90%.</li><li>Presented the solution to senior leadership after coordinating its integration with existing systems.</li></ul><div className="chips"><span>Java</span><span>Spring Boot</span><span>Angular</span><span>TypeScript</span></div></div></article>
        </div>
      </section>

      <section className="research section" id="research"><div className="section-heading"><p className="eyebrow">Research & publications</p><a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a></div><div className="publication-list">{publications.map((publication, index) => <a className="publication" href={publication.href} target="_blank" rel="noreferrer" key={publication.title}><span className="item-no">0{index + 1}</span><div><h3>{publication.title}</h3><p>{publication.summary}</p></div><div className="publication-meta"><span>{publication.venue}</span><b>↗</b></div></a>)}</div></section>

      <section className="projects section"><div className="section-heading"><p className="eyebrow">Selected projects</p><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a></div><div className="project-grid">{projects.map((project, index) => <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}><span>0{index + 1}</span><h3>{project.title}</h3><p>{project.summary}</p><footer>{project.category}<b>↗</b></footer></a>)}</div></section>

      <section className="education section" id="education"><div className="section-heading"><p className="eyebrow">Education & recognition</p><span>04 / 04</span></div><div className="education-grid"><article><p className="edu-date">Graduate study</p><h2>Carnegie Mellon University</h2><p>Master of Science in Intelligent Information Systems<br />Language Technologies Institute</p></article><article><p className="edu-date">Undergraduate study</p><h2>National Institute of Technology Karnataka</h2><p>Bachelor of Technology, Information Technology<br />GPA: 8.75 / 10</p></article><article className="recognition"><p className="edu-date">Recognition</p><h2>Code SIG Head</h2><p>Institute of Engineers, NITK · 2022–23</p><a href="https://codeforces.com/profile/PrajwalKadri" target="_blank" rel="noreferrer">Codeforces max rating: 1655 ↗</a></article></div></section>

      <footer className="footer"><div><p className="eyebrow">Let’s connect</p><a className="email" href={links.email}>prajwalk17072001@gmail.com <span>↗</span></a></div><div className="footer-links"><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.scholar} target="_blank" rel="noreferrer">Google Scholar</a><span>© 2026 Prajwal Kadri</span></div></footer>
    </main>
  );
}
