import Link from "next/link";

export default function Header() {
    return (
        <header className="container header">
           <Link className="header__link" href="/">Home</Link>
           <Link className="header__link"href="/blog">Blog</Link>
           <Link className="header__link"href="/about">About</Link>
        </header>
    )
}