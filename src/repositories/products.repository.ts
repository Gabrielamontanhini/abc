import prisma from "@/database/db.connection";
import { Product } from "@prisma/client";
import { promises } from "dns";

async function createProduct(data: ProductCreateInput): Promise<Product> {
  return prisma.product.create({
    data,
  });
}

async function getProduct(): Promise<Product[]> {
  return prisma.product.findMany();
}

async function updateProduct(data: Product): Promise<Product> {
  return prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
    },
  });
}

async function deleteProduct(productId: number) {
  return prisma.product.delete({ where: { id: productId } });
}

export type ProductCreateInput = Omit<Product, "id">;

export const productRepository = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
