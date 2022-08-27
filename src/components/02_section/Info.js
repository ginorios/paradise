
import React from 'react'

export default function Info(props) {

  return (
    <div className='info'>
      <img className='infoIcons' src={props.img}/>
      <div className='infoDesc'>
        <h1>{props.h1}</h1>
        <p>{props.p}</p>
      </div>
    </div>
  )
}
