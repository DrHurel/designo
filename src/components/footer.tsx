import Image from 'next/image'

import logoLight from '/public/assets/shared/desktop/logo-light.png'
import iconFacebook from '/public/assets/shared/desktop/icon-facebook.svg'
import iconInstagram from '/public/assets/shared/desktop/icon-instagram.svg'
import iconPinterest from '/public/assets/shared/desktop/icon-pinterest.svg'
import iconTwitter from '/public/assets/shared/desktop/icon-twitter.svg'
import iconYoutube from '/public/assets/shared/desktop/icon-youtube.svg'


export function Footer() {


  return <footer>

    <section>
      <Image src={logoLight} alt="logo" />
      <ul>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
    </section>
    <section>
      <div>
        <p>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5
        </p>



      </div>
      <div>
        <p>Contact Us (Central Office)</p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </div>
      <div>
        <a href="https://facebook.com" target='_blank'><Image src={iconFacebook} alt="facebook" /></a>
        <a href="https://facebook.com" target='_blank'><Image src={iconInstagram} alt="instagram" /></a>
        <a href="https://facebook.com" target='_blank'><Image src={iconPinterest} alt="pinterest" /></a>
        <a href="https://facebook.com" target='_blank'><Image src={iconTwitter} alt="twitter" /></a>
        <a href="https://facebook.com" target='_blank'><Image src={iconYoutube} alt="youtube" /></a>

      </div>


    </section>






  </footer>


}