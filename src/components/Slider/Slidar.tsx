import React, { useState, FC, useRef, useEffect } from 'react'
import s from './Slider.module.css';
import { Timer } from './setTimeout'

import Slider_Item from './Slider-Item/Slider-Item'

import img_1 from "../../img/slider_home_1.png"
import img_2 from "../../img/slider_home_2.png"
import img_3 from "../../img/slider_home_3.png"
import Block_Stop from './Block-Stop/Block-Stop'


interface ILineSlider {
  id: number,
  img: string,
  title: string,
  text: string,
  anchor: string | number
}
interface ISlider {
  myInterval: () => any
}



const Slider: FC<ISlider> = () => {

  const [imgSlider, setImgSlider] = useState<ILineSlider[]>([
    { id: 1, img: img_1, title: 'Ноовый Renge Rover', text: 'непревзойдённая роскошь и совершенсво', anchor: 1 },
    { id: 2, img: img_2, title: 'Lend Rover Defender', text: 'способен на многое. теперь доступен в вариации defender 130', anchor: 2 },
    { id: 3, img: img_3, title: 'Lend Rover Defender', text: 'способен на многое. теперь доступен в вариации defender 130', anchor: 3 },

  ]);

  const [toogleClass, setToggleClass] = useState(false)
  let [offset, setOffset] = useState(0);

  function Timer() {
    if (offset >= -300) {
      setOffset(offset += -100)
    }
    if (offset === -300) {
      setOffset(0);
    }
  }


  const timer = setTimeout(Timer, 3000)

  const moveNext = () => {
    setOffset(offset += -100)
    clearTimeout(timer)
  }
  const movePrev = () => {
    setOffset(offset += 100)
    clearTimeout(timer)
  }

  return (
    <div className={s.wrapper}>
      <ul className={s.slider_line} style={{
        left: `${offset}%`
      }}>

        {imgSlider.map(elem =>
          <li key={elem.id}>
            <Slider_Item {...elem} />
          </li>
        )}
      </ul>

      <div className={offset === -200 ? '' : s.next}
        onClick={moveNext}></div>

      <div className={offset === 0 ? '' : s.prev}
        onClick={movePrev}></div>

      <Block_Stop offset={offset} setOffset={setOffset} timer={timer} switchOff={function (): void {
        throw new Error('Function not implemented.');
      }} />
    </div>
  )
}

export default Slider


function setInter(setInter: any) {
  throw new Error('Function not implemented.')
}

function timer(timer: any) {
  throw new Error('Function not implemented.');
}

function setElem(arg0: number) {
  throw new Error('Function not implemented.');
}

