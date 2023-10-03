import { Router } from "express";
import userRouter from "./users.router.js";
import productsRouter from "./products.router.js";
import practiceRouter from "./pratices.router.js";

const router = Router()
router.use(userRouter)
router.use(productsRouter)
router.use(practiceRouter)
export default router