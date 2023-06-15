import Image from "next/image"
import Link from "next/link"


const NavBar = () => {
  return (
    <header className="flex items-center justify-between mt-20 mb-16">
        <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" width={65} height={40}/>
        </Link>
        <nav>
            <ul className="flex gap-12">
                <li><Link href="/">Home</Link></li>
                <li><Link href="#">New</Link></li>
                <li><Link href="#">Popular</Link></li>
                <li><Link href="#">Trending</Link></li>
                <li><Link href="#">Categories</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar;