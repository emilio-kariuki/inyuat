"use server"
import { db } from "@/db/drizzle";
import { NewUser, orders, users } from "@/db/schema";
import { eq } from "drizzle-orm";

export const getUser = async (id: string) => {
  try {
    const user = await db.select().from(users).where(eq(users.id, id));
    return user;
  } catch (error) {
    console.log("An error occurred while fetching user", error);
  }
};

export const getUsers = async () => {
  try {
    const user = await db.query.users.findMany();
    return user;
  } catch (error) {
    console.log("An error occurred while fetching users", error);
  }
};

export const getUserOrders = async (userId: string) => {
  try {
    const user = await db
      .select()
      .from(orders)
      .where(eq(orders.userId, userId));
    return user;
  } catch (error) {
    console.log("An error occurred while fetching user orders", error);
  }
};

export const createUser = async (user: NewUser) => {
  try {
    return await db
      .insert(users)
      .values(user)
      .returning()
      .onConflictDoUpdate({
        target: [users.id],
        set: user,
      });
  } catch (error) {
    console.log("An error occurred while creating user", error);
  }
};
