import { Request, Response } from "express";
import httpStatus from "http-status";
import { practiceServices } from "@/services/practices.services";
import { PracticeCreateInput } from "@/repositories/practices.repository";
import { PracticeParams } from "@/protocols/practice.protocols";

export async function createPractices(req: Request, res: Response) {
  const { name } = req.body as PracticeCreateInput;
  const result = await practiceServices.createPractice(name);
  return res.status(httpStatus.OK).send(result);
}

export async function getPractices(req: Request, res: Response) {
  const result = await practiceServices.getPractice();
  return res.status(httpStatus.OK).send(result);
}

export async function updatePractice(req: Request, res: Response) {
  const { practiceId } = req.params as PracticeParams;
  const { name } = req.body as PracticeCreateInput;
  const result = await practiceServices.updatePractice(
    Number(practiceId),
    name
  );
  return res.status(httpStatus.OK).send(result);
}

export async function deletePractice(req: Request, res: Response) {
  const { practiceId } = req.params as PracticeParams;
  const result = await practiceServices.deletePractice(Number(practiceId));
  return res.status(httpStatus.OK).send(result);
}
