import Link from "next/link"

export function NavBar() {

  return <nav>
    <img src="/assets/shared/desktop/logo-dark.png" alt="logo" />
    <ul>
      <Link href="/about">Our Company</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/contact">Contact</Link>
    </ul>
  </nav>

}