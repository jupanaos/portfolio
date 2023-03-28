import Link from "next/link";
import styles from '@/styles/components/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="/">Accueil</Link>
            <Link href="/work">Projets</Link>
            <Link href="/about">&Agrave; propos</Link>
            {/* <a
            href="/files/CV-JPARIONAOSCO-2023.pdf"
            target="_blank"
            rel="noopener noreferrer"
            >CV
            </a> */}
        </nav>
    );
}

export default Navbar;