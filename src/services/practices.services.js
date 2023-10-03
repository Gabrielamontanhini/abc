import { repositoryEditPracticeById, repositoryGetPractices, repositoryPostPractice, respositoryDeletePracticeById } from "../repository/practices.repository.js"

export async function servicePostPractice(practice){
    const postedPractice = await repositoryPostPractice(practice)
    return postedPractice

}

export async function serviceGetPractices(){
    const allPractices = await repositoryGetPractices()
    return allPractices

}

export async function servicePatchPracticeById(practiceId, descricao){
    await repositoryEditPracticeById(practiceId, descricao)
}


export async function serviceDeletePracticeById(practiceIdId){
    await respositoryDeletePracticeById(practiceIdId)
}