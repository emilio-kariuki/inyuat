"use client";
import { SignIn } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathName = usePathname();
  return (
    <div className="flex h-full min-h-screen w-full items-center justify-center bg-gray-100">
      <SignIn
        appearance={{
          elements: {
            logoBox: "mx-auto flex items-center justify-center",
            logoImage: "h-8 w-auto",
            formButtonPrimary: "bg-[#38B279] hover:bg-[#38B279]/80",
            footerActionLink:
              "text-[#38B279] hover:text-[#38B279] hover:underline",
          },
        }}
        // afterSignInUrl={"https://dashboard.inyuat.site"}
        // afterSignUpUrl={"https://dashboard.inyuat.site"}
        // afterSignOutUrl={"https://dashboard.inyuat.site"}
        // afterSignInUrl={pathName === "/sign-in" ? "https://dashboard.inyuat.site" : "/dashboard"}
      />
    </div>
  );
}
