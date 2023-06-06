import styles from '@/styles/location.module.scss'

export default function Locations() {

  return <>





    <section className={styles.location}>
      <div>
        <h2>Canada</h2>
        <div>
          <p>Designo Central Office
            3886 Wellington Street
            Toronto, Ontario M9C 3J5</p>
          <p>Contact
            P : +1 253-863-8967
            M : contact@designo.co</p>
        </div>
      </div>
      <div>
        <img src="/assets/locations/desktop/image-map-canada.png" alt="map canada" />

      </div>
      <div>
        <img src="/assets/locations/desktop/image-map-australia.png" alt="map australia" />

      </div>
      <div>
        <h2>Australia</h2>
        <div>
          <p>
            Designo AU Office
            19 Balonne Street
            New South Wales 2443
          </p>
          <p>Contact
            P : (02) 6720 9092
            M :contact@designo.au</p>

        </div>


      </div>


      <div>
        <h2>United Kingdom</h2>
        <div>
          <p>Designo UK Office
            13 Colorado Way
            Rhyd-y-fro SA8 9GA</p>
          <p> Contact
            P : 078 3115 1400
            M : contact@designo.uk</p>
        </div>



      </div>
      <div>
        <img src="/assets/locations/desktop/image-map-united-kingdom.png" alt="map uk" />

      </div>
    </section>
  </>


}