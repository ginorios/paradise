
import React from 'react'
import { Link } from 'react-router-dom'

export default function Assets(props) {

  return (
    <div className='assets'>
      <p className=''><a href={props.link} target='_blank'>{props.desc}</a></p>
    </div>
  )
}
