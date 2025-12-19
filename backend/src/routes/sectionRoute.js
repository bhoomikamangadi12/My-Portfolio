import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const sections = [
    { name: "Home", type: "section", id: "Home" },
    { name: "About", type: "section", id: "About" },
    { name: "Resume", type: "page", path: "/resume" },
    { name: "Projects", type: "page", path: "/projects" },
    { name: "Contact", type: "section", id: "Contact" },
  ];
  res.json({ sections });
});

export default router;
