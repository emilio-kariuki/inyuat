"use client";
import { createSupplier, getSuppliers } from "@/lib/actions/user.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { LoaderIcon } from "lucide-react";
import axios from "axios";
import { Form } from "@/components/ui/form";
import OrderForm from "./order_form";
import { toast } from "sonner";

const formSupplierSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
});

const AddSupplier = () => {
  const [Loading, setLoading] = useState(false);
  const supplierForm = useForm({
    resolver: zodResolver(formSupplierSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });


  const onSubmit = async (data: any) => {
    setLoading(true);
    const response = await axios.post(
      "https://84.247.174.84/inyuat/api/supplier/create",
      {
        name: data.name,
        email: data.email,
        phone: data.phone
      },
      {
        headers: {
          "APIKEY": "INT_okbONyVVRXRKeD198duXZ483rzsYMI",
        },
      },
    );
    console.log("response", response);

    if(response.status === 200){
      toast.success("Order created successfully");
      setLoading(false);
    }else{
      toast.error("An error occurred while creating order");
      setLoading(false);
    }

  };
  return (
    <div className="flex flex-col mt-10 ">
      <h1 className="text-[20px] font-semibold">Add Supplier</h1>
      <p className="text-[13px] text-gray-500 mb-5">
            Use the form to add a new supplier to your list of suppliers.
        </p>
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
