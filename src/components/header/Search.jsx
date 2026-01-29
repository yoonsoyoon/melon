import React, { useEffect, useState } from 'react'
import Main from '../section/Main'
import { useParams } from 'react-router-dom'
import img_finder from "../../assets/icon/imgi_70_btn_gnb_finder@3x.png"

const Search = () => {
  return (
    <div className='search__inner'>
        <label>
            <input type='text'/>
            <img src={img_finder} alt='검색' className='search-icon'></img>
        </label>
    </div>
  )
}

export default Search