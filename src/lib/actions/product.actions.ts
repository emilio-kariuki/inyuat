"use server"

import { db } from "@/db/drizzle";
import { Product, products } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getOrderProducts = async (orderId: string) => {
  try {
    const result: Product[] = await db
      .select()
      .from(products)
      .where(eq(products.orderId, orderId));
    return result;
  } catch (error) {
    console.log("An error occurred while fetching order products", error);
  }
};

export const createProduct = async (product: Product) => {
  try {
    return await db
      .insert(products)
      .values(product)
      .returning()
      .onConflictDoUpdate({
        target: [products.id],
        set: product,
      });
  } catch (error) {
    console.log("An error occurred while creating product", error);
  }
};

export const updateProduct = async (product: Product) => {
  try {
    return await db
      .update(products)
      .set(product)
      .where(eq(products.id, product.id))
      .returning();
  } catch (error) {
    console.log("An error occurred while updating product", error);
  }
};

export const deleteProduct = async (product: Product) => {
  try {
    return await db
      .delete(products)
      .where(eq(products.id, product.id))
      .returning();
  } catch (error) {
    console.log("An error occurred while deleting product", error);
  }
};


