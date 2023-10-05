import { Router } from "express";
import authRouter from "./auth.routes";
import profileRouter from "./profile.routes";
import practiceRouter from "./pratices.routes";
import productsRouter from "./products.routes";

const router = Router();
router
    .use("/auth", authRouter)
    .use("/profiles", profileRouter)
    .use("/pratices", practiceRouter)
    .use("/products", productsRouter);

export default router;