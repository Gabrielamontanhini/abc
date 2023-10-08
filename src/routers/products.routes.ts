import { Router } from "express";
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from "@/controllers/products.controllers";
import { validateBody, validateParams } from "@/middlewares/validateSchema";
import { productBody, productParams } from "@/schemas/products.schemas";

const productRouter = Router();

productRouter.post("/", validateBody(productBody), createProduct);
productRouter.get("/", getProduct);
productRouter.put(
  "/:practiceId",
  validateBody(productBody),
  validateParams(productParams),
  updateProduct
);
productRouter.delete(
  "/:practiceId",
  validateParams(productParams),
  deleteProduct
);

export default productRouter;
