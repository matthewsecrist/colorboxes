import React, { Component } from 'react'

import PropTypes from 'prop-types'

import ColorBox from './ColorBox'
import { connect } from 'react-redux'

import { AppContainer, AppTitle, Attribution, Container } from './components'

import { changeColorsAction } from './actions/changeColors'
import { clickColorAction } from './actions/clickColor'

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

  changeColor = e => {
    e.preventDefault()
    const { boxes } = this.props
    this.props.handleKeyDown(boxes)
  }

  render () {
    return (
      <AppContainer>
        <AppTitle>Color Boxes</AppTitle>
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
  boxes: PropTypes.array
}

const mapStateToProps = state => ({ boxes: state.boxes })
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleKeyDown: boxes => {
      dispatch(changeColorsAction(boxes))
    },
    handleClick: (boxes, i) => {
      dispatch(clickColorAction(boxes, i))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
