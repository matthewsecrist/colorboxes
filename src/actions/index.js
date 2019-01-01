export const CHANGE_COLORS = 'CHANGE_COLORS'
export const CLICK_COLOR = 'CLICK_COLOR'
export const ADD_BOX = 'ADD_BOX'
export const REMOVE_BOX = 'REMOVE_BOX'

export function clickColor (index) {
  return { type: CLICK_COLOR, index: index }
}

export const changeColors = (boxes, { red, green, blue }) => ({
  type: CHANGE_COLORS,
  colors: boxes.map(() => generateColor(red, green, blue))
})

export const removeBox = () => ({ type: REMOVE_BOX })

export const addBox = () => ({ type: ADD_BOX, color: generateColor() })

const generateColor = (redAdd = 0, greenAdd = 0, blueAdd = 0) => {
  let [r, g, b] = [redAdd, greenAdd, blueAdd]
    .map(color => Math.floor(Math.random() * 256) + color)
    .map(c => (c >= 255 ? 255 : c))
    .map(c => (c <= 0 ? 0 : c))

  return `rgb(${r}, ${g}, ${b})`
}
