import React from "react";

const Resume: React.FC = () => {
  return (
    <main className="pt-12 px-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            My <span className="text-blue-600">Resume</span>
          </h1>
          <p className="text-lg text-gray-600">
            A quick snapshot of my education, experience, and skills
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          {/* Download Button */}
          <div className="flex justify-center mb-8">
            <a
              href="/files/Resume.pdf"
              download
              className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
            >
              📄 Download Resume
            </a>
          </div>

          {/* Education Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              🎓 Education
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-xl font-semibold text-blue-600">
                  B.E in Computer Science
                </h3>
                <p className="text-gray-700">
                  Jain college of Engineering and technology.Hubli • 2019 – 2023
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              💼 Experience
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">
                <h3 className="text-2xl font-semibold text-gray-900">
                  Software Developer
                </h3>
                <p className="text-gray-500 text-sm mb-3">
                  RedGreenBlue pvt ltd. Company • June 2024 – Present
                </p>

                <ul className="list-disc pl-5 text-gray-700 leading-relaxed space-y-2">
                  <li>
                    Built and maintained{" "}
                    <span className="font-medium text-gray-900">
                      scalable web applications
                    </span>{" "}
                    using React.js, Node.js, and TypeScript.
                  </li>
                  <li>
                    Optimized application performance, reducing load times by{" "}
                    <span className="text-blue-600 font-semibold">30%</span>.
                  </li>
                  <li>
                    Collaborated with cross-functional teams (design, QA,
                    backend) to deliver{" "}
                    <span className="font-medium text-gray-900">
                      pixel-perfect UI/UX
                    </span>
                    .
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              🛠️ Skills
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "React.js",
                "JavaScript (ES6+)",
                "TypeScript",
                "TailwindCSS",
                "HTML",
                "React Native",
                "SCSS",
                "SQL",
                "Git & GitHub",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-full shadow-sm hover:bg-blue-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Resume;
