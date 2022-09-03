import React from 'react'
import h from './Header.module.css'
import Logo from './Logo-header/Logo'
import Navigation from './Nav-header/Navigation'
import Search from './search-nav/Search'

const Header = () => {
  return (
    <div className={h.wrapper}>
      <div className={h.blockLeft}>
        <Logo />
        <Navigation />
      </div>

      <Search />
    </div>
  )
}

export default Header