import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRightIcon, UserRound } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default async function OrderPage(
  { params }: { params: { id: string } },
) {
  const result = await axios.get(
    "https://84.247.174.84/inyuat/api/order/get/" + params.id,
    {
      headers: {
        "APIKEY": "INT_okbONyVVRXRKeD198duXZ483rzsYMI",
      },
    },
  );

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
          Total #{result.data.supplier.name}
        </h2>
      </div>
    </div>
  );
}
