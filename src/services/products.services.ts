import { productRepository } from "@/repositories/products.repository";

export async function createProduct(name: string) {
  return await productRepository.createProduct({ name });
}

export async function getProduct() {
  return await productRepository.getProduct();
}

export async function updateProduct(id: number, name: string) {
  return await productRepository.updateProduct({ id, name });
}

export async function deleteProduct(productId: number) {
  return await productRepository.deleteProduct(productId);
}

export const productsServices = {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
};
