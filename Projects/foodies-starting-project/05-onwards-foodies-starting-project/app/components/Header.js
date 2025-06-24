import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/logo.png"
import classes from "./Header.module.css"

export default function Header() {
    return (
        <header className={classes.header}>
            <nav className={classes.nav}>
                <ul>
                    <li><Link href="/" className={classes.logo}><img src={Logo.src}></img></Link></li>
                    <li><Link href="/community">Welcome to Community</Link></li>
                    <li><Link href="/meals">Welcome to Meals</Link></li>
                    <li><Link href="/meals/share">Welcome to Share Meals</Link></li>
                    <li><Link href="/meals/food-1">Welcome to Food-1</Link></li>
                </ul>
            </nav>
        </header>
    );
}