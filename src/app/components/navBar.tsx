"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export function NavBar() {

  const [menu, setMenu] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        document.querySelector('nav')?.classList.add('scroll')
      } else {
        document.querySelector('nav')?.classList.remove('scroll')
      }
    }
    )


  }, [])

  return <nav>
    <Link href="/"><img src="/assets/shared/desktop/logo-dark.png" alt="logo" /></Link>
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