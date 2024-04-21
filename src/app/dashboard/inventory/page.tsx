import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Inventory() {
  const orders = [
    {
      id: 1,
      orderNumber: "ORD-0001",
      createdAt: "2021-08-01T00:00:00.000Z",
      status: "submitted",
      total: 50000,
      user: "Emilio Kariuki",
      orderItems: [
        {
          id: 1,
          name: "Milk",
          description: "Fresh milk from the farm",
          quantity: 2,
          price: 10000,
          image: "https://bit.ly/placeholder-img",
        },
        {
          id: 2,
          name: "Bread",
          description: "Fresh bread from the bakery",
          quantity: 1,
          price: 30000,
          image: "https://bit.ly/placeholder-img",
        },
      ],
    },
    {
      id: 2,
      orderNumber: "ORD-0004",
      createdAt: "2021-08-01T00:00:00.000Z",
      status: "delivered",
      total: 50000,
      user: "Amanda Flavia",

      orderItems: [
        {
          id: 1,
          name: "Canned Milk",
          description: "Fresh milk from the farm",
          quantity: 2,
          price: 10000,
          image: "https://bit.ly/placeholder-img",
        },
        {
          id: 3,
          name: "Canned Yogurt",
          description: "Fresh milk from the farm",
          quantity: 2,
          price: 10000,
          image: "https://bit.ly/placeholder-img",
        },
        {
          id: 2,
          name: "Bread",
          description: "Fresh bread from the bakery",
          quantity: 1,
          price: 30000,
          image: "https://bit.ly/placeholder-img",
        },
      ],
    },
    {
      id: 3,
      orderNumber: "ORD-0005",
      createdAt: "2021-08-01T00:00:00.000Z",
      status: "cancelled",
      total: 50000,
      user: "Emilio kariuki",

      orderItems: [
        {
          id: 1,
          name: "Milk",
          description: "Fresh milk from the farm",
          quantity: 2,
          price: 10000,
          image: "https://bit.ly/placeholder-img",
        },
        {
          id: 2,
          name: "Bread",
          description: "Fresh bread from the bakery",
          quantity: 1,
          price: 30000,
          image: "https://bit.ly/placeholder-img",
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white  p-[28px]">
      <div className=" w-full flex justify-between items-center mb-2">
        <h1 className="text-[20px] font-semibold">Inventory & Stock</h1>
        <div className="flex bg-green-800 rounded-[10px] py-[13px] px-[20px] gap-2 items-center hover:bg-green-700 ml-20">
          <Plus color="#ffffff" className="h-[18px] w-[18px]" />
          <h5 className="font-medium text-[13px] text-white">Add Product</h5>
        </div>
      </div>
      {orders.map((order, idx) => {
        return (
          <div key={order.id} className="my-5 flex flex-col">
            <section className="flex w-full flex-col items-center justify-between rounded-lg bg-gray-100/80 p-6 py-8 md:flex-row gap-12">
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm">
                  Order Number
                </span>
                <span className="text-sm">{order.orderNumber}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm">
                  Order Status
                </span>
                <span
                  className={cn(
                    "inline-flex w-fit items-center justify-center rounded px-2 py-1 text-xs font-medium",
                    order.status === "submitted" &&
                      "bg-yellow-200 text-yellow-800",
                    order.status === "approved" &&
                      "bg-green-200 text-green-800",
                    order.status === "cancelled" && "bg-red-200 text-red-800",
                    order.status === "delivered" && "bg-blue-200 text-blue-800",
                  )}
                >
                  {order.status}
                </span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm">Placed on</span>
                <span className="text-sm">
                  {new Date(order.createdAt).toLocaleString()}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm">Placed By</span>
                <span className="text-sm">{order.user}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm">Total</span>
                <span className="text-sm">
                  {Number(order.total).toLocaleString()}
                </span>
              </div>

              <Link href={`/orders/${order.id}`} className="text-primary">
                View Order
              </Link>
            </section>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[300px]">Product</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="text-right">Info</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="flex items-center gap-5 font-medium">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={50}
                        height={50}
                        style={{ objectFit: "cover" }}
                        className="aspect-1 rounded-md"
                      />
                      {item.name}
                    </TableCell>
                    <TableCell>{item.price}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={`/products/${item.id}`}
                        className="text-primary"
                      >
                        View Product
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      })}
    </div>
  );
}
