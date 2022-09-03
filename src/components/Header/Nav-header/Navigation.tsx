import React from 'react'
import n from './Navigation.module.css'

const Navigation = () => {
  return (
    <ul className={n.block}>
      <li className={n.b1}>АВТОМОБИЛИ</li>
      <li className={n.b2}>ВЛАДЕЛЬЦАМ</li>
      <li className={n.b3}>О БРЕНДЕ</li>
    </ul>
  )
}

export default Navigation