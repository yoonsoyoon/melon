import React from 'react'

import Top from '../header/Top'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import Search from '../header/Search'
import {headerMenus} from 'C:/Users/ds/Desktop/melon/src/data/header.js'


const Header = () => {



  return (
    <header id='header' role='banner'>
        <Top/>
        <div className='logo-search'>
          <Logo/>
          <Search/>        
        </div>
        <Menu items={headerMenus}/>
    </header>
  )
}

export default Header