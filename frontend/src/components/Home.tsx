import React, { useState, useEffect } from "react";
import About from "./About";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";
import { useNavigate } from "react-router-dom";

interface Section {
  name: string;
  type: "section" | "page";
  id?: string;
  path?: string;
}

const Home: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [active, setActive] = useState("Home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    setSections([
      { name: "Home", type: "section", id: "Home" },
      { name: "About", type: "section", id: "About" },
      { name: "Projects", type: "page", path: "/projects" },
      { name: "Resume", type: "page", path: "/resume" },
      { name: "Contact", type: "section", id: "Contact" },
    ]);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let currentSection: string = active;
      for (const sec of sections) {
        if (sec.type === "section" && sec.id) {
          const el = document.getElementById(sec.id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sec.id;
              break;
            }
          }
        }
      }
      if (currentSection !== active) setActive(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, sections]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div style={{ background: "#0a0f1e", minHeight: "100vh", fontFamily: "'DM Sans', sans-serif", color: "#f8f6f1" }}>

      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Header */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 3rem", height: "68px",
        background: scrolled ? "rgba(10,15,30,0.97)" : "rgba(10,15,30,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(200,169,110,0.2)",
        transition: "all 0.3s"
      }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "#c8a96e" }}>
          Bhoomika Angadi
        </div>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="hidden xl:flex">
          {sections.map((sec) =>
            sec.type === "page" ? (
              <button key={sec.name} onClick={() => navigate(sec.path!)}
                style={{ background: "none", border: "none", fontSize: 13, color: "#9ca3af", letterSpacing: "0.5px", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#c8a96e")}
                onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
              >{sec.name}</button>
            ) : (
              <button key={sec.name} onClick={() => scrollToSection(sec.id!)}
                style={{ background: "none", border: "none", fontSize: 13, cursor: "pointer", letterSpacing: "0.5px", transition: "color 0.2s",
                  color: active === sec.id ? "#c8a96e" : "#9ca3af",
                  borderBottom: active === sec.id ? "1px solid #c8a96e" : "none",
                  paddingBottom: active === sec.id ? "2px" : "0"
                }}
              >{sec.name}</button>
            )
          )}
          <button
            onClick={() => scrollToSection("Contact")}
            style={{ fontSize: 11, border: "1px solid #c8a96e", color: "#c8a96e", padding: "8px 20px", letterSpacing: "1.5px", textTransform: "uppercase", background: "transparent", cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "#c8a96e"; e.currentTarget.style.color = "#0a0f1e"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c8a96e"; }}
          >Hire Me</button>
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMobileMenu} className="xl:hidden" style={{ background: "none", border: "none", color: "#9ca3af", cursor: "pointer" }}>
          <svg style={{ width: 20, height: 20 }} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {mobileMenuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      <div className="xl:hidden" style={{
        position: "fixed", top: 68, left: 0, right: 0, zIndex: 40,
        background: "#0a0f1e", borderBottom: "1px solid rgba(200,169,110,0.2)",
        overflow: "hidden", maxHeight: mobileMenuOpen ? "300px" : "0",
        transition: "max-height 0.3s"
      }}>
        <div style={{ display: "flex", flexDirection: "column", padding: "1.5rem 3rem", gap: 20 }}>
          {sections.map((sec) =>
            sec.type === "page" ? (
              <button key={sec.name} onClick={() => { navigate(sec.path!); setMobileMenuOpen(false); }}
                style={{ background: "none", border: "none", fontSize: 13, color: "#9ca3af", textAlign: "left", cursor: "pointer", letterSpacing: "0.5px" }}
              >{sec.name}</button>
            ) : (
              <button key={sec.name} onClick={() => scrollToSection(sec.id!)}
                style={{ background: "none", border: "none", fontSize: 13, textAlign: "left", cursor: "pointer", letterSpacing: "0.5px", color: active === sec.id ? "#c8a96e" : "#9ca3af" }}
              >{sec.name}</button>
            )
          )}
        </div>
      </div>

      <About />

      {/* Footer */}
      <footer style={{ padding: "2rem 3rem", borderTop: "1px solid rgba(200,169,110,0.2)", background: "#0a0f1e", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div style={{ fontSize: 11, color: "#9ca3af", letterSpacing: "0.5px" }}>
          © {new Date().getFullYear()} Bhoomika Angadi — Software Developer
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="https://www.linkedin.com/in/bhoomika-angadi-19b992249" target="_blank" rel="noopener noreferrer"
  style={{ color: "#9ca3af", transition: "color 0.2s" }}
  onMouseEnter={e => (e.currentTarget.style.color = "#0a66c2")}
  onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
>
  <SiLinkedin style={{ width: 18, height: 18 }} />
</a>
<a href="https://github.com/bhoomikamangadi12" target="_blank" rel="noopener noreferrer"
  style={{ color: "#9ca3af", transition: "color 0.2s" }}
  onMouseEnter={e => (e.currentTarget.style.color = "#f8f6f1")}
  onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
>
  <SiGithub style={{ width: 18, height: 18 }} />
</a>
<a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
  style={{ color: "#9ca3af", transition: "color 0.2s" }}
  onMouseEnter={e => (e.currentTarget.style.color = "#25d366")}
  onMouseLeave={e => (e.currentTarget.style.color = "#9ca3af")}
>
  <SiWhatsapp style={{ width: 18, height: 18 }} />
</a>
        </div>
        <div onClick={scrollToTop} style={{ fontSize: 10, color: "#c8a96e", letterSpacing: "2px", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
          Back to top ↑
        </div>
      </footer>
    </div>
  );
};

export default Home;