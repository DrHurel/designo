import { Portfollio } from "@/app/components/portfollio"
import styles from '@/styles/design.module.scss'
import Link from "next/link"

export default function WebDesign() {

  const Data: any[] = [
    { image: "/assets/web-design/desktop/image-express.jpg", title: "Express", description: "A multi-carrier shipping website for ecommerce businesses" },
    { image: "/assets/web-design/desktop/image-transfer.jpg", title: "Transfer", description: "Site for low-cost money transfers and sending money within seconds" },
    { image: "/assets/web-design/desktop/image-photon.jpg", title: "Photon", description: "A state-of-the-art music player with high-resolution audio and DSP effects" },
    { image: "/assets/web-design/desktop/image-builder.jpg", title: "Builder", description: "Connects users with local contractors based on their location" },
    { image: "/assets/web-design/desktop/image-blogr.jpg", title: "Blogr", description: "Blogr is a platform for creating an online blog or publication" },
    { image: "/assets/web-design/desktop/image-camp.jpg", title: "Camp", description: "Get expert training in coding, data, design, and digital marketing" },

  ]


  return <>


    <section className={styles.hero}>
      <h1>Web design</h1>
      <p>We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
    </section>

    <Portfollio data={Data} />



    <section className={styles.redirection}>
      <div>
        <Link href="/app-design">
          <h2>App Design</h2>
          <p>View Projects</p>
        </Link>

      </div>
      <div>
        <Link href="/graphic-design">
          <h2>Graphic Design</h2>
          <p>View Projects</p>
        </Link>


      </div>
    </section>


  </>

}