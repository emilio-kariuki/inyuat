import { LoaderIcon } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <LoaderIcon className="h-8 w-8 animate-spin" />
    </div>
  );
}
