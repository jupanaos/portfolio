import Link from "next/link"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar</h1>
            </div>
            <Link href="/">Accueil</Link>
            <Link href="/work">Projets</Link>
            <Link href="/about">&Agrave; propos</Link>
            <Link href="/contact">Contact</Link>
            {/* <Link href="/">CV</Link> */}
        </nav>
    );
}

export default Navbar;