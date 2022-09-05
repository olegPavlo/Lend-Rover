import React, { FC, useEffect, useState } from 'react'
import app from './App.module.css'


import { IUser } from '../types/types'
import Header from '../components/Header/Header'
import Home from '../page/Home/Home'

const App = () => {

  return (
    <div className={app.wrapper}>
      <Header />
      <Home/>
    </div>
  )
}

export default App