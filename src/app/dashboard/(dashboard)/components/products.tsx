"use server";

import React from "react";
import { getTotalProducts } from "@/lib/actions/product.actions";
import DonutChart from "./donut_chart";

const GoodProducts = async ({ name }: { name: string }) => {
  const totals = await getTotalProducts(name);
  return (
    <div className="flex flex-col p-[10px] px-5 py-8 border-[1px] border-[#e8e8e8] rounded-[10px] ">
      <DonutChart
        good={totals?.good || 0}
        fair={totals?.fair || 0}
        reject={totals?.reject || 0}
      />
    </div>
  );
};

export default GoodProducts;
