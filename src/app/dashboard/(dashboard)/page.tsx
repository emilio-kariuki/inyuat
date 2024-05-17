
import { useUser } from "@clerk/nextjs";
import UserText from "./components/user_text";
import GoodProducts from "./components/products";

const dataFormatter = (number: number) => {
  return "Ksh " + Intl.NumberFormat("us").format(number).toString();
};

const items = [
  "Mangoes",
  "Chilli Peppers",
  "French Beans",
  "Avocado",
  "Passion Fruit",
  "Sugar Snap",
  "Baby Corn",
  "Peas"
];

export default function DashboardPage() {
  
  return (
    <div className="flex flex-col h-full w-full  gap-8 p-[28px]">
     <UserText text="Here are the list of products you can order from our suppliers."/>
     {
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h2 className="text-[20px] font-semibold">Total Orders</h2>
          <p className="text-[13px] text-gray-500">
            You have made a total of 10 orders.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[20px] font-semibold">Total Suppliers</h2>
          <p className="text-[13px] text-gray-500">
            You have a total of 5 suppliers.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[20px] font-semibold">Total Amount</h2>
          <p className="text-[13px] text-gray-500">
            You have spent a total of {dataFormatter(2000)}.
          </p>
        </div>
      </div>
     }
     
    </div>
  );
}
