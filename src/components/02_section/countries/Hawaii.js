
import React from 'react'

export default function Hawaii() {
  return (
    <div className='countryCont'>
      <div className='countryDesc'>
        <h2>Hawaii</h2>
        <h3>Food</h3>
        <p>The food of Hawaii was, almost entirely, influenced from whalers, missionaries & traders from diverse countries. A range of traditional recipes along with a particular set blends of ingredients from China, Japan, Portugal & Puerto Rico, paved the way on how Hawaiian cuisine was birthed. Eventually, many Hawaiian chefs grouped together in order to create a substantial set of fascinating meals. With the help of local farmers, ingredients grown from the islands gave the cuisine their signature Hawaiian taste.</p>
        <h3>Scenery</h3>
        <p>At the heart of Hawaii, their landmarks consistently drive the curiosity with fidelity. The hardened petroglyphs on Pu’u Loa reveal a lifetime of previous history within the island. Come relax & enjoy a long scenic drive down the island of Pepe’ekeo, where you will see gardens, volcanoes, parks & mini islands. The vast areas for you to traverse will definitely satiate your glancing needs.</p>
        <h3>Art Cultures</h3>
        <p>Of course, with art, there is always a place of origin to where the masterpieces are manifested. Various works involve feather work, petroglyphs, wood carvings & tattoos. In most cases, these works of art serve social & spiritual purposes. Wood sculpting, accompanied by stone, are meant to depict Gods. Traditional tattoo’s are hand-tapped needle markings to the skin. Upon receiving these tattoo’s, one’s body has been given spiritual power. This just goes to show on why many Hawaiian’s come together to express their beliefs onto a  canvas.</p>
      </div>

      <div className='countryActivities'>
        <h2 className='restaurants'>Restaurants:</h2>
        <h3>Coconut Grill</h3>
        <ul>
          <h4>Address: </h4><li>136 Banyan Way, Hilo, HI 96720</li>
          <h4>Phone: </h4><li>+1 (808) 961-3330</li>
          <h4>Website: </h4><li><a href='https://www.coconutgrillhilo.com/' target='_blank'>coconutgrillhilo.com</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Sunday - Thursday: 8AM - 9PM</li>
            <li>Friday - Saturday: 8AM - 9:30PM</li>
          </ul>
        </ul>
        
        <h3 className='longTitle'>Kitchen 5315 Restaurant & Tiki Bar</h3>
        <ul>
          <h4>Address: </h4><li>5315 Lower Honoapiilani Rd #153, Lahaina, HI 96761</li>
          <h4>Phone: </h4><li>+1 (808) 442-3700</li>
          <h4>Website: </h4><li><a href='https://kitchen5315maui.com/' target='_blank'>kitchen5315maui.com</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Monday - Sunday: 8AM - 8:30PM</li>
          </ul>
        </ul>

        <h2 className='attractions'>Attractions:</h2>
        <h3>Pu’u Loa Petroglyphs</h3>
        <ul>
          <h4>Address: </h4><li>Chain of Craters Rd, Pāhoa, HI 96778</li>
          <h4>Phone: </h4><li>+1 (808) 985-6000</li>
          <h4>Hours:</h4>
          <ul>
            <li>Open 24hrs</li>
          </ul>
        </ul>
        
        <h3>Kailua Pier</h3>
        <ul>
          <h4>Address: </h4><li>Kaahumanu Pl, Kailua-Kona, HI 96740</li>
          <h4>Website: </h4><li><a href='http://kailuapier.com/' target='_blank'>kailuapier.com</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Open 24hrs</li>
          </ul>
        </ul>

      </div>
    </div>
  )
}
