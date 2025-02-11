import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import MyProvider from "./_RTK/MyProvider";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather app with your loaction ",
  authors: [{ name: "Abdo Yasser Arfat" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MyProvider>
        <body
          className={`${roboto.variable} w-screen bg-[#111] overflow-x-hidden min-h-screen antialiased`}
        >
          <main className="  w-screen h-screen  px-5 sm:px-10">{children}</main>
        </body>
      </MyProvider>
    </html>
  );
}
