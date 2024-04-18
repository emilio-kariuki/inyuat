"use client"
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRightIcon, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from 'next/link'

export default function OrderPage() {
    const order = {
        id: 3,
        orderNumber: "ORD-0005",
        createdAt: "2021-08-01T00:00:00.000Z",
        status: "cancelled",
        total: 50000,
        user: "Emilio kariuki",
        customerName: "Emilio Kariuki",
        customerEmail: "emilio@inyuat.site",
        customerPhone: "+254 712 345 678",
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
    }
    const pathname = usePathname()
    return (
        <div className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white p-[28px]">
            <div className="flex flex-row gap-4">
                <Link href="/dashboard/orders">
                    <ChevronLeft className="h-6 w-6 text-gray-500" />
                </Link>
                <h1 className="text-[20px] font-semibold mb-5">
                    Order Details
                </h1>
            </div>

            <h2 className="text-[14px] text-black font-bold">
                Order ID #{order.id}
            </h2>
            <h2 className="text-[12px] text--[#E4E4E4] font-medium">
                {new Date(order.createdAt).toLocaleString()}
            </h2>
            <div>
                <span
                    className={cn(
                        "inline-flex w-fit items-center justify-center rounded-[20px] px-2 py-1 text-xs font-medium mt-5",
                        order.status === "submitted" &&
                        "bg-yellow-200 text-yellow-800",
                        order.status === "approved" &&
                        "bg-green-200 text-green-800",
                        order.status === "cancelled" && "bg-red-200 text-red-800",
                        order.status === "delivered" && "bg-blue-200 text-blue-800"
                    )}
                >
                    {order.status}
                </span>
            </div>

            {/* Customer section */}
            <div className="flex flex-row gap-2">
                <div className="flex items-center justify-center rounded-full h-12 w-12 bg-gray-50 ">
                    <UserRound className="h-6 w-6 " size={23} />
                </div>
                <div></div>
            </div>

        </div>
    )
}