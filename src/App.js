import React, { Component } from 'react'
import { AppContainer, AppTitle, Attribution } from './components'

import ColorBoxes from './containers/ColorBoxes'
import MenuBar from './containers/MenuBar'

class App extends Component {
  render () {
    return (
      <AppContainer>
        <AppTitle>Color Boxes</AppTitle>
        <p>
          Hit the spacebar to change colors. Click a color to stop it from
          changing.
        </p>
        <MenuBar />
        <ColorBoxes />
        <Attribution>
          Created by <a href='http://www.matthewsecrist.net'>Matthew Secrist</a>
        </Attribution>
      </AppContainer>
    )
  }
}

export default App
