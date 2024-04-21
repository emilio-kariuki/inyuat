"use client"
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
import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { Inventory, Prisma, PrismaClient } from "@prisma/client";
import DashboardLayout from "../layout";
import DashboardLoading from "../loading";
import { useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

export default function Inventory() {
    const [currentPage, setCurrentPage] = useState(1);
 const pageSize = 10;
 
 const changePage = (page: number) => {
    setCurrentPage(page);
    }

    const { data: orders , isFetching: isLoading } = useQuery<Inventory[]>({
        queryKey: ["orders"],
        queryFn: async () =>{
            const { data } = await axios.get("/api/v1/order?page=" + 3);
            console.log(data);
            return data as Inventory[];
        },
        staleTime: 6 * 1000,
    });

    return (
        isLoading ? (<DashboardLoading />) : (
        <div className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white  p-[28px]">
            <div className=" w-full flex justify-between items-center mb-2">
                <h1 className="text-[20px] font-semibold">
                    Orders
                </h1>
                <Pagination className="w-fit">
      <PaginationContent>
        
        {
            Array.from({ length: 10 }).map((_, i) => (
                <PaginationItem key={i}>
                <PaginationLink onClick={
                    () => setCurrentPage(i + 1)
                } isActive={currentPage === i + 1}>
                    {i + 1}
                </PaginationLink>
                </PaginationItem>
            ))
        }
        
      </PaginationContent>
    </Pagination>
                <div className="flex bg-green-800 rounded-[10px] py-[13px] px-[20px] gap-2 items-center hover:bg-green-700 ml-20">
                    <Plus color="#ffffff" className="h-[18px] w-[18px]" />
                    <h5 className="font-medium text-[13px] text-white">Add Order</h5>
                </div>
            </div>
            {orders?.map((order: any, idx: Number) => {
                return (
                    <div key={order.id} className="my-5 flex flex-col flex-wrap w-full">
                        <section className="flex  flex-col items-center justify-between rounded-lg bg-gray-100/80 p-6 py-5 md:flex-row ">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-muted-foreground text-sm mb-2">
                                    Order Number
                                </span>
                                <span className="text-sm">{order.orderNumber}</span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-muted-foreground text-sm mb-2">
                                    Order Status
                                </span>
                                <span
                                    className={cn(
                                        "inline-flex w-fit items-center justify-center rounded-[20px] px-4 py-2 text-[14px] font-medium",
                                        (order.status).toLowerCase() === "pending" &&
                                        "bg-yellow-200 text-yellow-800",
                                        (order.status).toLowerCase() === "confirmed" &&
                                        "bg-green-200 text-green-800",
                                        (order.status).toLowerCase() === "shipped" && "bg-red-200 text-red-800",
                                        (order.status).toLowerCase() === "delivered" && "bg-blue-200 text-blue-800",
                                        (order.status).toLowerCase() === "cancelled" && "bg-gray-200 text-gray-800"
                                    )}
                                >
                                    {(order.status).toLowerCase()}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-muted-foreground text-sm mb-2">Placed on</span>
                                <span className="text-sm">
                                    {new Date(order.createdAt).toLocaleString()}
                                </span>
                            </div>

                            <div className="flex flex-col gap-0.5">
                                <span className="text-muted-foreground text-sm mb-2">Placed By</span>
                                <span className="text-sm">
                                    {order.user}
                                </span>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className="text-muted-foreground text-sm mb-2">Total</span>
                                <span className="text-sm">
                                    {Number(order.total).toLocaleString()}
                                </span>
                            </div>
                            <Button variant="outline" className="w-fit" >
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
                                    <TableHead className="w-[300px]">Product</TableHead>
                                    <TableHead className="w-[150px]">Unit Price</TableHead>
                                    <TableHead className="w-[150px]">Quantity</TableHead>
                                    <TableHead >Description</TableHead>
                                    <TableHead className="text-right">Info</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {order.orderItems.map((item: any) => (
                                    <TableRow key={item.id}>
                                        <TableCell className="flex items-center gap-5 font-medium">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                width={50}
                                                height={30}
                                                style={{ objectFit: "cover" }}
                                                className="aspect-1 rounded-[200px] h-[50px] w-[50px]"
                                            />
                                            {item.name}
                                        </TableCell>
                                        <TableCell>{item.price}</TableCell>
                                        <TableCell>{item.quantity}</TableCell>
                                        <TableCell>{item.description}</TableCell>
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
      )
    
        
    );
}