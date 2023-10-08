import { Router } from "express";
import authRouter from "./auth.routes";
import profileRouter from "./profile.routes";
import practiceRouter from "./practices.routes";
import productsRouter from "./products.routes";

const router = Router();
router
  .use("/auth", authRouter)
  .use("/profiles", profileRouter)
  .use("/practices", practiceRouter)
  .use("/products", productsRouter);

export default router;
