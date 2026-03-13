import React from "react";
import { useNavigate } from "react-router-dom";

const Resume: React.FC = () => {
  const navigate = useNavigate();

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

        <a
          href="https://github.com/bhoomikamangadi12/My-Portfolio/raw/master/frontend/public/files/Bhoomika_Angadi_Resume.pdf"
          download
          style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#c8a96e", color: "#0a0f1e", padding: "8px 20px", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500, textDecoration: "none", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e8c99e")}
          onMouseLeave={e => (e.currentTarget.style.background = "#c8a96e")}
        >
          ⬇ Download CV
        </a>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "4rem 3rem" }}>

        {/* Header */}
        <div style={{ marginBottom: "4rem", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.25rem" }}>
            <span style={{ width: 30, height: 1, background: "#c8a96e", display: "inline-block" }} />
            Resume
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700, lineHeight: 1.1, marginBottom: "1rem" }}>
            Bhoomika <em style={{ color: "#c8a96e", fontStyle: "italic" }}>Angadi</em>
          </h1>
          <p style={{ fontSize: 15, color: "#9ca3af", fontWeight: 300, letterSpacing: "0.5px" }}>
            Software Developer &nbsp;·&nbsp; React.js &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp; Node.js
          </p>
        </div>

        {/* Main Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "4rem", alignItems: "start" }}>

          {/* LEFT COLUMN */}
          <div>

            {/* Experience */}
            <div style={{ marginBottom: "3.5rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "2rem" }}>
                Experience
                <div style={{ flex: 1, height: 1, background: "rgba(200,169,110,0.2)" }} />
              </div>

              <div style={{ borderLeft: "1px solid rgba(200,169,110,0.3)", paddingLeft: "1.5rem", position: "relative" }}>
                {/* dot */}
                <div style={{ position: "absolute", left: -5, top: 6, width: 9, height: 9, borderRadius: "50%", background: "#c8a96e" }} />
                <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#c8a96e", marginBottom: 6 }}>
                  RedGreenBlue Pvt. Ltd.
                </div>
                <div style={{ fontSize: 18, color: "#f8f6f1", marginBottom: 4, fontWeight: 400 }}>Software Developer</div>
                <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: "1.25rem", display: "flex", alignItems: "center", gap: 8 }}>
                  June 2024 — Present
                  <span style={{ background: "rgba(200,169,110,0.1)", border: "1px solid rgba(200,169,110,0.3)", color: "#c8a96e", fontSize: 10, padding: "2px 10px", letterSpacing: "1px" }}>Current</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    "Built and maintained scalable web applications using React.js, Node.js, and TypeScript.",
                    "Optimized application performance, reducing load times by 30%.",
                    "Collaborated with cross-functional teams to deliver pixel-perfect UI/UX experiences.",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, fontSize: 13, color: "#9ca3af", lineHeight: 1.7, fontWeight: 300 }}>
                      <span style={{ width: 4, height: 4, borderRadius: "50%", background: "#c8a96e", marginTop: 8, flexShrink: 0 }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "2rem" }}>
                Education
                <div style={{ flex: 1, height: 1, background: "rgba(200,169,110,0.2)" }} />
              </div>

              <div style={{ borderLeft: "1px solid rgba(200,169,110,0.3)", paddingLeft: "1.5rem", position: "relative" }}>
                <div style={{ position: "absolute", left: -5, top: 6, width: 9, height: 9, borderRadius: "50%", background: "#c8a96e" }} />
                <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#c8a96e", marginBottom: 6 }}>
                  Jain College of Engineering and Technology, Hubli
                </div>
                <div style={{ fontSize: 18, color: "#f8f6f1", marginBottom: 4, fontWeight: 400 }}>B.E in Computer Science</div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>2019 — 2023</div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div>

            {/* Skills */}
            <div style={{ background: "#111827", border: "1px solid rgba(200,169,110,0.2)", padding: "1.75rem", marginBottom: "1.5rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #c8a96e, transparent)" }} />
              <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.25rem" }}>Tech Stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["React.js", "TypeScript", "JavaScript", "Node.js", "TailwindCSS", "SCSS", "React Native", "SQL", "Git & GitHub", "HTML"].map(skill => (
                  <span key={skill}
                    style={{ fontSize: 11, padding: "6px 12px", border: "1px solid rgba(200,169,110,0.2)", color: "#9ca3af", letterSpacing: "0.5px", cursor: "default", transition: "all 0.2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.color = "#c8a96e"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"; e.currentTarget.style.color = "#9ca3af"; }}
                  >{skill}</span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div style={{ background: "#111827", border: "1px solid rgba(200,169,110,0.2)", padding: "1.75rem" }}>
              <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.25rem" }}>At a glance</div>
              {[
                { num: "2+", label: "Years of Experience" },
                { num: "30%", label: "Performance Improvement" },
                { num: "B.E", label: "Computer Science Degree" },
              ].map((s, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.85rem 0", borderBottom: i < 2 ? "1px solid rgba(200,169,110,0.1)" : "none" }}>
                  <div style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.5px" }}>{s.label}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#c8a96e" }}>{s.num}</div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;