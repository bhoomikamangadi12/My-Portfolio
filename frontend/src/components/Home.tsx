import React, { useState, useEffect } from "react";
import About from "./About";
import { Link, useLocation } from "react-router-dom";
import { getSections } from "../api";
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si";

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
  const location = useLocation();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
    setMobileMenuOpen(false);
  };

  // Fetch sections once on mount
  useEffect(() => {
    const fetchSections = async () => {
      try {
        const data = await getSections();
        console.log(data, "headersections");
        setSections(data);
      } catch (err) {
        console.error("Error fetching sections:", err);
      }
    };

    fetchSections();
  }, []);

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      let currentSection: string = active;

      for (const sec of sections) {
        if (sec.type === "section" && sec.id) {
          const sectionEl = document.getElementById(sec.id);
          if (sectionEl) {
            const rect = sectionEl.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = sec.id;
              break;
            }
          }
        }
      }

      if (currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [active, sections]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  console.log(
    sections.map((item) => item.name),
    "sectionsssss"
  );

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 px-4">
        <div className="container mx-auto px-4 xl:px-0 flex items-center justify-between h-20">
          <h1 className="text-2xl font-bold text-blue-600">My Portfolio</h1>

          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-6">
            {sections.map((sec) =>
              sec.type === "page" ? (
                <Link
                  key={sec.name}
                  to={sec.path!}
                  className={`font-medium transition-colors ${
                    location.pathname === sec.path
                      ? "text-blue-600 underline"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {sec.name}
                </Link>
              ) : (
                <button
                  key={sec.name}
                  onClick={() => scrollToSection(sec.id!)}
                  className={`font-medium transition-colors ${
                    active === sec.id
                      ? "text-blue-600 underline"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {sec.name}
                </button>
              )
            )}
          </nav>

          <nav className="hidden xl:flex space-x-6"></nav>

          {/* Mobile Nav Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden text-gray-700 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`xl:hidden bg-white border-t border-gray-200 shadow-md transition-all duration-300 overflow-hidden ${
            mobileMenuOpen
              ? "max-h-screen p-4 flex flex-col space-y-3"
              : "max-h-0"
          }`}
        >
          {sections.map((sec) =>
            sec.type === "page" ? (
              <Link
                key={sec.name}
                to={sec.path!}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-medium transition-colors text-left ${
                  location.pathname === sec.path
                    ? "text-blue-600 underline"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {sec.name}
              </Link>
            ) : (
              <button
                key={sec.name}
                onClick={() => scrollToSection(sec.id!)}
                className={`font-medium transition-colors text-left ${
                  active === sec.id
                    ? "text-blue-600 underline"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {sec.name}
              </button>
            )
          )}
        </div>
      </header>
      <About />

      {/* Footer */}
      <footer className="relative bg-gray-50 border-t py-6">
        {/* Back to Top Button */}
        <div
          onClick={scrollToTop}
          className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white border rounded-full w-12 h-12 flex items-center justify-center shadow cursor-pointer hover:bg-gray-100 transition"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          {/* Left: Copyright */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Bhoomika Angadi
          </p>

          {/* Right: Social Icons */}
          <div className="flex space-x-6 text-gray-600 text-xl mt-3 md:mt-0">
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              {/* <SiLinkedin className="w-6 h-6 text-gray-700 hover:text-black" /> */}
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              {/* <SiGithub className="w-6 h-6 text-gray-700 hover:text-black" /> */}
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              {/* <SiWhatsapp className="w-6 h-6 text-gray-700 hover:text-black" /> */}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
