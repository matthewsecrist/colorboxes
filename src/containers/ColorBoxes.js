import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ColorBox from '../components/ColorBox'

import { Container } from '../components'
import { clickColor, changeColors } from '../actions'

export class ColorBoxes extends Component {
  componentDidMount = () => {
    window.addEventListener('keydown', e => this.changeColor(e))
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', e => this.changeColor(e))
  }

  changeColor = e => {
    e.preventDefault()
    if (e.keyCode === 32) {
      const { boxes, addColors } = this.props
      this.props.changeColors(boxes, addColors)
    }
  }

  render () {
    return (
      <Container>
        {this.props.boxes.map((color, i) => (
          <ColorBox
            key={i}
            numBoxes={this.props.boxes.length}
            color={color.color}
            clicked={color.clicked}
            handleClick={() => this.props.clickColor(i)}
          />
        ))}
      </Container>
    )
  }
}

ColorBoxes.propTypes = {
  changeColors: PropTypes.func,
  clickColor: PropTypes.func,
  boxes: PropTypes.array,
  addColors: PropTypes.object
}

const mapStateToProps = state => ({
  boxes: state.boxes,
  addColors: state.addColors
})

const mapDispatchToProps = {
  clickColor,
  changeColors
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorBoxes)
