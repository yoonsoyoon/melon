import React from 'react'

const Top = () => {
  return (
    <div className="top">
      <nav className="top__nav">
        <ul className="top__list">
          <li className="top__item"><a href="/ticket">멜론티켓</a></li>
          <li className="top__item"><a href="/purchase">이용권구매</a></li>
          <li className="top__item"><a href="/benefit">멜론혜택</a></li>
          <li className="top__item"><a href="/event">이벤트</a></li>
          <li className="top__item"><a href="/notice">공지사항</a></li>
        </ul>
      </nav>
    </div>

  )
}

export default Top