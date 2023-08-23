import Link from 'next/link'
export default function Header() {
    return (
        <>
            <div className="tm-header">
                <div className="container-fluid">
                    <div className="tm-header-inner">
                        <a href="#" className="navbar-brand tm-site-name">My Blog</a>
                        <nav className="navbar tm-main-nav">
                            <div>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/about" className="nav-link">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blog" className="nav-link">Blog</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" className="nav-link">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
