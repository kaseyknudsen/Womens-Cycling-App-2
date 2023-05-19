import Link from "next/link"
const Navbar = () => {
  return (
    <div>
        <nav className="relative container mx-auto">
            <div className="flex justify-center bg-brightRedLight space-x-32 items-center h-32">
              {/* logo */}
              <div className="pt-2"></div>
                <Link href="/">Home</Link>
                <Link href="/riders">Riders</Link>
                <Link href="/teams">Teams</Link>
                <Link href="/races">Races</Link>
                <Link href="/news">News</Link>
                <Link href="/gear">Gear</Link>
                <Link href="/community">Community</Link>
            </div>
        </nav>

    </div>
  )
}

export default Navbar