import { Portfollio } from "@/components/portfollio";
import Link from "next/link";
import styles from '@/styles/design.module.scss'
import Image from 'next/image'

import imgChange from '/public/assets/graphic-design/desktop/image-change.jpg'
import imgBoxed from '/public/assets/graphic-design/desktop/image-boxed-water.jpg'
import imgScience from '/public/assets/graphic-design/desktop/image-science.jpg'

import iconRightArrow from '/public/assets/shared/desktop/icon-right-arrow.svg'

export default function GraphicDesign() {

  const Data = [
    { image: imgChange, title: "Tim Brown", description: "A book cover designed for Tim Brown’s new release, ‘Change’" },
    { image: imgBoxed, title: "Boxed water", description: "A simple packaging concept made for Boxed Water" },
    { image: imgScience, title: "Science!", description: "A poster made in collaboration with the Federal Art Project" },
  ]

  return <>





    <section className={styles.hero + " " + styles.graphicDesign}>
      <h1>Graphic design</h1>
      <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.
      </p>
    </section>

    <Portfollio data={Data} />



    <section className={styles.redirection}>
      <div className={styles.appLink}>
        <Link href="/app-design">
          <h2>App Design</h2>
          <p>View Projects <Image src={iconRightArrow} alt="" /></p>
        </Link>

      </div>
      <div className={styles.webLink}>
        <Link href="/web-design">
          <h2>Web Design</h2>
          <p>View Projects <Image src={iconRightArrow} alt="" /></p>
        </Link>


      </div>
    </section>
  </>

}