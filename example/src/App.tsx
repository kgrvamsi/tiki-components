import React from 'react'

import { TikiComponent, SignIn } from 'tiki-components'
import 'tiki-components/dist/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <SignIn framework='bootstrap' />
      <TikiComponent text='Create React Library Example 😄' />
    </div>
  )
}

export default App
