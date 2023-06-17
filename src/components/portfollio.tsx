import styles from '@/styles/portfollio.module.scss'
import Image from 'next/image'

export function Portfollio({ data }: { data: any[] }) {


  return <section className={styles.portfollio}>
    {

      data.map((item, index) => {
        return <div key={index}>
          <Image src={item.image} alt={item.title} placeholder='blur' />
          <div className={styles.info}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      })
    }


  </section>
}