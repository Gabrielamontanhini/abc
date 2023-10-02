import { repositoryGetProducts, repositoryPostProduct } from "../repository/products.repository.js"

export async function servicePostProduct(product){
    const postedProduct = await repositoryPostProduct(product)
    return postedProduct

}

export async function serviceGetProducts(){
    const products = await repositoryGetProducts()
    return products
}