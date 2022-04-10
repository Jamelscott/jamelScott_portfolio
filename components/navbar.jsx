//built in Link from next
import Link from "next/link";

function Navbar() {
    return ( 
        <nav>
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
        </nav>
     );
}

export default Navbar;