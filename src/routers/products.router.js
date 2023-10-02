import { Router } from "express";
import { controllerDeleteProductById, controllerEditProductById, controllerGetProducts, controllerPostProduct } from "../controllers/products.controller.js";

const productsRouter = Router()

productsRouter.post("/product", controllerPostProduct) //opstar produto
productsRouter.get("/products", controllerGetProducts)
productsRouter.patch("/products/:productId", controllerEditProductById)
productsRouter.delete("/products/:productId", controllerDeleteProductById)

export default productsRouter