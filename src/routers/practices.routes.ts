import { Router } from "express";
import {
  createPractices,
  getPractices,
  updatePractice,
  deletePractice,
} from "@/controllers/practices.controllers";
import { validateBody, validateParams } from "@/middlewares/validateSchema";
import { practiceBody, practiceParams } from "@/schemas/practices.schemas";

const practiceRouter = Router();

practiceRouter.post("/", validateBody(practiceBody), createPractices);
practiceRouter.get("/", getPractices);
practiceRouter.put(
  "/:practiceId",
  validateBody(practiceBody),
  validateParams(practiceParams),
  updatePractice
);
practiceRouter.delete(
  "/:practiceId",
  validateParams(practiceParams),
  deletePractice
);

export default practiceRouter;
