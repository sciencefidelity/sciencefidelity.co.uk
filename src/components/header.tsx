import React from 'react'

import '../scss/header.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>Ball</li>
          <li>Coin</li>
          <li className="active">Flame</li>
          <li>Scissors</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header
