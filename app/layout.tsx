import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Women's Road Cycling App",
  description: "Find out about all your favorite cyclists!",
  keywords:
    "cycling, road cycling, women's cycling, road races, tour de france, road bikes ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
