import React from 'react'

import Header from './components/header'
import './scss/App.scss'
import Video from './components/video'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Video />
      </main>
    </div>
  );
}

export default App
