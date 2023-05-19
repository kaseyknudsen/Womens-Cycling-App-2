import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Poppins, Raleway } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  weight: ["200", "300", "400", "700", "800", "900"],
  preload: false,
});

const raleway = Raleway({
  weight: ["200", "300", "400", "700", "800", "900"],
  preload: false,
});

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
      <body className={raleway.className}>
        <div>
          <Navbar />
        </div>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
