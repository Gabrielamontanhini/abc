import httpStatus from "http-status";
import { serviceDeletePracticeById, serviceGetPractices, servicePatchPracticeById, servicePostPractice } from "../services/practices.services.js";

export async function controllerPostPractices(req, res){
const practice = req.body.descricao
await servicePostPractice(practice)
res.status(httpStatus.OK).send(practice)
}

export async function controllerGetPractices(req, res){
    const practices = await serviceGetPractices()
    return res.status(httpStatus.OK).send(practices)
}

export async function controllerEditPracticeById(req, res){
    const {practiceId} = req.params
    const  descricao  = req.body.descricao
  await servicePatchPracticeById(Number(practiceId), descricao)
    return res.status(httpStatus.OK).send(descricao)
}


export async function controllerDeletePracticeById(req, res){
    const {practiceId} = req.params
    await serviceDeletePracticeById(Number(practiceId))
    return res.status(httpStatus.OK).send(practiceId)
}