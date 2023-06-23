"use client"
import { useEffect, useState } from "react"

export function NavBarClient() {

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

  return <></>

}