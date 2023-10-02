import { Router } from "express";

const userRouter = Router()

userRouter.post("/users")
userRouter.get("/users")
userRouter.patch("/users/:userId")

export default userRouter 