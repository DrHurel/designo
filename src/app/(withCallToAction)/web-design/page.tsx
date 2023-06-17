import { Portfollio } from "@/components/portfollio"
import styles from '@/styles/design.module.scss'
import Link from "next/link"
import Image from 'next/image'

import imgExpress from '/public/assets/web-design/desktop/image-express.jpg'
import imgTransfer from '/public/assets/web-design/desktop/image-transfer.jpg'
import imgPhoton from '/public/assets/web-design/desktop/image-photon.jpg'
import imgBuilder from '/public/assets/web-design/desktop/image-builder.jpg'
import imgBlogr from '/public/assets/web-design/desktop/image-blogr.jpg'
import imgCamp from '/public/assets/web-design/desktop/image-camp.jpg'

import iconRightArrow from '/public/assets/shared/desktop/icon-right-arrow.svg'


export default function WebDesign() {

  const Data: any[] = [
    { image: imgExpress, title: "Express", description: "A multi-carrier shipping website for ecommerce businesses" },
    { image: imgTransfer, title: "Transfer", description: "Site for low-cost money transfers and sending money within seconds" },
    { image: imgPhoton, title: "Photon", description: "A state-of-the-art music player with high-resolution audio and DSP effects" },
    { image: imgBuilder, title: "Builder", description: "Connects users with local contractors based on their location" },
    { image: imgBlogr, title: "Blogr", description: "Blogr is a platform for creating an online blog or publication" },
    { image: imgCamp, title: "Camp", description: "Get expert training in coding, data, design, and digital marketing" },

  ]


  return <>


    <section className={styles.hero + " " + styles.webDesign}>
      <h1>Web design</h1>
      <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
    </section>

    <Portfollio data={Data} />



    <section className={styles.redirection}>
      <div className={styles.appLink}>
        <Link href="/app-design">
          <h2>App Design</h2>
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