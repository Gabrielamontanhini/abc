import JoiBase, { Root } from "joi";
import JoiDate from "@joi/date";
import { UpdateProfile } from "@/protocols/profile.protocols";

const Joi = JoiBase.extend(JoiDate) as Root;

export const updateProfileSchema = Joi.object<UpdateProfile>({
  fullName: Joi.string().min(4).max(32).required(),
  nickName: Joi.string().min(4).max(16).required(),
  description: Joi.string().max(255),
  bio: Joi.string().max(128),
  avatarUrl: Joi.string().uri(),
  birthday: Joi.date().format("DD-MM-YYYY").less("now").required(),
});
