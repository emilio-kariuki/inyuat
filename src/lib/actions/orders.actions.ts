"use server"

import { db } from "@/db/drizzle";
import { type NewOrder, type Order, orders, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getOrders = async () => {
  try {
    const result = await db.query.orders.findMany({
      with: {
        product: true,
      },
    });
    return result;
  } catch (error) {
    console.log("An error occurred while fetching orders", error);
  }
};

export const createOrder = async (order: NewOrder) => {
  try {
    return await db
      .insert(orders)
      .values(order)
      .returning()
      .onConflictDoUpdate({
        target: [orders.id],
        set: order,
      });
  } catch (error) {
    console.log("An error occurred while creating order", error);
  }
};

export const updateOrder = async (order: Order) => {
  try {
    return await db
      .update(orders)
      .set(order)
      .where(eq(orders.id, order.id))
      .returning();
  } catch (error) {
    console.log("An error occurred while updating order", error);
  }
};

export const deleteOrder = async (order: Order) => {
  try {
    return await db.delete(orders).where(eq(orders.id, order.id)).returning();
  } catch (error) {
    console.log("An error occurred while deleting order", error);
  }
};
