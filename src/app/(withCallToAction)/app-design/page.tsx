import { Portfollio } from "@/app/components/portfollio";
import Link from "next/link";
import styles from '@/styles/design.module.scss'

export default function AppDesign() {

  const Data = [
    { image: "/assets/app-design/desktop/image-airfilter.jpg", title: "Airfilter", description: "Solving the problem of poor indoor air quality by filtering the air" },
    { image: "/assets/app-design/desktop/image-eyecam.jpg", title: "Eyecam", description: "Product that lets you edit your favorite photos and videos at any time" },
    { image: "/assets/app-design/desktop/image-faceit.jpg", title: "Faceit", description: "Get to meet your favorite internet superstar with the faceit app" },
    { image: "/assets/app-design/desktop/image-todo.jpg", title: "Todo", description: "A todo app that features cloud sync with light and dark mode" },
    { image: "/assets/app-design/desktop/image-loopstudios.jpg", title: "Loopstudios", description: "A VR experience app made for Loopstudios" },
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
          <p>View Projects <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" /></p>
        </Link>

      </div>
      <div className={styles.graphicLink}>
        <Link href="/graphic-design">
          <h2>Graphic Design</h2>
          <p>View Projects <img src="/assets/shared/desktop/icon-right-arrow.svg" alt="" /></p>
        </Link>


      </div>
    </section>
  </>


}

