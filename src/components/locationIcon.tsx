import styles from '@/styles/locationIcon.module.scss'
import Link from 'next/link'

export function LocationIcon() {


  return <section className={styles.locations}>
    <div>

      <img src="/assets/shared/desktop/illustration-canada.svg" alt="" />
      <h4> Canada
      </h4>
      <Link href="/locations"><button>See location</button>
      </Link>
    </div>
    <div>
      <img src="/assets/shared/desktop/illustration-australia.svg" alt="" />
      <h4> Australia
      </h4>
      <Link href="/locations"><button>See location</button>
      </Link>
    </div>
    <div>
      <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="" />
      <h4> United Kingdom
      </h4>
      <Link href="/locations">
        <button>See location</button></Link>


    </div>
  </section>

}