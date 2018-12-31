import { ADD_BOX } from './types'

export function addBoxAction (boxes) {
  return { type: ADD_BOX, payload: [...boxes, newBox()] }
}

const newBox = () => {
  return {
    color: '#ffffff',
    clicked: false
  }
}
