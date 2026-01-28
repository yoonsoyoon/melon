import React from 'react'

import img1 from '../../assets/icon/imgi_67_img_melon_logo@3x.png'

const Logo = () => {
  return (
    <h1 className='header_logo'>
        <a href='/'>
            <em aria-hidden='true'></em>
            <img src={img1}> 
            </img>
           
        </a>
    </h1>
  )
}

export default Logo