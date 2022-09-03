import React, { FC } from 'react'
import BlockCnp from './Block-cnp/Block-cnp'
import si from './Slider-Item.module.css'


interface IItemS {
  img: string,
  title?: string,
  text?: string,
  anchor: string | number
}


const Slider_Item: FC<IItemS> = ({ img, title, text, anchor }) => {

    return (
      <div className={si.block_Img}>
        <img src={img} style={{ width: '100vw' }} alt="картинка" />

        <BlockCnp title={title} text={text} />
      </div>
    )
}

export default Slider_Item