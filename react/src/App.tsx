import React from 'react'

import Header from './components/header'
import './scss/App.scss'
import Animation from './components/animation'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Animation />
      </main>
    </div>
  );
}

export default App
