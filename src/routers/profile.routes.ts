import { Router } from "express";
import validateAuth from "@/middlewares/validateAuth";
import { validateBody } from "@/middlewares/validateSchema";
import { updateProfileSchema } from "@/schemas/profile.schemas";
import {
  update,
  deleteById,
  find,
  count,
} from "@/controllers/profile.controllers";

const router = Router();
router
  .get("/count", count)
  .all("/*", validateAuth)
  .get("/find-by", find)
  .patch("/", validateBody(updateProfileSchema), update)
  .delete("/", deleteById);

export default router;
