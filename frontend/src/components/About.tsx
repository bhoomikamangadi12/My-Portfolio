import React from "react";

const About: React.FC = () => {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* HERO */}
      <section id="Home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "0 3rem", paddingTop: "68px", background: "#0a0f1e",
        position: "relative", overflow: "hidden"
      }}>
        {/* Glow */}
        <div style={{ position: "absolute", top: "-20%", right: "-5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(200,169,110,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "4rem", alignItems: "center", width: "100%", maxWidth: 1100 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1.5rem" }}>
              <span style={{ width: 30, height: 1, background: "#c8a96e", display: "inline-block" }} />
              Available for opportunities
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 5vw, 58px)", lineHeight: 1.1, fontWeight: 700, marginBottom: "1.5rem", color: "#f8f6f1" }}>
              Crafting <em style={{ color: "#c8a96e", fontStyle: "italic" }}>digital</em><br />
              experiences that<br />matter.
            </h1>
            <p style={{ fontSize: 15, color: "#9ca3af", lineHeight: 1.9, maxWidth: 460, marginBottom: "2.5rem", fontWeight: 300 }}>
              Software Developer specializing in React.js & TypeScript — turning complex ideas into scalable, high-performance web applications.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "#c8a96e", color: "#0a0f1e", padding: "13px 28px", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", fontWeight: 500, border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#e8c99e")}
                onMouseLeave={e => (e.currentTarget.style.background = "#c8a96e")}
              >View My Work</button>
              <button
                onClick={() => document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" })}
                style={{ background: "transparent", color: "#f8f6f1", padding: "13px 28px", fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", border: "1px solid rgba(248,246,241,0.2)", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "all 0.2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.color = "#c8a96e"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(248,246,241,0.2)"; e.currentTarget.style.color = "#f8f6f1"; }}
              >Contact Me</button>
            </div>
          </div>

          {/* Stats Card */}
          <div style={{ background: "#111827", border: "1px solid rgba(200,169,110,0.2)", padding: "2rem", minWidth: 260, position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #c8a96e, transparent)" }} />
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#9ca3af", marginBottom: "1.5rem" }}>At a glance</div>
            {[
              { num: "2+", label: "Years Experience", sub: "React · Node · TS" },
              { num: "30%", label: "Performance Gains", sub: "Delivered" },
              { num: "B.E", label: "Computer Science", sub: "JCET, Hubli" },
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", padding: "1rem 0", borderBottom: i < 2 ? "1px solid rgba(200,169,110,0.15)" : "none" }}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#c8a96e" }}>{s.num}</div>
                  <div style={{ fontSize: 10, letterSpacing: "1px", textTransform: "uppercase", color: "#9ca3af" }}>{s.label}</div>
                </div>
                <div style={{ fontSize: 10, color: "#9ca3af", textAlign: "right" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="About" style={{ padding: "6rem 3rem", background: "#111827", borderTop: "1px solid rgba(200,169,110,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1rem" }}>
          About
          <div style={{ flex: 1, height: 1, background: "rgba(200,169,110,0.2)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", marginTop: "3rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, lineHeight: 1.2, color: "#f8f6f1", marginBottom: "1.5rem" }}>
              I build things<br />for the <em style={{ color: "#c8a96e" }}>web.</em>
            </h2>
            <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.9, fontWeight: 300, marginBottom: "1.25rem" }}>
              I'm a frontend developer with a passion for building clean, performant interfaces. I specialize in React.js ecosystems and love turning complex requirements into elegant solutions.
            </p>
            <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem" }}>
              Currently at RedGreenBlue Pvt. Ltd., I've helped scale web platforms used by thousands — with a focus on developer experience and end-user delight.
            </p>
            <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1rem" }}>Tech Stack</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["React.js", "TypeScript", "JavaScript", "Node.js", "TailwindCSS", "SCSS", "React Native", "SQL", "Git & GitHub"].map(skill => (
                <span key={skill} style={{ fontSize: 11, padding: "6px 14px", border: "1px solid rgba(200,169,110,0.2)", color: "#9ca3af", letterSpacing: "0.5px", transition: "all 0.2s", cursor: "default" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#c8a96e"; e.currentTarget.style.color = "#c8a96e"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(200,169,110,0.2)"; e.currentTarget.style.color = "#9ca3af"; }}
                >{skill}</span>
              ))}
            </div>
          </div>
          <div>
            {[
              { co: "RedGreenBlue Pvt. Ltd.", role: "Software Developer", date: "June 2024 — Present" },
              { co: "Jain College of Engineering, Hubli", role: "B.E — Computer Science", date: "2019 — 2023" },
            ].map((e, i) => (
              <div key={i} style={{ padding: "1.5rem 0", borderBottom: "1px solid rgba(200,169,110,0.15)" }}>
                <div style={{ fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase", color: "#c8a96e", marginBottom: 6 }}>{e.co}</div>
                <div style={{ fontSize: 16, color: "#f8f6f1", marginBottom: 6 }}>{e.role}</div>
                <div style={{ fontSize: 11, color: "#9ca3af" }}>{e.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="Contact" style={{ padding: "6rem 3rem", background: "#0a0f1e", borderTop: "1px solid rgba(200,169,110,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 10, letterSpacing: "3px", textTransform: "uppercase", color: "#c8a96e", marginBottom: "1rem" }}>
          Contact
          <div style={{ flex: 1, height: 1, background: "rgba(200,169,110,0.2)" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", marginTop: "3rem" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 38, color: "#f8f6f1", marginBottom: "1rem", lineHeight: 1.2 }}>
              Let's work<br />together.
            </h2>
            <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.9, fontWeight: 300, marginBottom: "2rem" }}>
              I'm open to full-time roles, freelance projects, and interesting collaborations. Feel free to reach out.
            </p>
            {["Bengaluru, Karnataka, India", "Open to remote & on-site", "Available immediately"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "1rem 0", borderBottom: "1px solid rgba(200,169,110,0.15)", color: "#9ca3af", fontSize: 13 }}>
                <div style={{ width: 6, height: 6, background: "#c8a96e", borderRadius: "50%", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
          <div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: "1.25rem" }}>
              {["Name", "Email"].map(label => (
                <div key={label}>
                  <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>{label}</label>
                  <input placeholder={label === "Name" ? "Your name" : "your@email.com"}
                    style={{ width: "100%", background: "#111827", border: "1px solid rgba(200,169,110,0.2)", padding: "12px 16px", fontSize: 13, color: "#f8f6f1", fontFamily: "'DM Sans', sans-serif", outline: "none" }} />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "1.25rem" }}>
              <label style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase", color: "#9ca3af", marginBottom: 8, display: "block" }}>Message</label>
              <textarea placeholder="Tell me about the opportunity..."
                style={{ width: "100%", background: "#111827", border: "1px solid rgba(200,169,110,0.2)", padding: "12px 16px", fontSize: 13, color: "#f8f6f1", fontFamily: "'DM Sans', sans-serif", outline: "none", height: 110, resize: "none" }} />
            </div>
            <button
              style={{ width: "100%", background: "#c8a96e", color: "#0a0f1e", padding: 14, fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", fontWeight: 500, border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#e8c99e")}
              onMouseLeave={e => (e.currentTarget.style.background = "#c8a96e")}
            >Send Message →</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;