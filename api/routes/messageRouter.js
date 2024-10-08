import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/messageController.js";
import protectedRoute from "../middleware/protectedRoute.js";
const router = Router();

router.post("/send/:id", protectedRoute, sendMessage);
router.get("/:id", protectedRoute, getMessages);

export default router;
