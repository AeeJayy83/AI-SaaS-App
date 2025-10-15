import express from "express";
import { auth } from "../middlewares/auth.js";
import { getPublishedCreations, getUserCreations, toggleLikedCreations } from "../controllers/userController.js";

const router = express.Router();

router.get("/get-user-creations", auth,  getUserCreations);
router.get("/get-published-creations", auth,  getPublishedCreations);
router.post("/toggle-like-creations", auth,  toggleLikedCreations);

export default router;
