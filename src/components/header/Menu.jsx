import React from 'react'

import {headerMenus} from 'C:/Users/ds/Desktop/melon/src/data/header.js'
import { useLocation } from 'react-router-dom'

const Menu = () => {
  const location = useLocation();
  console.log(location);

  return (
      <nav className='header__menu'>
        <ul className='menu'>
            {
              headerMenus.map((menu, key)=>(
                  <li key={key} className="menu__item">
                    <a href={menu.src}>{menu.title}</a>
                  </li>
              ))}
        </ul>
      </nav>
  )
}

export default Menu