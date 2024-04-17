export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex h-full min-h-screen w-full items-center justify-center bg-gray-100">
        <h1>Dashboard layout</h1>
        {children}
      </div>
    );
  }