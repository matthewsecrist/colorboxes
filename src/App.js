import React, { Component } from 'react'

import PropTypes from 'prop-types'

import ColorBox from './ColorBox'
import { connect } from 'react-redux'

import { AddToQueue, RemoveFromQueue } from 'styled-icons/material'

import {
  AppContainer,
  AppTitle,
  Attribution,
  Container,
  Button
} from './components'

import { changeColors, clickColor, removeBox, addBox } from './actions'

class App extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', e => this.changeColor(e))
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', e => this.changeColor(e))
  }

  changeColor = e => {
    e.preventDefault()
    if (e.keyCode === 32) {
      const { boxes } = this.props
      this.props.changeColors(boxes)
    }
  }

  render () {
    const { boxes } = this.props

    return (
      <AppContainer>
        <AppTitle>Color Boxes</AppTitle>
        <div>
          <Button
            onClick={() => this.props.addBox(boxes)}
            disabled={this.props.boxes.length >= 10}
          >
            <AddToQueue size='48' />
          </Button>
          <Button
            onClick={() => this.props.removeBox(boxes)}
            disabled={this.props.boxes.length <= 1}
          >
            <RemoveFromQueue size='48' />
          </Button>
        </div>
        <p>
          Hit the spacebar to change colors. Click a color to stop it from
          changing.
        </p>
        <Container>
          {this.props.boxes.map((color, i) => (
            <ColorBox
              key={i}
              color={color.color}
              clicked={color.clicked}
              handleClick={() => this.props.clickColor(i)}
            />
          ))}
        </Container>
        <Attribution>
          Created by <a href='http://www.matthewsecrist.net'>Matthew Secrist</a>
        </Attribution>
      </AppContainer>
    )
  }
}

App.propTypes = {
  changeColors: PropTypes.func,
  clickColor: PropTypes.func,
  addBox: PropTypes.func,
  removeBox: PropTypes.func,
  boxes: PropTypes.array
}

const mapStateToProps = state => ({ boxes: state.boxes })
const mapDispatchToProps = {
  changeColors,
  clickColor,
  addBox,
  removeBox
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
