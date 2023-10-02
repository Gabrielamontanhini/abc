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

export async function repositoryEditProductById(id, nome_produto){
    return await prisma.produtos.update({
        data: {
            nome_produto: nome_produto
         },
        where: { id },
      });
}


export async function respositoryDeleteProducyById(productId){
    await prisma.produtos.delete({
        where: { id: productId },
      });
}