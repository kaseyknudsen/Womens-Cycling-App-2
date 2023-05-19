import Link from "next/link"
const Navbar = () => {
  return (
    <div>
        <nav className="relative mx-auto">
            <div className="flex sm:flex-col md:flex-row justify-center bg-brightRedLight space-x-24 items-center h-32">
              {/* logo */}
                <Link href="/" className="hover:text-darkGreyishBlue">Home</Link>
                <Link href="/riders" className="hover:text-darkGreyishBlue">Riders</Link>
                <Link href="/teams" className="hover:text-darkGreyishBlue">Teams</Link>
                <Link href="/races" className="hover:text-darkGreyishBlue">Races</Link>
                <Link href="/news" className="hover:text-darkGreyishBlue">News</Link>
                {/* <Link href="/gear">Gear</Link> */}
                {/* <Link href="/community">Community</Link> */}
                <Link href="#" className="hidden md:block p-3 px-6 pt-2 bg-white rounded-full hover:bg-veryLightGrey">Sign In</Link>
            </div>
        </nav>

    </div>
  )
}

export default Navbar