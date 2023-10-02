import { Router } from "express";
import { controllerGetProducts, controllerPostProduct } from "../controllers/products.controller.js";

const productsRouter = Router()

productsRouter.post("/product", controllerPostProduct) //opstar produto
productsRouter.get("/products", controllerGetProducts)
productsRouter.patch("/product/:productId")

export default productsRouter