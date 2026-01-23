import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <nav className="nav">
            <Link to="/" className="nav-logo">
                Martin Tomek
            </Link>

            <ul className="nav-links">
                {isHome ? (
                    <>
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#work" className="nav-link">Work</a></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/#work" className="nav-link">Work</Link></li>
                        <li><Link to="/#about" className="nav-link">About</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;
