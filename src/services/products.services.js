import { repositoryEditProductById, repositoryGetProducts, repositoryPostProduct, respositoryDeleteProducyById } from "../repository/products.repository.js"

export async function servicePostProduct(product){
    const postedProduct = await repositoryPostProduct(product)
    return postedProduct

}

export async function serviceGetProducts(){
    const products = await repositoryGetProducts()
    return products
}

export async function servicePatchProductById(productId, newName){
    await repositoryEditProductById(productId, newName)
}

export async function serviceDeleteProductById(productId){
    await respositoryDeleteProducyById(productId)
}