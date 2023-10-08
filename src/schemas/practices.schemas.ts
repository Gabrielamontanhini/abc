import Joi from "joi";
import { PracticeCreateInput } from "@/repositories/practices.repository";
import { PracticeParams } from "@/protocols/practice.protocols";

export const practiceBody = Joi.object<PracticeCreateInput>({
  description: Joi.string().required(),
});

export const practiceParams = Joi.object<PracticeParams>({
  practiceId: Joi.number().required(),
});
