import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { removeBox, addBox, modifyColors, adjustColors } from '../actions'

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
    const { addColors } = this.props
    return (
      <Bar>
        <p>
          Red: {addColors.red}, Green {addColors.green}, Blue: {addColors.blue}
        </p>
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
  addColors: PropTypes.object,
  modifyColors: PropTypes.func,
  adjustColors: PropTypes.func
}

const mapStateToProps = state => ({
  boxes: state.boxes,
  addColors: state.addColors
})

const mapDispatchToProps = {
  addBox,
  removeBox,
  modifyColors,
  adjustColors
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuBar)
