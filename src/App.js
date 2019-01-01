import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { removeBox, addBox } from './actions'

import { AddToQueue, RemoveFromQueue } from 'styled-icons/material'
import { AppContainer, AppTitle, Attribution, Button } from './components'
import ColorBoxes from './containers/ColorBoxes'

class App extends Component {
  render () {
    return (
      <AppContainer>
        <AppTitle>Color Boxes</AppTitle>
        <div>
          <Button
            onClick={() => this.props.addBox()}
            disabled={this.props.boxes.length >= 10}
          >
            <AddToQueue size='48' />
          </Button>
          <Button
            onClick={() => this.props.removeBox()}
            disabled={this.props.boxes.length <= 1}
          >
            <RemoveFromQueue size='48' />
          </Button>
        </div>
        <p>
          Hit the spacebar to change colors. Click a color to stop it from
          changing.
        </p>
        <ColorBoxes />
        <Attribution>
          Created by <a href='http://www.matthewsecrist.net'>Matthew Secrist</a>
        </Attribution>
      </AppContainer>
    )
  }
}

App.propTypes = {
  addBox: PropTypes.func,
  removeBox: PropTypes.func,
  boxes: PropTypes.array
}

const mapStateToProps = state => ({
  boxes: state.boxes
})
const mapDispatchToProps = {
  addBox,
  removeBox
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
