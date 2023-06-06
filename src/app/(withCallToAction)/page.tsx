import Image from 'next/image'
import styles from '@/styles/index.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div> <h2>Award-winning custom designs and digital branding solutions</h2>
          <p> With over 10 years in the industry, we are experienced in creating fully responsive websites, app design,
            and engaging brand experiences. Find out more about our services.
          </p>
          <button> Learn more</button></div>
        <div>
          <img src="assets/home/desktop/image-hero-phone.png" alt="phone" />
        </div>
      </section>
      <section className={styles.design}>
        <div><Link href="/web-design"><h2>Web Design</h2>
          <p>View Projects</p>

        </Link>
        </div>
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
      <section className={styles.mojo}>
        <div>
          <img src="/assets/home/desktop/illustration-passionate.svg" alt="" />
          <h4>Passionate</h4>
          <p> Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge
            art, design, and technology into exciting new solutions.</p>

        </div>
        <div>
          <img src="/assets/home/desktop/illustration-resourceful.svg" alt="" />
          <h4>Resourceful</h4>
          <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer
            collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
        </div>
        <div>
          <img src="/assets/home/desktop/illustration-friendly.svg  " alt="" />
          <h4>Friendly</h4>
          <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we
            strive to give them the best experience a company can provide.</p>
        </div>
      </section>







    </>
  )
}
