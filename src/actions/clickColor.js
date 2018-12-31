import { CLICK_COLOR } from './types'

export function clickColorAction (boxes, index) {
  return { type: CLICK_COLOR, payload: toggleClicked(boxes, index) }
}

const toggleClicked = (boxes, index) => {
  return boxes.map((box, i) => {
    if (i === index) {
      return { ...box, clicked: !box.clicked }
    } else {
      return box
    }
  })
}
