import { AuthUser, CreateUserProfile, UpdateUser } from "@/protocols/user.protocols";
import Joi, { Root } from "joi";
import JoiDate from "@joi/date";

const JoiDateExtended = Joi.extend(JoiDate) as Root;

export const userSchema = Joi.object<AuthUser>({
    email: Joi.string().email().min(9).max(64).required(),
    password: Joi.string().min(3).max(255).required()
});

export const updateUserSchema = Joi.object<UpdateUser>({
    email: Joi.string().email().min(9).max(64).required(),
    password: Joi.string().min(3).max(255).required(),
    newPassword: Joi.string().min(3).max(255)
});

export const userProfileSchema = Joi.object<CreateUserProfile>({
    nickname: Joi.string().min(4).max(16).required(),
    fullname: Joi.string().min(4).max(32).required(),
    email: Joi.string().email().min(9).max(64).required(),
    password: Joi.string().min(3).max(255).required(),
    description: Joi.string().max(255),
    bio: Joi.string().max(128),
    avatarUrl: Joi.string().uri(),
    birthday: JoiDateExtended.date().format('DD-MM-YYYY').less('now').required()
});