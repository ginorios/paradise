
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollTop(props) {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return <>{props.children}</>
}
