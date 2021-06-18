import React from 'react'

import '../scss/header.scss'

const Header = (props:any) => {

  return (
    <header>
      <nav>
        <ul className="menu">
          <li className="menu__item" onClick={() => props.changeVideo(0)}>🏓</li>
          <li className="menu__item" onClick={() => props.changeVideo(1)}>🪙</li>
          <li className="menu__item" onClick={() => props.changeVideo(2)}>🔥</li>
          <li className="menu__item" onClick={() => props.changeVideo(3)}>✂️</li>
          <li className="menu__item" onClick={() => props.changeVideo(4)}>🙂</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
