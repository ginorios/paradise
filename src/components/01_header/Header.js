
import React from 'react'

import Nav from './Nav'
import homeImg from '../../img/homepageImg.jpeg'

export default function Header() {


  return (
    <header>
      <img className='imageBackground' src={homeImg} />

      <Nav />
      <div className='heading'>
        <h1>Welcome</h1>
        <p>This is Paradise!</p>
        <button className='headButton'>Learn more!</button>
      </div>
    </header>
  )
}

  
