import React, { FC, useEffect, useState } from 'react'
import bs from './Block-Stop.module.css'
import { BsPauseFill } from "react-icons/bs";
import { BsCaretRight } from "react-icons/bs";

interface IStop {
  offset: number,
  setOffset: any,
  switchOff: () => void,
  timer: any,
  Timer: () => void,
  play: boolean,
  setPlay: any
}

const Block_Stop: FC<IStop> = ({ play, setPlay, timer, Timer }) => {


  const tooglePlay = () => {
    if (!play) {
      setPlay(true)
      clearTimeout(timer)
    } else {
      setPlay(false)
      setTimeout(Timer, 10000)
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

