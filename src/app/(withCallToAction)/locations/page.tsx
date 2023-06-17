import styles from '@/styles/location.module.scss'
import Image from 'next/image'

import imgCanada from '/public/assets/locations/desktop/image-map-canada.png'
import imgAustralia from '/public/assets/locations/desktop/image-map-australia.png'
import imgUk from '/public/assets/locations/desktop/image-map-united-kingdom.png'



export default function Locations() {

  return <>
    <section className={styles.location}>
      <div>
        <Image src={imgCanada} alt="map canada" placeholder='blur' />

      </div>
      <div id='canada'>
        <h2>Canada</h2>
        <div>
          <span>
            <p>Designo Central Office</p>
            <p>3886 Wellington Street</p>
            <p>Toronto, Ontario M9C 3J5</p>
          </span>

          <span>
            <p>Contact
            </p>
            <p>P : +1 253-863-8967
            </p>
            <p>M : contact@designo.co</p>
          </span>
        </div>
      </div>

      <div>
        <Image src={imgAustralia} alt="map australia" placeholder='blur' />

      </div>
      <div id="autralia">
        <h2>Australia</h2>
        <div>

          <span>
            <p>Designo AU Office</p>
            <p>19 Balonne Street</p>
            <p>New South Wales 2443</p>
          </span>

          <span>
            <p>Contact
            </p>
            <p>P : (02) 6720 9092
            </p>

            <p>
              M :contact@designo.au</p>

          </span>

        </div>


      </div>

      <div>
        <Image src={imgUk} alt="map uk" placeholder='blur' />
      </div>
      <div id='uk'>
        <h2>United Kingdom</h2>
        <div>
          <span>
            <p>Designo UK Office
            </p>
            <p>13 Colorado Way
            </p>
            <p>Rhyd-y-fro SA8 9GA</p>
          </span>


          <span>
            <p> Contact
            </p>
            <p>P : 078 3115 1400
            </p>
            <p>
              M : contact@designo.uk
            </p>
          </span>
        </div>



      </div>

    </section>
  </>


}