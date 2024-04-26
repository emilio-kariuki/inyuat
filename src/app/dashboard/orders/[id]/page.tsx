"use client";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRightIcon, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import type { Inventory, Prisma, PrismaClient } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function OrderPage({ params }: { params: { id: string } }) {
  const { data: inventory, isLoading: loading } = useQuery<Inventory>({
    queryKey: ["inventory", params.id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/v1/inventory?id=${params.id}`);
      return data as Inventory;
    },
    staleTime: 6 * 1000,
  });

  const pathname = usePathname();
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
      </div>

      {/* Customer section */}
    </div>
  );
}
