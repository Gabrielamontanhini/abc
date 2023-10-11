import Joi from "joi";
import {
  PracticeCreateInput,
  PracticeUpsert,
} from "@/repositories/practices.repository";
import { PracticeParams } from "@/protocols/practice.protocols";

export const practiceBody = Joi.object<PracticeCreateInput>({
  name: Joi.string().required(),
});

export const practiceParams = Joi.object<PracticeParams>({
  practiceId: Joi.number().required(),
});

export const practiceAdvantageBody = Joi.object<PracticeUpsert>({
  advantage: Joi.string().required(),
  description: Joi.string().required(),
});
