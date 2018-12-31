import React, { Component } from 'react'

import PropTypes from 'prop-types'

import ColorBox from './ColorBox'
import { connect } from 'react-redux'

import { AddToQueue, RemoveFromQueue } from 'styled-icons/material'

import { AppContainer, AppTitle, Attribution, Container } from './components'

import { changeColorsAction } from './actions/changeColors'
import { clickColorAction } from './actions/clickColor'
import { addBoxAction } from './actions/addBox'
import { removeBoxAction } from './actions/removeBox'

class App extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', e => this.changeColor(e))
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', e => this.changeColor(e))
  }

  handleClick = (e, i) => {
    const { boxes } = this.props
    this.props.handleClick(boxes, i)
  }

  handleAdd = () => {
    const { boxes } = this.props
    if (boxes.length < 10) {
      this.props.handleAddBox(boxes)
    }
  }

  handleRemove = () => {
    const { boxes } = this.props
    if (boxes.length >= 2) {
      this.props.handleRemoveBox(boxes)
    }
  }

  changeColor = e => {
    e.preventDefault()
    if (e.keyCode === 32) {
      const { boxes } = this.props
      this.props.handleKeyDown(boxes)
    }
  }

  render () {
    return (
      <AppContainer>
        <AppTitle>Color Boxes</AppTitle>
        <div>
          <AddToQueue
            size='48'
            onClick={this.handleAdd}
            color={this.props.boxes.length < 10 ? '#ffffff' : '#000000'}
          />
          <RemoveFromQueue
            size='48'
            onClick={this.handleRemove}
            color={this.props.boxes.length >= 2 ? '#ffffff' : '#000000'}
          />
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
              handleClick={e => this.handleClick(e, i)}
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
  handleClick: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handleAddBox: PropTypes.func,
  handleRemoveBox: PropTypes.func,
  boxes: PropTypes.array
}

const mapStateToProps = state => ({ boxes: state.boxes })
const mapDispatchToProps = dispatch => {
  return {
    handleKeyDown: boxes => {
      dispatch(changeColorsAction(boxes))
    },
    handleClick: (boxes, i) => {
      dispatch(clickColorAction(boxes, i))
    },
    handleAddBox: boxes => {
      dispatch(addBoxAction(boxes))
    },
    handleRemoveBox: boxes => {
      dispatch(removeBoxAction(boxes))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
