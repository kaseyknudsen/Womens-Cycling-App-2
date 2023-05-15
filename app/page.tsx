import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Home Page</div>
      <h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/riders">Riders</Link>
          </li>
          <li>
            <Link href="/about/stats">Riders</Link>
          </li>
        </ul>
      </h1>
    </main>
  );
}
