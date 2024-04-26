import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/shared/desktop_header";
import localFont from "next/font/local";
import { inter } from "@/lib/fonts";
import Header from "@/components/shared/main_header";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "@/lib/provider";

export const metadata: Metadata = {
  title: "Inyuat Farm Fresh",
  description: "Get fresh farm produce delivered to your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <Providers>
        <html suppressHydrationWarning lang="en">
          <body className={`bg-[#EDF3F2] ${inter.className}`}>
            <Header />
            <main>{children}</main>
          </body>
        </html>
      </Providers>
    </ClerkProvider>
  );
}
