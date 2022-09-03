import React, { FC, useState } from 'react'
import bk from './Block-cnp.module.css'
import Cnp from './cnp/Cnp'

interface IBlCn {
  title?: string,
  text?: string,
}

const BloсkCnp: FC<IBlCn> = ({ text, title}) => {

  const [opacityShow, setOpacityShow] = useState(false)

  return (
    <div className={opacityShow ? '' : bk.block}>
      <h1>{title}</h1>
      <p>{text}</p>
      <Cnp textCnp="узнать больше" />
    </div>
  )
}

export default BloсkCnp