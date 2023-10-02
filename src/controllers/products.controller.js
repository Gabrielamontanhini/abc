import httpStatus from "http-status"
import { serviceDeleteProductById, serviceGetProducts, servicePatchProductById, servicePostProduct } from "../services/products.services.js"

export async function controllerPostProduct(req, res){
const { product } = req.body
await servicePostProduct(product)
return res.status(httpStatus.OK).send(product)
}

export async function controllerGetProducts(req, res){
    const allProducts = await serviceGetProducts()
    return res.send(allProducts).status(httpStatus.OK)
}

export async function controllerEditProductById(req, res){
    const {productId} = req.params
    const  newName  = req.body.product
    await servicePatchProductById(Number(productId), newName)
    return res.status(httpStatus.OK).send(newName)
}

export async function controllerDeleteProductById(req, res){
    const {productId} = req.params
    await serviceDeleteProductById(Number(productId))
    return res.status(httpStatus.OK).send(productId)
}