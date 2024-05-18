
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRightIcon, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getOrderById } from "@/lib/actions/orders.actions";

export default async function OrderPage({ params }: { params: { id: string } }) {
  const result = await getOrderById(params.id);

  return (
    <div className="flex flex-col h-full min-h-screen w-full items-start justify-start bg-white p-[28px]">
      <div className="flex flex-row gap-4">
        <Link href="/dashboard/orders">
          <ChevronLeft className="h-6 w-6 text-gray-500" />
        </Link>
        <h1 className="text-[20px] font-semibold">Order Details</h1>
      </div>

      <div className="mb-10">
        <h2 className="text-[13px] text-black font-medium">
          Order ID #{params.id}
        </h2>
        <h2 className="text-[13px] text-black font-medium">
          Total #{result.user.name}
        </h2>
      </div>
    </div>
  );
}
