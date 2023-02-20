import Footer from "./Footer";
import Navbar from "./Navbar";
import { philosopher } from '@/utils/fonts';

const Layout = ({ children }) => {
    return (
        <div className={`content ${philosopher.className}`}>
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
}

export default Layout;