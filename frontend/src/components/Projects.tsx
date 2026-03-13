import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  tech: string[];
  description: string;
  github?: string;
  live?: string;
}

const Projects: React.FC = () => {
  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "My Portfolio Website",
      tech: ["React.js", "TypeScript", "TailwindCSS"],
      description: "A personal portfolio website showcasing my skills, experience, and projects. Built with React.js and deployed on Vercel.",
      github: "https://github.com/bhoomikamangadi12/My-Portfolio",
      live: "https://bhoomika-angadiportfolio.vercel.app",
    },
    {
      id: 2,
      title: "Project Two",
      tech: ["React.js", "Node.js", "MongoDB"],
      description: "Add your project description here. Describe what problem it solves and what you built.",
      github: "https://github.com/bhoomikamangadi12",
    },
    {
      id: 3,
      title: "Project Three",
      tech: ["TypeScript", "Express", "SQL"],
      description: "Add your project description here. Describe what problem it solves and what you built.",
      github: "https://github.com/bhoomikamangadi12",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0f1e", fontFamily: "'DM Sans', sans-serif", color: "#f8f6f1" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Top Bar */}
      <div style={{ padding: "1.5rem 3rem", borderBottom: "1px solid rgba(200,169,110,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(10,15,30,0.97)", backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 10 }}>
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "1px solid rgba(200,169,110,0.3)", color: "#c8a96e", padding: "8px 20px", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.background = "#c8a96e"; e.currentTarget.style.color = "#0a0f1e"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "none"; e.currentTarget.style.color = "#c8a96e"; }}
        >← Back</button>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: "#c8a96e" }}>Bhoomika Angadi</div>
        <div style={{ width: 100 }} />
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 3rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.25rem" }}>
            <span style={{ width: 30, height: 1, background: "#c8a96e", display: "inline-block" }} />
            Featured Work
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
            Things I've <em style={{ color: "#c8a96e", fontStyle: "italic" }}>built.</em>
          </h1>
          <p style={{ fontSize: 15, color: "#9ca3af", fontWeight: 300, maxWidth: 480 }}>
            A collection of projects that reflect my passion for clean code and great user experiences.
          </p>
        </div>

        {/* Projects */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((project, i) => (
            <div key={project.id} style={{ background: "#111827", border: "1px solid rgba(200,169,110,0.2)", padding: "2rem 2.5rem", position: "relative", transition: "border-color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.5)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)")}
            >
              {/* top accent */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: i === 0 ? "linear-gradient(90deg, #c8a96e, transparent)" : "transparent", transition: "all 0.2s" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: 8 }}>
                    Project {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#f8f6f1", marginBottom: "0.75rem", fontWeight: 400 }}>
                    {project.title}
                  </h2>
                  <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.8, fontWeight: 300, marginBottom: "1.25rem", maxWidth: 520 }}>
                    {project.description}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {project.tech.map(t => (
                      <span key={t} style={{ fontSize: 10, padding: "4px 12px", border: "1px solid rgba(200,169,110,0.2)", color: "#9ca3af", letterSpacing: "0.5px" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#c8a96e", textDecoration: "none", border: "1px solid rgba(200,169,110,0.3)", padding: "8px 18px", transition: "all 0.2s", display: "block", textAlign: "center" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#c8a96e"; e.currentTarget.style.color = "#0a0f1e"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c8a96e"; }}
                    >GitHub →</a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", color: "#0a0f1e", textDecoration: "none", background: "#c8a96e", padding: "8px 18px", transition: "all 0.2s", display: "block", textAlign: "center" }}
                      onMouseEnter={e => (e.currentTarget.style.background = "#e8c99e")}
                      onMouseLeave={e => (e.currentTarget.style.background = "#c8a96e")}
                    >Live Site →</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;