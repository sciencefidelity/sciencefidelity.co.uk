import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Header from './components/header'
import './scss/App.scss'
import Animation from './components/animation'

const App = () => {

  const dataId:string[] = ['ball', 'coin', 'flame', 'scissors', 'bounce']
  const dataCount:number[] = [830, 602, 600, 337, 260]

  const [active, setActive] = useState(0)

  let video = dataId[active]
  let frames = dataCount[active]

  return (
    <div className="App">
      <Header
        changeVideo={(active:any) => setActive(active)}
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

App.propTypes = {
  dataId: PropTypes.arrayOf(PropTypes.string),
  dataCount: PropTypes.arrayOf(PropTypes.number),
  video: PropTypes.string,
  frames: PropTypes.number
}

export default App
