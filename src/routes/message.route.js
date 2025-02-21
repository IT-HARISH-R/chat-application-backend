import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessage } from "../controllers/message.controller.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/users",  auth.checkAuth, getUsersForSidebar);
router.get("/:id",  auth.checkAuth, getMessages);

router.post("/send/:id",  auth.checkAuth, sendMessage);
// router.get("/users", protectRoute, getUsersForSidebar);
// router.get("/:id", protectRoute, getMessages);

// router.post("/send/:id", protectRoute, sendMessage);

export default router;
