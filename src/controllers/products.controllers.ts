import { Request, Response } from "express";
import httpStatus from "http-status";
import { productsServices } from "@/services/products.services";
import { ProductCreateInput } from "@/repositories/products.repository";
import { ProductParams } from "@/protocols/products.protocols";

export async function createProduct(req: Request, res: Response) {
  const { name } = req.body as ProductCreateInput;
  const result = await productsServices.createProduct(name);
  return res.status(httpStatus.OK).send(result);
}

export async function getProduct(req: Request, res: Response) {
  const result = await productsServices.getProduct();
  return res.status(httpStatus.OK).send(result);
}

export async function updateProduct(req: Request, res: Response) {
  const { productId } = req.params as ProductParams;
  const { name } = req.body as ProductCreateInput;
  const result = await productsServices.updateProduct(Number(productId), name);
  return res.status(httpStatus.OK).send(result);
}

export async function deleteProduct(req: Request, res: Response) {
  const { productId } = req.params as ProductParams;
  const result = await productsServices.deleteProduct(Number(productId));
  return res.status(httpStatus.OK).send(result);
}
