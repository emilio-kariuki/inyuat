"use client";
import { createSupplier, getSuppliers } from "@/lib/actions/user.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoaderIcon } from "lucide-react";
import { v1 as uuidv1 } from "uuid";
import short from "short-uuid";
import { Form } from "@/components/ui/form";
import OrderForm from "./order_form";

const formSupplierSchema = z.object({
  id: z.string().startsWith("SUPP_"),
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

const AddSupplier = () => {
  const [Loading, setLoading] = useState(false);
  const id = short.generate()
  const supplierId = `SUPP_${id}`;
  const supplierForm = useForm({
    resolver: zodResolver(formSupplierSchema),
    defaultValues: {
      id: supplierId,
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSupplierSchema>) => {
    setLoading(true);
    await createSupplier({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    await getSuppliers();
    setLoading(false);

  };
  return (
    <div className="flex flex-col mt-10 ">
      <h1 className="text-[20px] font-semibold">Add Supplier</h1>
      <Form {...supplierForm}>
        <form
          onSubmit={supplierForm.handleSubmit(onSubmit)}
          className=" flex flex-col mx-auto w-full gap-2"
        >
          <OrderForm
            form={supplierForm}
            name="name"
            title="Name"
            placeholder="Supplier Name"
          />
          <OrderForm
            form={supplierForm}
            name="email"
            title="Email"
            placeholder="Supplier Email"
          />

          <OrderForm
            form={supplierForm}
            name="phone"
            title="Phone"
            placeholder="Supplier Phone"
          />
        </form>
      </Form>
      <div
        onClick={supplierForm.handleSubmit(onSubmit)}
        className="flex bg-green-800 rounded-[30px] py-[10px] px-[30px] gap-2 items-center justify-center hover:bg-green-700 mt-5 mx-5"
      >
        {Loading ? (
          <LoaderIcon className="h-5 w-8 animate-spin" color="#ffffff" />
        ) : (
          <h5 className="font-medium text-[13px] text-white">Add Supplier</h5>
        )}
      </div>
    </div>
  );
};

export default AddSupplier;
