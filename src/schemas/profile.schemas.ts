import { UpdateProfile } from "@/protocols/profile.protocols";
import JoiBase, { Root } from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate) as Root;

export const updateProfileSchema = Joi.object<UpdateProfile>({
    fullname: Joi.string().min(4).max(32).required(),
    nickname: Joi.string().min(4).max(16).required(),
    description: Joi.string().max(255),
    bio: Joi.string().max(128),
    avatarUrl: Joi.string().uri(),
    birthday: Joi.date().format('DD-MM-YYYY').less('now').required()
});