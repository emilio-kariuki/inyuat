export default function OrdersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-full w-full flex flex-row">
        
      {children} 
      <div className="flex flex-col h-full w-[400px] border-l-[1px] border-gray-300"></div>
    </div>
  );
}
