"use client";
import { ChevronLeft, LoaderIcon } from "lucide-react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v1 as uuidv1 } from "uuid";
import { useUser } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/ui/button";
import { Product, QUALITY } from "@/db/schema";
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
import OrderForm from "@/components/shared/order_form";
import { Form } from "@/components/ui/form";
import short from "short-uuid";
import { cn } from "@/lib/utils";
const formSchema = z.object({
  id: z.string(),
  orderNumber: z.string().startsWith("ORD_"),
  total: z.string(),
  userId: z.string().startsWith("user_"),
  quality: z.string(),
  supplierId: z.string().startsWith(""),
  quantity: z.string(),
  deliveryNote: z.string().nullable(),
  product: z.array(
    z.object({
      name: z.string(),
      quantity: z.string(),
      description: z.string(),
      reject: z.string(),
      fair: z.string(),
      good: z.string(),
    })
  ),
});

export default function OrderCreate() {
  const user = useUser();
  const id = short.generate();
  const orderNumber = `ORD_${id}`;
  const [product, setProduct] = React.useState<Product[]>([]);
  const [Loading, setLoading] = React.useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: id,
      orderNumber: orderNumber,
      total: "0",
      userId: user.user?.id,
      quality: "GOOD",
      supplierId: "",
      quantity: "0",
      deliveryNote: "Enter delivery note",
      product: [
        {
          name: "",
          quantity: "0",
          reject: "0",
          fair: "0",
          good: "0",
          description: "-",
          image: "https://www.picsa.pro/profile.jpg",
        },
      ],
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    createOrder({
      id: data.id,
      orderNumber: data.orderNumber,
      total: data.total,
      userId: data.userId,
      quality: data.quality,
      supplierId: data.supplierId,
      quantity: data.quantity,
      deliveryNote: data.deliveryNote,
      products: product,
    });
    setLoading(false);
  };

  const onProductSubmit = (data: z.infer<typeof formSchema>) => {
    setProduct((prev: any) => {
      return [
        ...prev,
        {
          id: uuidv1(),
          name: data.product[0].name,
          quantity: data.product[0].quantity,
          good: data.product[0].good,
          fair: data.product[0].fair,
          reject: data.product[0].reject,
          description: data.product[0].description,
          image: "https://www.picsa.pro/profile.jpg",
        },
      ];
    });
  };

  return (
    <main className=" flex flex-col border-r-[1px] border-gray h-full min-h-screen w-full items-start justify-start bg-white p-[15px]">
      <div className="flex flex-row gap-4 items-center justify-center mb-2 w-full px-[25px]">
        <div className="flex flex-row justify-between w-full items-center">
          <div className="flex flex-row items-center gap-2">
            <Link href="/dashboard/orders">
              <ChevronLeft className="h-6 w-6 text-gray-500" />
            </Link>
            <h1 className="text-[16px] font-semibold">Add Order</h1>
          </div>
          <div
            onClick={form.handleSubmit(onSubmit)}
            className="flex bg-green-800 rounded-[10px] py-[10px] px-[30px] gap-2 items-center hover:bg-green-700 ml-20"
          >
            {Loading ? (
              <LoaderIcon className=" w-8 animate-spin h-5" color="#ffffff" />
            ) : (
              <h5 className="font-medium text-[13px] text-white">Save</h5>
            )}
          </div>
        </div>
      </div>
      <div className=" p-[30px] w-full items-start justify-start bg-white rounded-[30px] ">
        <div className="flex flex-col bg-[#F5F6F7] p-10 rounded-[10px]">
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
                    name="quality"
                    title="Quality (GOOD, FAIR, REJECT)"
                    placeholder="Order Quality"
                  />
                  <OrderForm
                    form={form}
                    name="total"
                    title="Total"
                    placeholder="Total"
                  />
                </div>
                {/* supplier */}
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
                <OrderForm
                  form={form}
                  name="deliveryNote"
                  title="Delivery Note"
                  placeholder="Delivery Note"
                />
              </div>
            </form>
          </Form>
        </div>
        {/* add product */}
        <div className="flex flex-col bg-[#f4f5f5] p-10 rounded-[10px] mt-5">
          <div className="flex flex-row justify-between  mb-5 items-center">
            <h1 className="text-[20px] font-semibold">Add Product</h1>
            <Button
              variant="outline"
              className="w-fit"
              onSubmit={form.handleSubmit(onProductSubmit)}
              onClick={form.handleSubmit(onProductSubmit)}
            >
              Add Product
            </Button>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onProductSubmit)}
              className=" flex mx-auto w-full"
            >
              <div className="flex flex-col w-full space-y-5">
                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={form}
                    name="product[0].name"
                    title="Name"
                    placeholder="Product Name"
                  />
                  <OrderForm
                    form={form}
                    name="product[0].quantity"
                    title="Total Numbers"
                    placeholder="Product Quantity"
                  />
                </div>

                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={form}
                    name="product[0].good"
                    title="Good Quality"
                    placeholder="Good Items"
                  />
                  <OrderForm
                    form={form}
                    name="product[0].fair"
                    title="Fair Quality"
                    placeholder="Fair Items"
                  />
                </div>
                <div className="flex flex-row w-full gap-20">
                  <OrderForm
                    form={form}
                    name="product[0].reject"
                    title="Rejected Quality"
                    placeholder="Rejected Items"
                  />

                  <OrderForm
                    form={form}
                    name="product[0].description"
                    title="Description (optional)"
                    placeholder="Product Description"
                  />
                </div>
              </div>
            </form>
          </Form>
          <Table className="mt-5">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[300px]">Image</TableHead>
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead className="w-[300px]">Good</TableHead>
                <TableHead className="w-[300px]">Fair</TableHead>
                <TableHead className="w-[300px]">Reject</TableHead>
                <TableHead className="w-[300px]">Quantity</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {product.map((item: any) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">
                    <Image
                      src={"https://www.picsa.pro/profile.jpg"}
                      alt={item.name}
                      width={50}
                      height={30}
                      style={{ objectFit: "cover" }}
                      className="aspect-1 rounded-[200px] h-[50px] w-[50px]"
                    />
                  </TableCell>
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
                    {item.quantity}
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
