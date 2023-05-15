import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Navbar />
      </div>
    </main>
  );
}
