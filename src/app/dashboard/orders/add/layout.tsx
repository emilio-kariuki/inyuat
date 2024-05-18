import SuppliersSection from "./components/suppliers_section";

export default function OrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row">
      {children}{" "}
      <section className="h-full flex flex-col w-[450px] p-5 ">
        <h2 className=" text-[20px] font-semibold ">Suppliers</h2>
        <p className="text-[13px] text-gray-500 mb-5">
            Here are the list of suppliers you have added. You can copy their ID to use in the order form.
        </p>
        <SuppliersSection />
      </section>
    </div>
  );
}
