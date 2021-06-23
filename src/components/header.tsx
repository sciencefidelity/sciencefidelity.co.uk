import React, { FC } from 'react'

import '../scss/header.scss'

interface Props {
  changeVideo: (active: number) => void
}

const Header:FC<Props> = (props) => {

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
