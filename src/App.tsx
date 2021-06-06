import React from 'react'

import Header from './components/header'
import './scss/App.scss'

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <p>this is the main content</p>
      </main>
    </div>
  );
}

export default App
