import Link from "next/link"

export function NavBar() {

  return <nav>
    <Link href="/"><img src="/assets/shared/desktop/logo-dark.png" alt="logo" /></Link>
    <ul>
      <Link href="/about">Our Company</Link>
      <Link href="/locations">Locations</Link>
      <Link href="/contact">Contact</Link>
    </ul>
  </nav>

}