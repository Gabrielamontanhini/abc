import prisma from "../database.js";

export async function repositoryPostProduct(nome_produto){
    return prisma.produtos.create({
         data: {
            nome_produto
        }
    })
}

export async function repositoryGetProducts(){
    return prisma.produtos.findMany()
}