import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  removeBox,
  addBox,
  modifyColors,
  adjustColors,
  reset,
  toggleHex
} from '../actions'

const Bar = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  &:disabled {
    color: black;
  }
  &:hover {
    background: white;
    color: black;
  }
`

class MenuBar extends Component {
  handleClick = adjustedColors => {
    const { boxes, addColors } = this.props
    this.props.adjustColors(addColors, adjustedColors)
    this.props.modifyColors(boxes, adjustedColors)
  }

  render () {
    return (
      <Bar>
        <Button onClick={() => this.props.toggleHex()}>
          {this.props.hex ? 'Use RGB' : 'Use Hex'}
        </Button>
        <Button onClick={() => this.props.reset()}>Reset</Button>
        <Button
          onClick={() => this.props.addBox()}
          disabled={this.props.boxes.length >= 10}
        >
          Add Box
        </Button>
        <Button
          onClick={() => this.props.removeBox()}
          disabled={this.props.boxes.length <= 1}
        >
          Remove Box
        </Button>
        <Button
          onClick={() => this.handleClick({ red: 10, green: 0, blue: 0 })}
        >
          Add Red
        </Button>
        <Button
          onClick={() => this.handleClick({ red: -10, green: 0, blue: 0 })}
        >
          Less Red
        </Button>
        <Button
          onClick={() => this.handleClick({ red: 0, green: 10, blue: 0 })}
        >
          Add Green
        </Button>
        <Button
          onClick={() => this.handleClick({ red: 0, green: -10, blue: 0 })}
        >
          Less Green
        </Button>
        <Button
          onClick={() => this.handleClick({ red: 0, green: 0, blue: 10 })}
        >
          Add Blue
        </Button>
        <Button
          onClick={() => this.handleClick({ red: 0, green: 0, blue: -10 })}
        >
          Less Blue
        </Button>
        <Button
          onClick={() => this.handleClick({ red: 10, green: 10, blue: 10 })}
        >
          Add White
        </Button>
        <Button
          onClick={() => this.handleClick({ red: -10, green: -10, blue: -10 })}
        >
          Add Black
        </Button>
      </Bar>
    )
  }
}

MenuBar.propTypes = {
  addBox: PropTypes.func,
  removeBox: PropTypes.func,
  boxes: PropTypes.array,
  hex: PropTypes.bool,
  addColors: PropTypes.object,
  modifyColors: PropTypes.func,
  adjustColors: PropTypes.func,
  toggleHex: PropTypes.func,
  reset: PropTypes.func
}

const mapStateToProps = state => ({
  boxes: state.boxes,
  addColors: state.addColors,
  hex: state.hex
})

const mapDispatchToProps = {
  addBox,
  removeBox,
  modifyColors,
  adjustColors,
  toggleHex,
  reset
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)
