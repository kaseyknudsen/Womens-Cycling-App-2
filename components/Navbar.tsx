import Link from "next/link"
const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="flex flex-row hover:flex-row space-x-24 bg-white border-black border-1 rounded-md p-5">
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