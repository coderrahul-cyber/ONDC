import { Oswald } from "next/font/google";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";
import { CommonNavbar } from "@repo/ui/components/navbar";
import Image from "next/image";

export const oswald = Oswald({

  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],

});

export const rejoice = localFont({
  src : './fonts/Rejouice.ttf',
  variable: '--font-rejouice',
})
export const metadata: Metadata = {
  title: "ONDC",
  description: "A marketplace for all",
  icons : {
    icon : "/main.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-primary ${oswald.variable} ${rejoice.variable} antialiased `}>
      <CommonNavbar className="justify-center max-h-[14vh] overflow-hidden  "  route="main">
         <Image src="/main.png" width={150}  height={120}   alt="Main Image" priority className="w-auto"   />
      </CommonNavbar>
        {children}
      </body>
    </html>
  );
}
