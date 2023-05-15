import Link from "next/link"
const Navbar = () => {
  return (
    <div>
        <nav>
            <div className="nav">
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