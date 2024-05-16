import { getSuppliers } from "@/lib/actions/user.actions";
import Image from "next/image";

import React from "react";
import CopyClipboard from "./copy_clipboard";
import AddSupplier from "./add_supplier";

const SuppliersSection = async () => {
  const suppliers = await getSuppliers();
  return (
    <div>
      {suppliers!.map((supplier) => (
        <div
          key={supplier.id}
          className="flex flex-row justify-between items-center border px-2 py-3 rounded-[8px] mt-2"
        >
          <div className="flex flex-row gap-2 items-center">
            <Image
              src={"https://www.picsa.pro/profile.jpg"}
              alt={supplier.name!}
              width={40}
              height={40}
              style={{ objectFit: "cover" }}
              className="aspect-1 rounded-[200px] h-[40px] w-[40px]"
            />
            <div className="flex flex-col ">
              <h1 className="text-[14px] font-normal">{supplier.name}</h1>
              <p className="text-[13px] text-gray-500">{supplier.email}</p>
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
