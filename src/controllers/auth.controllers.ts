import { Request, Response } from "express";
import { AuthUser, CreateUserProfile, UpdateUser } from "@/protocols/user.protocols";
import authService from "@/services/auth.services";
import httpStatus from "http-status";
import customErrors from "@/errors/customErrors";

export async function signUp(req: Request, res: Response): Promise<void> {
    const profile = req.body as CreateUserProfile;
    if (!profile) throw customErrors.unprocessableEntity("profile");

    await authService.signUp(profile);
    res.sendStatus(httpStatus.CREATED);
}

export async function signIn(req: Request, res: Response): Promise<void> {
    const { email, password } = req.body as AuthUser;
    const { token, playerUserProfile } = await authService.signIn(email, password);

    res.send({ token, playerUserProfile });
}

export async function update(req: Request, res: Response): Promise<void> {
    const { id } = res.locals.user;
    const { email, password, newPassword } = req.body as UpdateUser;
    const profile = await authService.update(id, email, password, newPassword);

    const { password: _password, ...updatedProfile } = profile;
    res.send(updatedProfile);
}

const authController = {
    signUp, signIn, update
}
export default authController;