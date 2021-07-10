import React from 'react'
import { cleanup, render } from '@testing-library/react'
// import { expect } from 'chai'
import App from './App'

afterEach(cleanup)

it('renders animation component', async () => {
  const { debug } = render(
    <App />
  )

  debug()
})
