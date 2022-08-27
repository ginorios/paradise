
import React from 'react'

export default function Canada() {
  return (
    <div className='countryCont'>
      <div className='countryDesc'>
        <h2>Canada</h2>
        <h3>Food</h3>
        <p>Canadian cuisine can be more or less described as a ‘custom upgrade’ off other dishes from different countries. As former Canadian Prime Minister, Joe Clark, puts it, ‘Canada has a cuisine of cuisines.’ With the many distinct immigrant groups, English, Scottish, French, & Asian, just to clarify, Canadian Cuisine became a full-on cultivation of flavorful masterpieces.</p>
        <h3>Scenery</h3>
        <p>When it comes to having misty waterfalls or the maple forests, Canada becomes a natural haven of wonders. The mysterious aura that Yukon presents with its nightly Aurora, gives a memorable ambiance. As intimidating as the landscapes, on Baffin Island in Nunavut, can be,  it would give you a sense of further exploration on the area.</p>
        <h3>Art Culture</h3>
        <p>Similar to cuisine, many immigrant groups have traveled & settled in Canada. Thus, by influence, has had an effect on the Arts within. There are a bountiful amounts of art institutions, galleries & museums located in Vancouver, British Columbia & Toronto, to name a few.</p>
      </div>

      <div className='countryActivities'>
        <h2 className='restaurants'>Restaurants:</h2>
        <h3 className='longTitle'>Reuben's Restaurant Delicatessen</h3>
        <ul>
          <h4>Address: </h4><li>888 Saint-Catherine St W, Montreal, Quebec H3B 1E2, Canada</li>
          <h4>Phone: </h4><li>+1 514-861-1255</li>
          <h4>Website: </h4><li><a href='https://reubens.ca/accueil' target='_blank'>reubens.ca</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Wednesday - Saturday: 12 - 9PM</li>
          </ul>
        </ul>
        
        <h3>Antoinette's Restaurant</h3>
        <ul>
          <h4>Address: </h4><li>4121 4 Ave, Whitehorse, YT Y1A 1H7, Canada</li>
          <h4>Phone: </h4><li>+1 867-668-3505</li>
          <h4>Website: </h4><li><a href='https://www.antoinettesrestaurant.com/' target='_blank'>antoinettesrestaurant.com</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Monday - Saturday: 3:30 - 8PM</li>
            <li>Sunday: 9:30AM - 2PM</li>
          </ul>
        </ul>

        <h2 className='attractions'>Attractions:</h2>
        <h3>Museum of Illusions</h3>
        <ul>
          <h4>Address: </h4><li>132 Front St E, Toronto, ON M5A 1E2, Canada</li>
          <h4>Phone: </h4><li>+1 416-889-2285</li>
          <h4>Website: </h4><li><a href='http://www.museumofillusions.ca/' target='_blank'>museumofillusions.ca</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Monday - Sunday: 10AM - 8PM</li>
          </ul>
        </ul>
        
        <h3 className='longTitle'>Barkerville Historic Town & Park</h3>
        <ul>
          <h4>Address: </h4><li>14301 BC-26, Barkerville, BC V0K 1B0, Canada</li>
          <h4>Phone: </h4><li>+1 (888) 994-3332</li>
          <h4>Website: </h4><li><a href='http://www.barkerville.ca/?utm_source=google&utm_medium=organic&utm_campaign=GMB' target='_blank'>barkerville.ca</a></li>
          <h4>Hours:</h4>
          <ul>
            <li>Monday - Sunday: 9AM - 5PM</li>
          </ul>
        </ul>

      </div>
    </div>
  )
}
