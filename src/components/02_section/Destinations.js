
import React from 'react'
import { Link } from 'react-router-dom'

import styles from '../style.js'

export default function Destinations(props) {
  return (
    <div className='destGroup'>
      <div className='destinations'>
        <img className='destImg' src={props.img}/>
        <p><Link to={props.link} style={
          {
            ...styles,
            color: 'rgb(128, 128, 128)',
            fontSize: '2rem',
            lineHeight: '0'
          }

        }>{props.p}</Link></p>
      </div>
    </div>
  )
}
