import { Request, Response } from "express";
import { UpdateProfile } from "@/protocols/profile.protocols";
import { User } from "@prisma/client";
import profileService from "@/services/profile.services";
import customErrors from "@/errors/customErrors";
import authService from "@/services/auth.services";

export async function find(req: Request, res: Response): Promise<void> {
    const nickname = req.query.nickname as string;
    const email = req.query.email as string;
    const result = await authService.find(nickname);

    res.send(result);
}

export async function update(req: Request, res: Response): Promise<void> {
    const { id } = res.locals.user as User;
    const profile = req.body as UpdateProfile;
    if (!profile) throw customErrors.unprocessableEntity("profile");

    const updatedProfile = await profileService.update(id, profile);
    res.send(updatedProfile);
}

export async function deleteById(_req: Request, res: Response): Promise<void> {
    const { id } = res.locals.user as User;
    const deletedProfile = await profileService.deleteById(id);
    res.send(deletedProfile);
}

export async function count(_req: Request, res: Response): Promise<void> {
    const count = await profileService.count();
    res.send({ count });
}

const profileController = {
    update, deleteById, find, count
}
export default profileController;