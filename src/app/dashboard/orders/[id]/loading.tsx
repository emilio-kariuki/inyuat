import { LoaderIcon } from "lucide-react";

export default function DashboardLoading() {
  return (
    <div className="mt-60 flex h-full w-full items-center justify-center">
      <LoaderIcon className="h-8 w-8 animate-spin" />
    </div>
  );
}
