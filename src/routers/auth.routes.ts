import { Router } from "express";
import {
  userSchema,
  updateUserSchema,
  userProfileSchema,
} from "@/schemas/user.schemas";
import { signIn, signUp, update } from "@/controllers/auth.controllers";
import { validateBody } from "@/middlewares/validateSchema";
import validateAuth from "@/middlewares/validateAuth";

const router = Router();
router
  .post("/sign-up", validateBody(userProfileSchema), signUp)
  .post("/sign-in", validateBody(userSchema), signIn)
  .put("/", validateAuth, validateBody(updateUserSchema), update);

export default router;
