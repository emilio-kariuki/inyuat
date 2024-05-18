"use client";
import { ChevronLeft, LoaderIcon, Save } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v1 as uuidv1 } from "uuid";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/ui/button";
import { Product } from "@/db/schema";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { createOrder } from "@/lib/actions/orders.actions";
import { createProduct } from "@/lib/actions/product.actions";
import { Form, FormLabel } from "@/components/ui/form";
import short from "short-uuid";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./components/upload_button";
import { toast } from "sonner";
import { Numans } from "next/font/google";
import OrderForm from "./components/order_form";

const formSchema = z.object({
  id: z.string(),
  orderNumber: z.string().startsWith("ORD_"),
  deliveryDate: z.string({
    message: "Enter the date of delivery",
  }),
  deliverer: z.string({
    message: "Enter the name of the person who made the delivery.",
  }),
  userId: z.string().startsWith("user_"),
  supplierId: z
    .string({
      message: "Enter the id of the supplier",
    })
    .startsWith(""),
  quantity: z.string({
    message: "Enter the number of kgs",
  }),
  deliveryNoteId: z.string({
    message: "Enter the id of the delivery note.",
  }),
  deliveryImage: z.string().nullable(),
});

const productSchema = z.object({
  product: z.array(
    z.object({
      name: z.string(),
      good: z.string(),
      fair: z.string(),
      reject: z.string(),
      orderId: z.string(),
      description: z.string(),
    })
  ),
});
const id = short.generate();
const orderNumber = `ORD_${id}`;

export default function OrderCreate() {
  const user = useUser();

  const [product, setProduct] = React.useState<Product[]>([]);
  const [Loading, setLoading] = React.useState(false);
  const [url, setUrl] = React.useState("");
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id,
      orderNumber: orderNumber,
      deliveryDate: "",
      deliverer: "",
      userId: user.user?.id,
      supplierId: "",
      quantity: "0",
      deliveryNoteId: "Enter delivery note",
      deliveryImage: "",
    },
  });

  const productForm = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      product: [
        {
          name: "",
          reject: "0",
          fair: "0",
          good: "0",
          orderId: id,
          description: "-",
        },
      ],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    await createOrder({
      id: data.id,
      orderNumber: data.orderNumber,
      deliveryDate: data.deliveryDate,
      deliverer: data.deliverer,
      supplierId: data.supplierId,
      userId: data.userId,
      quantity: data.quantity,
      deliveryNoteId: data.deliveryNoteId,
      deliveryImage: url,
      products: product,
    });
    setLoading(false);
    toast.success("Order created successfully");
    router.push("/dashboard/orders");
    router.refresh();
  };

  const onProductSubmit = (data: z.infer<typeof productSchema>) => {
    setProduct((prev: Product[]) => {
      return [
        ...(prev as Product[]),
        {
          id: uuidv1(),
          name: data.product[0].name,
          good: Number(data.product[0].good),
          fair: Number(data.product[0].fair),
          reject: Number(data.product[0].reject),
          orderId: id,
          description: data.product[0].description,
          createdAt: new Date(),
          updatedAt: null,
        },
      ];
    });
    // clear the form
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
              {/* <h1 className="text-[12px] font-medium text-gray-500">
                #{orderNumber}
              </h1> */}
            </div>
          </div>
          <div
            onClick={form.handleSubmit(onSubmit)}
            className="flex bg-green-800 rounded-[30px] py-[10px] px-[50px] gap-2 items-center hover:bg-green-700 ml-20"
          >
            {Loading ? (
              <LoaderIcon className=" w-8 animate-spin h-5" color="#ffffff" />
            ) : (
              <div></div>
            )}
            <h5 className="font-medium text-[13px] text-white">Save</h5>
          </div>
        </div>
      </div>
      <div className="p-[30px] w-full items-start justify-start bg-[#F5F6F7] rounded-[10px] ">
        <div className="flex flex-col bg-white p-10 rounded-[10px]">
          <div className="flex flex-row justify-between mb-5 items-center">
            <h1 className="text-[20px] font-semibold">Order Details</h1>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className=" flex mx-auto w-full"
            >
              <div className="flex flex-col w-full space-y-5">
                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={form}
                    name="deliverer"
                    title="Name of Deliverer"
                    placeholder="Name of the person who made the delivery."
                  />
                  <OrderForm
                    form={form}
                    name="deliveryDate"
                    title="Date of Delivery"
                    placeholder="Date of Delivery."
                  />
                </div>
                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={form}
                    name="supplierId"
                    title="Supplier ID"
                    placeholder="Supplier ID"
                  />
                  <OrderForm
                    form={form}
                    name="quantity"
                    title="Quantity"
                    placeholder="Quantity"
                  />
                </div>
                <div className="flex flex-row gap-20 items-center justify-center">
                  <OrderForm
                    form={form}
                    name="deliveryNote"
                    title="Delivery Note ID"
                    placeholder="Delivery Note ID"
                  />
                  <div className="flex flex-row w-full gap-5 items-end">
                    <SimpleUploadButton setUrl={setUrl} />
                    {url == "" ? (
                      <div></div>
                    ) : (
                      <Image
                        src={url}
                        alt={form.getValues("deliverer")}
                        width={50}
                        height={30}
                        style={{ objectFit: "fill" }}
                        className="aspect-1 rounded-[10px] h-[70px] w-[70px]"
                      />
                    )}
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
        {/* add product */}
        <div className="flex flex-col bg-white p-10 rounded-[10px] mt-[30px]">
          <div className="flex flex-row justify-between  mb-5 items-center">
            <h1 className="text-[20px] font-semibold">Add Product</h1>
            <Button
              variant="outline"
              className="w-fit"
              onSubmit={productForm.handleSubmit(onProductSubmit)}
              onClick={productForm.handleSubmit(onProductSubmit)}
            >
              Add Product
            </Button>
          </div>
          <Form {...productForm}>
            <form
              onSubmit={productForm.handleSubmit(onProductSubmit)}
              className=" flex mx-auto w-full"
            >
              <div className="flex flex-col w-full space-y-5">
                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={productForm}
                    name="product[0].name"
                    title="Name"
                    placeholder="Product Name"
                  />
                  <OrderForm
                    form={productForm}
                    name="product[0].description"
                    title="Description (optional)"
                    placeholder="Product Description"
                  />
                </div>

                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={productForm}
                    name="product[0].good"
                    title="Good Quality"
                    placeholder="Good Items"
                  />
                  <OrderForm
                    form={productForm}
                    name="product[0].fair"
                    title="Fair Quality"
                    placeholder="Fair Items"
                  />
                </div>
                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={productForm}
                    name="product[0].reject"
                    title="Rejected Quality"
                    placeholder="Rejected Items"
                  />
                  <div className="flex w-full"></div>
                </div>
              </div>
            </form>
          </Form>
          <Table className="mt-5">
            <TableHeader>
              <TableRow>
                {/* <TableHead className="w-[300px]">Image</TableHead> */}
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead className="w-[300px]">Good</TableHead>
                <TableHead className="w-[300px]">Fair</TableHead>
                <TableHead className="w-[300px]">Reject</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product.map((item: any) => (
                <TableRow key={item.id}>
                  {/* <TableCell className="font-medium">
                    <Image
                      src={"https://www.picsa.pro/profile.jpg"}
                      alt={item.name}
                      width={50}
                      height={30}
                      style={{ objectFit: "cover" }}
                      className="aspect-1 rounded-[200px] h-[50px] w-[50px]"
                    />
                  </TableCell> */}
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
                    {item.reject}
                  </TableCell>

                  <TableCell className="text-black w-[300px]">
                    {item.description}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </main>
  );
}

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
