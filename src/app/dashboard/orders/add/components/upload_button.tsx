"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";
import { LoaderIcon } from "lucide-react";
import { set } from "zod";
import React from "react";

// inferred input off useUploadThing
type Input = Parameters<typeof useUploadThing>;

const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
    // TODO: persist result in state maybe?
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.permittedFileInfo?.config?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

function UploadSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

export function SimpleUploadButton({
  setUrl,
}: {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
}) {
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin() {
      toast(
        <div className="flex items-center gap-2 text-black">
          <LoaderIcon className="h-5 w-5 animate-spin" />{" "}
          <span className="text-[13px]">Uploading...</span>
        </div>,
        {
          duration: 100000,
          id: "upload-begin",
        }
      );
    },
    onUploadError(error) {
      toast.dismiss("upload-begin");
      toast.error("Upload failed");
    },
    onClientUploadComplete(res) {
      toast.dismiss("upload-begin");
      toast.success("Upload successful");
      setUrl(res[0].url);
    },
  });

  return (
    <div className="flex flex-col w-full gap-3 justify-start items-start">
      <h5 className=" text-[13px] font-medium text-black">Upload Delivery Note</h5>
      <label htmlFor="upload-button" className="cursor-pointer">
        <div className="flex flex-row items-center gap-3 border-[1px] border-gray-300 px-7 py-3 rounded-[10px]">
          <h6 className="text-[14px]">Upload</h6>
          <UploadSVG />
        </div>
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
}
