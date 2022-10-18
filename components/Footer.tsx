import Link from "next/link";

export default function Footer() {
    return (
        <p>Gå til <Link href="/"><a>Home</a></Link> <Link href="/about"><a>about</a></Link> <Link href="/contact"><a>contact</a></Link></p>
    );
}