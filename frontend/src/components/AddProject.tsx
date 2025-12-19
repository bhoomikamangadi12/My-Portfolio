import { useState } from "react";
// import { addProject } from "../api";

const AddProjects: React.FC = () => {
  const [title, setTitle] = useState("");
  const [tech, setTech] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setTitle("");
    setTech("");
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Project Title"
          className="border p-2 w-full"
          required
        />
        <input
          value={tech}
          onChange={(e) => setTech(e.target.value)}
          placeholder="Tech Stack"
          className="border p-2 w-full"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Project
        </button>
      </form>
    </div>
  );
};
export default AddProjects;
