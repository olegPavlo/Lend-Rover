import React from 'react'
import Slider from '../../components/Slider/Slidar'
import h from './Home.module.css'



const Home = () => {
  return (
    <div className={h.wrapper}>
      <Slider myInterval={function () {
        throw new Error('Function not implemented.')
      } } />

    </div>
  )
}

export default Home