import styles from '@/styles/locationIcon.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import ImageCanada from '/public/assets/shared/desktop/illustration-canada.svg'
import ImageAustralia from '/public/assets/shared/desktop/illustration-australia.svg'
import ImageUk from '/public/assets/shared/desktop/illustration-united-kingdom.svg'

export function LocationIcon() {


  return <section className={styles.locations}>
    <div>

      <Image src={ImageCanada} alt="" />
      <h4> Canada
      </h4>
      <Link href="/locations"><button>See location</button>
      </Link>
    </div>
    <div>
      <Image src={ImageAustralia} alt="" />
      <h4> Australia
      </h4>
      <Link href="/locations"><button>See location</button>
      </Link>
    </div>
    <div>
      <Image src={ImageUk} alt="" />
      <h4> United Kingdom
      </h4>
      <Link href="/locations">
        <button>See location</button></Link>


    </div>
  </section>

}