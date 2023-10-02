import { Router } from "express";
import userRouter from "./users.router.js";
import productsRouter from "./products.router.js";

const router = Router()
router.use(userRouter)
router.use(productsRouter)

export default router