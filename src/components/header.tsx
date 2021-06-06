import React from 'react'

import '../scss/header.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Ball</li>
          <li className="active">Coin</li>
          <li>Flame</li>
          <li>Scissors</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
