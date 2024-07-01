import { db } from "@/db";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";


const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 40 } })
    .onUploadComplete(async ({ metadata, file }) => {
      return file.url;
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
