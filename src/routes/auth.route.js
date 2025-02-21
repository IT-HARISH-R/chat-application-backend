import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import auth from "../middleware/auth.js";  // ✅ Works now

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// router.put("/update-profile", protectRoute, updateProfile);
router.put("/update-profile",  auth.checkAuth, updateProfile);
console.log("hhhhhhh")
// router.get("/check", protectRoute, checkAuth);
router.get("/check", auth.checkAuth, checkAuth);

export default router;
