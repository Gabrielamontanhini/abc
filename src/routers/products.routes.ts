import { Router } from "express";
import {
  createProduct,
  getProduct,
  getProductByIdAndPractice,
  updateProduct,
  deleteProduct,
} from "@/controllers/products.controllers";
import { validateBody, validateParams } from "@/middlewares/validateSchema";
import { productBody, productParams } from "@/schemas/products.schemas";

const productRouter = Router();

productRouter
  .post("/", validateBody(productBody), createProduct)
  .get("/", getProduct)
  .get("/:productId", validateParams(productParams), getProductByIdAndPractice)
  .put(
    "/:productId",
    validateBody(productBody),
    validateParams(productParams),
    updateProduct
  )
  .delete("/:productId", validateParams(productParams), deleteProduct);

export default productRouter;
