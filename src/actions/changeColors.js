import { CHANGE_COLORS } from './types'

export function changeColorsAction (boxes) {
  return { type: CHANGE_COLORS, payload: changeColors(boxes) }
}

const changeColors = boxes => {
  return boxes.map(box => generateColor(box))
}

const generateColor = box => {
  if (!box.clicked) {
    return {
      ...box,
      color: '#' + Math.floor(Math.random() * 16777215).toString(16)
    }
  } else {
    return box
  }
}
