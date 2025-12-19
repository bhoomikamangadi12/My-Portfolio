import { Router } from "express";
import projectRoute from "./projectRoute.js";
import sectionRoute from "./sectionRoute.js";

const router = Router();

router.use("/projects", projectRoute);
router.use("/section", sectionRoute);

export default router;
