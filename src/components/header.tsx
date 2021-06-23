import React, { FC } from 'react'
import PropTypes from 'prop-types'

import '../scss/header.scss'

interface Props {
  changeVideo: (active: number) => void
}

const Header:FC<Props> = ({ changeVideo }) => {

  return (
    <header>
      <nav>
        <ul className="menu">
          <li className="menu__item" onClick={() => changeVideo(0)}>🏓</li>
          <li className="menu__item" onClick={() => changeVideo(1)}>🪙</li>
          <li className="menu__item" onClick={() => changeVideo(2)}>🔥</li>
          <li className="menu__item" onClick={() => changeVideo(3)}>✂️</li>
          <li className="menu__item" onClick={() => changeVideo(4)}>🙂</li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  changeVideo: PropTypes.func.isRequired
}

export default Header
