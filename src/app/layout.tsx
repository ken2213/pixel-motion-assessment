import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/Layouts/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Honda Dealership",
  description: "Honda Car Dealership Official Website",
  icons: {
    icon: "/honda.svg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        {children}
      </body>
    </html>
  );
}
