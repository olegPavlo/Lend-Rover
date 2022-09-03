import React, { FC, useEffect, useState } from 'react'
import bs from './Block-Stop.module.css'
import { BsPauseFill } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";
import { Timer } from '../setTimeout';

interface IStop {
  offset: number,
  setOffset: any,
  switchOff: () => void,
  timer: any,
}

const Block_Stop: FC<IStop> = ({ offset, setOffset, timer }) => {
  const [play, setPlay] = useState(false);

  const tooglePlay = () => {
    if (!play) {
      setPlay(true)
      clearTimeout(timer)
    } else {
      setPlay(false)

      setTimeout(() => {
        if (offset >= -300) {
          setOffset(offset += -100)
        }
        if (offset === -300) {
          setOffset(0);
        }
      }, 3000)
    }
  }

  return (
    <div className={bs.block}
      onClick={tooglePlay}
    >
      <div className={bs.cnp}>
        {play ? <BsCaretRight /> : <BsPauseFill />}
      </div>
    </div>

  )
}

export default Block_Stop


function timer(timer: any) {
  throw new Error('Function not implemented.');
}

