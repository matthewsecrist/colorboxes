import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { removeBox, addBox } from '../actions'

import { AddToQueue, RemoveFromQueue } from 'styled-icons/material'

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
`

class MenuBar extends Component {
  render () {
    return (
      <Bar>
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
      </Bar>
    )
  }
}

MenuBar.propTypes = {
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
)(MenuBar)
