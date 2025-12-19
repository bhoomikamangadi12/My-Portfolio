import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      tech: "React, TailwindCSS",
      description:
        "A modern personal portfolio built with React and Tailwind CSS.",
    },
    {
      id: 2,
      title: "E-commerce Store",
      tech: "React, Node.js, MongoDB",
      description:
        "An online shop with product search, cart, and checkout features.",
    },
    {
      id: 3,
      title: "Task Manager",
      tech: "React, Redux, Express",
      description: "A productivity app to manage daily tasks and deadlines.",
    },
  ];

  res.json({ projects });
});

export default router; // ✅ important
