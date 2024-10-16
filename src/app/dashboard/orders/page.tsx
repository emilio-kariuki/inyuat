import { LoaderIcon, Plus } from "lucide-react";
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Product, orders } from "@/db/schema";
import UserText from "../(dashboard)/components/user_text";
import axios from "axios";

export default async function Inventory() {
  const response = await axios.get(
    "https://84.247.174.84/inyuat/api/order/get",
    {
      headers: {
        "APIKEY": "INT_okbONyVVRXRKeD198duXZ483rzsYMI",
      },
    },
  );

  return (
    <div className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white px-[100px] pt-[40px]">
      <UserText text="Here are the list of inventories."/>
      <div className=" w-full flex justify-between items-center mb-2">
      
        <h1 className="text-[20px] font-semibold">Inventories</h1>
       
        <Link
          href="/dashboard/orders/add"
          className="flex bg-green-800 rounded-[10px] py-[13px] px-[20px] gap-2 items-center hover:bg-green-700 ml-20"
        >
          <Plus color="#ffffff" className="h-[18px] w-[18px]" />
          <h5 className="font-medium text-[13px] text-white">Add Order</h5>
        </Link>
      </div>

      {response.data?.map((order: any, idx: Number) => {
        return (
          <div key={order.id} className="my-5 flex flex-col flex-wrap w-full">
            <section className="flex  flex-col items-center justify-between rounded-lg bg-gray-100/80 p-6 py-8 md:flex-row ">
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm mb-2">
                  Order Number
                </span>
                <span className="text-sm">{order.orderNumber}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm mb-2">
                  Placed on
                </span>
                <span className="text-sm">
                  {new Date(order.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm mb-2">
                  Driver
                </span>
                <span className="text-sm">{order.driverName}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-muted-foreground text-sm mb-2">
                  Total
                </span>
                <span className="text-sm">
                  {Number(order.total).toLocaleString()}
                </span>
              </div>
              <Button variant="outline" className="w-fit">
                <Link
                  href={`/dashboard/orders/${order.id}`}
                  className="text-primary "
                >
                  View Order
                </Link>
              </Button>
            </section>
            <Table>
              <TableHeader>
                <TableRow>
                <TableHead className="w-[30px]"></TableHead>
                <TableHead className="w-[300px]">Name</TableHead>
                <TableHead className="w-[300px]">Good</TableHead>
                <TableHead className="w-[300px]">Fair</TableHead>
                <TableHead className="w-[300px]">Reject</TableHead>
                <TableHead className="w-[300px]">Description</TableHead>
                  <TableHead className="text-right">Info</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.products.map((item: Product, index: number) => (
                  <TableRow key={item.id}>
                    <TableCell className="text-black w-[30px]">
                    {index + 1}
                  </TableCell>
                  <TableCell className="text-black w-[300px]">
                    {item.name}
                  </TableCell>
                  <TableCell className="text-black w-[300px]">
                    {item.good} boxes
                  </TableCell>
                  <TableCell className="text-black w-[300px]">
                    {item.fair} boxes
                  </TableCell>
                  <TableCell className="text-black w-[300px]">
                    {item.poor} boxes 
                  </TableCell>
                  <TableCell className="text-black w-[300px]">
                    {item.description}
                  </TableCell>
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
