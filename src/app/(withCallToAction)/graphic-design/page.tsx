import { Portfollio } from "@/app/components/portfollio";
import Link from "next/link";
import styles from '@/styles/design.module.scss'

export default function GraphicDesign() {

  const Data = [
    { image: "/assets/graphic-design/desktop/image-change.jpg", title: "Tim Brown", description: "A book cover designed for Tim Brown’s new release, ‘Change’" },
    { image: "/assets/graphic-design/desktop/image-boxed-water.jpg", title: "Boxed water", description: "A simple packaging concept made for Boxed Water" },
    { image: "/assets/graphic-design/desktop/image-science.jpg", title: "Science!", description: "A poster made in collaboration with the Federal Art Project" },
  ]

  return <>





    <section className={styles.hero}>
      <h1>Graphic design</h1>
      <p>We deliver eye-catching branding materials that are tailored to meet your business objectives.
      </p>
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
        <Link href="/web-design">
          <h2>Web Design</h2>
          <p>View Projects</p>
        </Link>


      </div>
    </section>
  </>

}