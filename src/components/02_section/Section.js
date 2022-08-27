
import React from 'react'
import Info from './Info.js'
import infoData from '../02_section/content/infoData.js'
import Destinations from './Destinations.js'
import destInfo from '../02_section/content/destinationInfo.js'



//Images

export default function Section() {

  //<Info /> Component
  let info = infoData.map((info) => {
    return (
      <Info
        key={info.id}
        img={info.img}
        h1={info.h1}
        p={info.p}
      />
    )
  })

  //<Destination /> Component
  let destination = destInfo.map((dest) => {
    return (
      <Destinations
        key={dest.id}
        img={dest.img}
        p={dest.p}
        link={dest.link}
      />
    )
  })

  return (
    <section>
      <div id='information' className='infoContainer'>
        <h1 className='infoTitle'>Here it is.</h1>
        {info}
      </div>

      <div className='safety'>
        <h1 className='safeTitle'>Making Traveling Safe Again</h1>
        <ul className='safeList'>
          <li>Up-to-date information on new & current cases.</li>
          <li>COVID Testing Available</li>
          <li>24/7 Online Support</li>
          <li>Peace of mind</li>
        </ul>
      </div>

      <div id='price' className='pricing'>
        <div className='priceTitle'>
          <h1>Pricing</h1>
          <p>Money-back guarantee.<a href=''>Maybe</a></p>
        </div>

        <div className='priceModel'>
          <h3>$64</h3>
          <p>every day(unfortunately)</p>
          <button>Find a travel buddy</button>
        </div>
        <ul className='priceList'>
          <li>Custom dailies with navigation</li>
          <li>Unlimited communication with Travel Buddy</li>
          <li>Buddy is 100% vaccinated.</li>
          <li>All meals are paid for.</li>
        </ul>
      </div>

      <div className='destTitle'>
        <p>Plan your next getaway!</p>
        <h1>Where to?</h1>
      </div>
      <div id='destinations' className='destContainer'>
        {destination}
      </div>
    </section>
  )

}
