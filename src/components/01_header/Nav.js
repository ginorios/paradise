
import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

import styles from '../style.js'

export default function Nav() {

  //Menu Toggle
  let [toggle, setToggle] = useState(true)

  function fToggle() {
    setToggle(!toggle)
  }

  return (
    <>
      <nav>
        <div onClick={fToggle} className={toggle ? 'menu' : 'close'}>
          <div className='bar top'></div>
          <div className='bar mid'></div>
          <div className='bar bot'></div>
        </div>

        <ul className={toggle ? 'navClose' : 'navOpen'}>
          <li><Link onClick={fToggle} style={styles} to='/'>Home</Link></li>
          <li><Link onClick={fToggle} style={styles} to='/assets'>Assets</Link></li>
        </ul>
      </nav>
      <Outlet />
    </>

  )
}
