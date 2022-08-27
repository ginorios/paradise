
import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style.js'

export default function Footer() {


  return (
    <footer>
      <div className='footer'>
        <p><Link to='/assets' style={
          {
            ...styles,
            color: 'rgb(255, 255, 255)',
            fontSize: '1.5rem',
            lineHeight: '2.5rem'
          }
        }>Assets</Link></p>
        <p>Copyright &#169; 2022</p>
      </div>
    </footer>
  )
}
