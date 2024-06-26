// // This is your Prisma schema file,
// // learn more about it in the docs: https://pris.ly/d/prisma-schema

// // Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?
// // Try Prisma Accelerate: https://pris.ly/cli/accelerate-init

// generator client {
//     provider = "prisma-client-js"
//   }
  
//   datasource db {
//     provider = "postgresql"
//     url      = env("DATABASE_URL")
//     directUrl = env("DATABASE_URL_NON_POOLING")
//   }
  
//   enum QUALITY {
//     GOOD
//     FAIR
//     REJECT
//   }
  
//   model User {
//     id        String      @id @default(cuid())
//     email     String      @unique
//     name      String?
//     phone     String?     @unique
//     createdAt DateTime    @default(now())
//     updatedAt DateTime    @updatedAt
//     Inventory Inventory[]
//   }
  
//   model Inventory {
//     id              String    @id @unique @default(cuid())
//     inventoryNumber String
//     total           Float
//     userId          String
//     user            User      @relation(fields: [userId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     supplierId      String
//     supplier        Supplier  @relation(fields: [supplierId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     quantity        Int
//     deliveryNote    String?
//     createdAt       DateTime  @default(now())
//     updatedAt       DateTime  @updatedAt
//     product         Product[]
//   }
  
//   model Product {
//     id          String    @id @default(cuid())
//     name        String
//     quantity    Int
//     quality     QUALITY   @default(GOOD)
//     description String?
//     inventoryId String
//     inventory   Inventory @relation(fields: [inventoryId], references: [id], onDelete: Cascade, onUpdate: Cascade)
//     createdAt   DateTime  @default(now())
//     updatedAt   DateTime  @updatedAt
//   }
  
//   model Supplier {
//     id        String      @id @default(cuid())
//     name      String
//     email     String
//     phone     String
//     createdAt DateTime    @default(now())
//     updatedAt DateTime    @updatedAt
//     inventory Inventory[]
//   }
  
  