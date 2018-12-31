import { REMOVE_BOX } from './types'

export function removeBoxAction (boxes) {
  return { type: REMOVE_BOX, payload: removeBox(boxes) }
}

const removeBox = boxes => {
  return boxes.slice(0, -1)
}
