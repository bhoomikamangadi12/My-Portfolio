import React, { useEffect, useState } from "react";
import axios from "axios";
import { getProjects, getSections } from "../api";
import AddProjects from "./AddProject";

interface Project {
  _id: string;
  title: string;
  tech: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  console.log(projects, "projectsqweq");

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <main
      className="pt-10 px-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen"
      id="Projects"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-lg text-gray-600">
            A showcase of the applications and solutions I’ve built
          </p>
        </div>

        {/* Projects Card */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
              Featured Work
            </h2>

            <div className="space-y-6">
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100"
                >
                  <h3 className="text-xl font-semibold text-blue-600">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{project.description}</p>
                  <p className="mt-3 text-sm text-gray-500">
                    <span className="font-medium text-gray-800">Tech:</span>{" "}
                    {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Projects;
