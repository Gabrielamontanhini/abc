import { Router } from "express";
import authRouter from "@/routers/auth.routes";
import profileRouter from "@/routers/profile.routes";

const router = Router();
router
    .use("/auth", authRouter)
    .use("/profiles", profileRouter);

export default router;