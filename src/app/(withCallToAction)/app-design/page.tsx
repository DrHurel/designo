import { Portfollio } from "@/components/portfollio";
import Link from "next/link";
import styles from '@/styles/design.module.scss'
import Image from 'next/image'

import imgAirfilter from '/public/assets/app-design/desktop/image-airfilter.jpg'
import imgEyecam from '/public/assets/app-design/desktop/image-eyecam.jpg'
import imgFaceit from '/public/assets/app-design/desktop/image-faceit.jpg'
import imgTodo from '/public/assets/app-design/desktop/image-todo.jpg'
import imgLoopstudios from '/public/assets/app-design/desktop/image-loopstudios.jpg'

import iconRightArrow from '/public/assets/shared/desktop/icon-right-arrow.svg'

export default function AppDesign() {

  const Data = [
    { image: imgAirfilter, title: "Airfilter", description: "Solving the problem of poor indoor air quality by filtering the air" },
    { image: imgEyecam, title: "Eyecam", description: "Product that lets you edit your favorite photos and videos at any time" },
    { image: imgFaceit, title: "Faceit", description: "Get to meet your favorite internet superstar with the faceit app" },
    { image: imgTodo, title: "Todo", description: "A todo app that features cloud sync with light and dark mode" },
    { image: imgLoopstudios, title: "Loopstudios", description: "A VR experience app made for Loopstudios" },
  ]


  return <>

    <section className={styles.hero + " " + styles.appDesign}>
      <h1>App design</h1>
      <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.
      </p>
    </section>

    <Portfollio data={Data} />



    <section className={styles.redirection}>
      <div className={styles.webLink}>
        <Link href="/web-design">
          <h2>Web Design</h2>
          <p>View Projects <Image src={iconRightArrow} alt="" /></p>
        </Link>

      </div>
      <div className={styles.graphicLink}>
        <Link href="/graphic-design">
          <h2>Graphic Design</h2>
          <p>View Projects <Image src={iconRightArrow} alt="" /></p>
        </Link>


      </div>
    </section>
  </>


}

