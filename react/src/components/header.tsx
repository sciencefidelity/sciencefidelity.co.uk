import React from 'react'

import '../scss/header.scss'

const Header = () => {

  const dataId:string[] = ['ball', 'coin', 'flame', 'scissors', 'bounce']
  const dataCount:number[] = [830, 602, 600, 337, 260]

  return (
    <header>
      <nav>
        <ul className="menu">
          <li className="menu__item">🏓</li>
          <li className="menu__item">🪙</li>
          <li className="menu__item">🔥</li>
          <li className="menu__item">✂️</li>
          <li className="menu__item">🙂</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
