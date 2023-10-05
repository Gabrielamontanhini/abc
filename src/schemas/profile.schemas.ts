import { UpdateProfile } from "@/protocols/profile.protocols";
import JoiBase, { Root } from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate) as Root;

export const updateProfileSchema = Joi.object<UpdateProfile>({
    fullname: Joi.string().min(4).max(32).required(),
    description: Joi.string().max(255),
    avatarUrl: Joi.string().uri(),
    birthday: Joi.date().format('DD-MM-YYYY').less('now').required()
});