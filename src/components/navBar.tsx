
import Link from "next/link"

import Image from "next/image"

import logoDark from '/public/assets/shared/desktop/logo-dark.png'
import { NavBarClient } from "./navBarClient"

export function NavBar() {


  return <nav>
    <NavBarClient />
    <Link href="/"><Image src={logoDark} alt="logo" /></Link>
    <div>
      <input type="checkbox" name="menu" id="menu" />
      <div className="anim">


        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <Link href="/about">Our Company</Link>
        <Link href="/locations">Locations</Link>
        <Link href="/contact">Contact</Link>
      </ul>
    </div>
  </nav>

}