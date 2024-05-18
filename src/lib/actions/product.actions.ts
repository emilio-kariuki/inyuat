"use server";

import { db } from "@/db";
import { Product, products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { url } from "inspector";

export const getOrderProducts = async (title: string) => {
  try {
    const result: Product[] = await db
      .select()
      .from(products)
      .where(eq(products.name, title));
    return result;
  } catch (error) {
    console.log("An error occurred while fetching order products", error);
  }
};

export const getTotalProducts = async (title: string) => {
  try {
    const result: Product[] = await db
      .select()
      .from(products)
      .where(eq(products.name, title));
    let good = 0;
    let fair = 0;
    let reject = 0;
    result.map((product) => {
      good += product.good || 0;
      fair += product.fair || 0;
      reject += product.reject || 0;
    });
    return {
      good: good,
      fair: fair,
      reject: reject,
      url: result[0].image,
    };
  } catch (error) {
    console.log("An error occurred while fetching products", error);
  }
};

export const createProduct = async (product: Product[]) => {
  try {
    return await db.insert(products).values(product).returning();
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
