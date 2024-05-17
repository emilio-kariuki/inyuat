import { db } from "@/db";
import { images } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";


const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 40 } })
    .onUploadComplete(async ({ metadata, file }) => {
      await db.insert(images).values({
        name: file.name,
        url: file.url,
        userId: "user_2fHjwG4epQxvHby46NbIJHn6FyS"
      });

      return file.url;
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
