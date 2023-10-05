import prisma from "../database.js";

export async function repositoryPostPractice(descricao){
    return prisma.praticas.create({
         data: {
            descricao
        }
    })
}

export async function repositoryGetPractices(){
    return prisma.praticas.findMany()
}

export async function repositoryEditPracticeById(id, descricao){
    return await prisma.praticas.update({
        data: {
            descricao: descricao
         },
        where: { id },
      });
}


export async function respositoryDeletePracticeById(practiceId){
    await prisma.praticas.delete({
        where: { id: practiceId },
      });
}