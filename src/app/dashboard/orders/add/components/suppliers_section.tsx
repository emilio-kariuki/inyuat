import CopyClipboard from "@/components/shared/copy_clipboard";
import { getSuppliers } from "@/lib/actions/user.actions";
import Image from "next/image";

import React from "react";
import AddSupplier from "./add_supplier";


const SuppliersSection = async () => {
  const suppliers = await getSuppliers();
  return (
    <div>
      {suppliers?.map((supplier) => (
        <div
          key={supplier.id}
          className="flex flex-row justify-between items-center border px-4 py-4 rounded-[8px] mt-2"
        >
          <div className="flex flex-row gap-3 items-center">
            <Image
              src={"https://www.picsa.pro/profile.jpg"}
              alt={supplier.name!}
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
              className="aspect-1 rounded-[200px] h-[40px] w-[40px]"
            />
            <div className="flex flex-col ">
              <h1 className="text-[14px] font-medium">{supplier.name}</h1>
              <p className="text-[12px] text-gray-500 font-normal">{supplier.email}</p>
            </div>
          </div>
          <CopyClipboard text={supplier.id} />
        </div>
      ))}
      <AddSupplier />
    </div>
  );
};

export default SuppliersSection;
