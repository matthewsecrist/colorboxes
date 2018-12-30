import React, { Component } from 'react'
import ColorBox from './ColorBox'
import Container from './Container'
import { RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE } from './colors'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      boxes: [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE]
    }
  }

  componentDidMount = () => {
    window.addEventListener('keydown', e => this.changeColor(e))
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', e => this.changeColor(e))
  }

  handleClick = (index, e) => {
    let boxes = this.state.boxes.map((box, i) => {
      if (i === index) {
        return { ...box, clicked: !box.clicked }
      } else {
        return box
      }
    })
    this.setState({ boxes: boxes })
  }

  changeColor = e => {
    e.preventDefault()
    if (e.keyCode === 32) {
      let boxes = this.state.boxes.map(box => this.generateColor(box))
      this.setState({ boxes: boxes })
    }
  }

  generateColor (box) {
    if (!box.clicked) {
      return {
        ...box,
        color: '#' + Math.floor(Math.random() * 16777215).toString(16)
      }
    } else {
      return box
    }
  }

  render () {
    return (
      <div className='App'>
        <Container>
          {this.state.boxes.map((color, i) => (
            <ColorBox
              key={i}
              color={color.color}
              handleClick={e => this.handleClick(i, e)}
            />
          ))}
        </Container>
      </div>
    )
  }
}

export default App
