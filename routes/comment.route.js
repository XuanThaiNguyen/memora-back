import express from "express";
import {
  addComment,
  getPostComments,
} from "../controllers/comment.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/:postId", getPostComments);
router.post("/", verifyToken, addComment);

export default router;
