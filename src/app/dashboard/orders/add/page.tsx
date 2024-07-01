"use client";
import { ChevronLeft, LoaderIcon, Save, X } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./components/upload_button";
import { toast } from "sonner";
import { Product } from "@/db/schema";

const formSchema = z.object({
  supplierId: z
    .string({
      message: "Enter the id of the supplier",
    }).min(1,"Please enter a valid value"),
  userId: z.string(),
  driverName: z.string({
    message: "Enter the name of the person who made the delivery.",
  }).min(1,"Please enter a valid value"),
  deliveryDate: z.any(),
  deliveryNoteId: z.string({
    message: "Enter the id of the delivery note.",
  }).min(1,"Please enter a valid value"),
});

const productSchema = z.object({
  name: z.string().min(1,"Please enter a valid value"),
  description: z.string(),
  good: z.string(),
  fair: z.string(),
  poor: z.string(),
});

export default function OrderCreate() {
  const user = useUser();

  const [product, setProduct] = React.useState<Product[]>([]);
  const [Loading, setLoading] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      supplierId: "",
      userId: user.user?.id,
      driverName: "",
      deliveryDate: "",
      deliveryNoteId: "",
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      description: "-",
      good: 0,
      fair: 0,
      poor: 0,
    },
  });

  const onSubmit = async (data: any) => {
    const driverName = await form.trigger("driverName");
    const deliveryNoteId = await form.trigger("deliveryNoteId");
    const supplierId = await form.trigger("supplierId");

    console.log(data);
    // setLoading(true);

    // setLoading(false);
    toast.success("Order created successfully");
    // router.push("/dashboard/orders");
    // router.refresh();
  };

  const onProductSubmit = (item: any) => {
    setProduct([...product, item]);
  };

  return (
    <main className=" flex flex-col border-r-[1px] border-gray h-full min-h-screen w-full items-start justify-start bg-white p-[15px]">
      <div className="flex flex-row gap-4 items-center justify-center mb-5 w-full px-[5px]">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-row items-center gap-2">
            <div onClick={() => router.back()}>
              <ChevronLeft className="h-6 w-6 text-gray-500" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[16px] font-semibold">Add Order</h1>
            </div>
          </div>
          <div
            onClick={form.handleSubmit(onSubmit)}
            className="flex bg-green-800 rounded-[5px] py-[10px] px-[50px] gap-2 items-center hover:bg-green-700 ml-20"
          >
            {Loading
              ? <LoaderIcon className=" w-8 animate-spin h-5" color="#ffffff" />
              : <div></div>}
            <h5 className="font-medium text-[13px] text-white">Save</h5>
          </div>
        </div>
      </div>
      <div className="p-[30px] w-full items-start justify-start bg-[#F5F6F7] rounded-[10px] ">
        <div className="flex flex-col bg-white p-10 rounded-[10px]">
          <div className="flex flex-row justify-between mb-5 items-center">
            <h1 className="text-[20px] font-semibold">Order Details</h1>
          </div>
          <OrderSection />
        </div>
        <ProductSection />
      </div>
    </main>
  );

  function OrderSection() {
    return (
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" flex mx-auto w-full"
      >
        <div className="flex flex-col w-full space-y-5">
          <div className="flex flex-row w-full gap-20">
            <div className="flex flex-col items-start justify-start w-full">
              <FormTitle title="Driver Name" />
              <input
                type="text"
                id="driverName"
                {...form.register("driverName")}
                className={`w-full p-2 mt-2 rounded-[5px] border-[0.5px] ${
                  form.formState.errors.driverName ? "border-red-500" : "border-gray"
                } `}
              />
              {form.formState.errors.driverName && (
                <span className="text-sm text-red-500 mt-1 block text-[10px]">
                  {form.formState.errors.driverName.message?.toString()}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <FormTitle title="Delivery date" />
              <input
                type="date"
                id="deliveryDate"
                {...form.register("deliveryDate")}
                className="w-full p-2 mt-2 rounded-[5px] border-[0.5px] border-gray "
              />
            </div>
          </div>

          <div className="flex flex-row w-full gap-20">
            <div className="flex flex-col items-start justify-start w-full">
              <FormTitle title="Supplier Id" />
              <input
                type="text"
                id="supplierId"
                {...form.register("supplierId")}
                className={`w-full p-2 mt-2 rounded-[5px] border-[0.5px] ${
                  form.formState.errors.supplierId ? "border-red-500" : "border-gray"
                } `}
              />
              {form.formState.errors.supplierId && (
                <span className="text-sm text-red-500 mt-1 block text-[10px]">
                  {form.formState.errors.supplierId.message?.toString()}
                </span>
              )}
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <FormTitle title="Delivery Note Id" />
              <input
                type="text"
                id="deliveryNoteId"
                {...form.register("deliveryNoteId")}
                className={`w-full p-2 mt-2 rounded-[5px] border-[0.5px] ${
                  form.formState.errors.deliveryNoteId ? "border-red-500" : "border-gray"
                } `}
              />
              {form.formState.errors.deliveryNoteId && (
                <span className="text-sm text-red-500 mt-1 block text-[10px]">
                  {form.formState.errors.deliveryNoteId.message?.toString()}
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-row gap-20 items-center justify-center">
            <div className="flex flex-row w-full gap-5 items-end">
              <SimpleUploadButton setUrl={setUrl} />
              {url == "" ? <div></div> : (
                <Image
                  src={url}
                  alt={"delivery note"}
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                  className="aspect-1 rounded-[5px] h-[70px] w-[70px]"
                />
              )}
            </div>
          </div>
        </div>
      </form>
    );
  }

  function ProductSection() {
    return (
      <div className="flex flex-col bg-white p-10 rounded-[10px] mt-[30px]">
        <div className="flex flex-row justify-between  mb-5 items-center">
          <h1 className="text-[20px] font-semibold">Add Product</h1>
          <Button
            variant="outline"
            className="w-fit"
            onClick={handleSubmit(onProductSubmit)}
          >
            Add Product
          </Button>
        </div>

        <form
          onSubmit={handleSubmit(onProductSubmit)}
          className=" flex mx-auto w-full"
        >
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-row w-full gap-20">
              <div className="flex flex-col items-start justify-start w-full">
                <FormTitle title="Name" />
                <input
                  type="text"
                  id="name"
                  {...register("name")}
                  className="w-full p-2 mt-2 rounded-[5px] border-[0.5px] border-gray "
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <FormTitle title="Description (optional)" />
                <input
                  type="text"
                  id="description"
                  {...register("description")}
                  className="w-full p-2 mt-2 rounded-[5px] border-[0.5px] border-gray "
                />
              </div>
            </div>

            <div className="flex flex-row w-full gap-20">
              <div className="flex flex-col items-start justify-start w-full">
                <FormTitle title="Good Quality" />
                <input
                  type="text"
                  id="good"
                  {...register("good")}
                  className="w-full p-2 mt-2 rounded-[5px] border-[0.5px] border-gray "
                />
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <FormTitle title="Fair Quality" />
                <input
                  type="text"
                  id="fair"
                  {...register("fair")}
                  className="w-full p-2 mt-2 rounded-[5px] border-[0.5px] border-gray "
                />
              </div>
            </div>
            <div className="flex flex-row w-full gap-20">
              <div className="flex flex-col items-start justify-start w-full">
                <FormTitle title="Poor Quality" />
                <input
                  type="text"
                  id="poor"
                  {...register("poor")}
                  className="w-full p-2 mt-2 rounded-[5px] border-[0.5px] border-gray "
                />
              </div>
              <div className="flex w-full"></div>
            </div>
          </div>
        </form>
        <Table className="mt-5">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead className="w-[300px]">Good</TableHead>
              <TableHead className="w-[300px]">Fair</TableHead>
              <TableHead className="w-[300px]">Poor</TableHead>
              <TableHead className="w-[300px]">Description</TableHead>
              <TableHead className="w-[5px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {product.map((item: Product, index) => (
              <TableRow
                key={index}
                className="items-center justify-center"
                onClick={() => {
                  //set the form with values
                  setValue("name", item.name);
                  setValue("good", item.good || 0);
                  setValue("fair", item.fair || 0);
                  setValue("poor", item.poor || 0);
                  setValue("description", item.description || "-");
                  setProduct(product.filter((_, i) => i !== index));
                }}
              >
                <TableCell className="text-black w-[300px]">
                  {item.name}
                </TableCell>
                <TableCell className="text-black w-[300px]">
                  {item.good}
                </TableCell>
                <TableCell className="text-black w-[300px]">
                  {item.fair}
                </TableCell>
                <TableCell className="text-black w-[300px]">
                  {item.poor}
                </TableCell>

                <TableCell className="text-black w-[300px]">
                  {item.description}
                </TableCell>
                <TableCell className="text-black w-[300px]">
                  <Button
                    variant="outline"
                    className="w-fit"
                    onClick={() => {
                      setProduct(product.filter((_, i) =>
                        i !== index
                      ));
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

const FormTitle = ({ title }: { title: string }) => {
  return <h5 className=" text-[13px] font-medium text-black">{title}</h5>;
};
function UploadSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}

function LoadingSpinnerSVG() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path
        d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        className="spinner_ajPY"
      />
    </svg>
  );
}
