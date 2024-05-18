"use server";

import { db } from "@/db";
import {
  type NewOrder,
  type Order,
  orders,
  users,
  products,
  Product,
} from "@/db/schema";
import { eq, sql } from "drizzle-orm";

export const getOrders = async () => {
  try {
    const result = await db.query.orders.findMany({
      with: {
        user: true,
        products: true,
      },
    });
    return result;
  } catch (error) {
    console.log("An error occurred while fetching orders", error);
  }
};

export const getOrderById = async (id: string) => {
  try {
    const result = await db.query.orders.findFirst({
      where: (order, { eq }) => eq(order.id, id),
      with: {
        user: true,
      },
    });
    return result;
  } catch (error) {
    console.log("An error occurred while fetching order", error);
  }
};

export const getOrderTotals = async () => {
  const result: Order[] = await db
  .select()
  .from(orders);
let total = 0;
let amount = result.length;

result.map((order) => {
  total += order?.total || 0
  
});
return {
  total: total,
  amount: amount,
  
};
}
export const createOrder = async (order: any) => {
  console.log("order", order);
  try {
     await db.transaction(async (tx) => {
      await tx
        .insert(orders)
        .values({
          id: order.id,
          orderNumber: order.orderNumber,
          total: Number(order.total),
          quality: order.quality,
          userId: order.userId,
          supplierId: order.supplierId,
          quantity: Number(order.quantity),
          deliveryNote: order.deliveryNote,
        })
        .then(async (result) => {
          await tx.insert(products).values(order.products);
        });
    });
    return "Order created successfully"
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
