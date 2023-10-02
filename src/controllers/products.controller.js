import httpStatus from "http-status"
import { serviceGetProducts, servicePostProduct } from "../services/products.services.js"

export async function controllerPostProduct(req, res){
const { product } = req.body
await servicePostProduct(product)
return res.status(httpStatus.OK).send(product)
}

export async function controllerGetProducts(req, res){
    const allProducts = await serviceGetProducts()
    return res.send(allProducts).status(httpStatus.OK)
}