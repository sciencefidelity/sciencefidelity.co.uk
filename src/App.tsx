import React, { FC, useState } from 'react'
import Header from './components/header'
import Animation from './components/animation'
import './scss/App.scss'

const App:FC = () => {

  const dataId:string[] = ['ball', 'coin', 'flame', 'scissors', 'bounce']
  const dataCount:number[] = [830, 602, 600, 337, 260]

  const [active, setActive] = useState(0)

  let video = dataId[active]
  let frames = dataCount[active]

  return (
    <div className="App">
      <Header
        changeVideo={(active) => setActive(active)}
      />
      <main>
        <Animation
          video={video}
          frames={frames}
        />
      </main>
    </div>
  )
}

export default App
