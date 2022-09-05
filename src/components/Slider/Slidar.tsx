import React, { useState, FC, useRef, useEffect } from 'react'
import s from './Slider.module.css';

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
}
interface ISlider {
  myInterval: () => any
}



const Slider: FC<ISlider> = () => {

  const [imgSlider, setImgSlider] = useState<ILineSlider[]>([
    { id: 1, img: img_1, title: 'Ноовый Renge Rover', text: 'непревзойдённая роскошь и совершенсво' },
    { id: 2, img: img_2, title: 'Lend Rover Defender', text: 'способен на многое. теперь доступен в вариации defender 130' },
    { id: 3, img: img_3, title: 'Lend Rover Defender', text: 'способен на многое. теперь доступен в вариации defender 130' },

  ]);

  let [widthOffset, setWidthOffset] = useState(0)
  let [offset, setOffset] = useState(widthOffset);
  const [play, setPlay] = useState(false);

  function Timer() {
    if (offset >= -200) {
      setOffset(offset => {
        return offset -= 100
      })
      console.log(offset)
    }
    if (offset === -200) {
      setOffset(0);
    }
  }

  const timer = setTimeout(Timer, 10000)

  const moveNext = () => {
    setWidthOffset((widthOffset) => {
      const newWidth = widthOffset - 100
      return newWidth
    })

  }
  const movePrev = () => {
    setWidthOffset((widthOffset) => {
      const newWidth = widthOffset + 100
      return newWidth
    })
  }

  return (
    <div className={s.wrapper}>

      {!play ?
        <ul className={s.slider_line} style={{
          left: `${offset}%`
        }}>
          {imgSlider.map(elem =>
            <li key={elem.id}>
              <Slider_Item img={elem.img} title={elem.title} text={elem.text} />
            </li>
          )}
        </ul>
        :
        <div>
          <ul className={s.slider_line} style={{
            left: `${widthOffset}%`
          }}>
            {imgSlider.map(elem =>
              <li key={elem.id}>
                <Slider_Item img={elem.img} title={elem.title} text={elem.text} />
              </li>
            )}

          </ul>

          <div className={widthOffset === -200 ? '' : s.next}
            onClick={moveNext}></div>

          <div className={widthOffset === 0 ? '' : s.prev}
            onClick={movePrev}></div>
        </div>
      }

      <Block_Stop offset={offset} setOffset={setOffset} Timer={Timer} play={play} setPlay={setPlay} timer={timer} switchOff={function (): void {
        throw new Error('Function not implemented.');
      }} />
    </div>
  )
}

export default Slider

