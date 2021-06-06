import React from 'react'

import Header from './components/header'
import './scss/App.scss'
import './videos/coin.mp4'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <video>
          <source type="video/mp4" src="./videos/coin.mp4" />
        </video>
      </main>
    </div>
  );
}

export default App
