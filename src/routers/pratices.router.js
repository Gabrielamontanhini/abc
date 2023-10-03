import { Router } from "express";
import { controllerDeletePracticeById, controllerEditPracticeById, controllerGetPractices, controllerPostPractices } from "../controllers/practices.controller.js";


const practiceRouter = Router()


practiceRouter.post("/practices", controllerPostPractices)
practiceRouter.get("/practices", controllerGetPractices) //opstar produto
practiceRouter.patch("/practice/:practiceId", controllerEditPracticeById)
practiceRouter.delete("/practices/:practiceId", controllerDeletePracticeById)

export default practiceRouter