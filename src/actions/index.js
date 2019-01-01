export const CHANGE_COLORS = 'CHANGE_COLORS'
export const CLICK_COLOR = 'CLICK_COLOR'
export const ADD_BOX = 'ADD_BOX'
export const REMOVE_BOX = 'REMOVE_BOX'
export const ADJUST_COLORS = 'ADJUST_COLORS'

export function clickColor (index) {
  return { type: CLICK_COLOR, index: index }
}

export const changeColors = (boxes, { red, green, blue }) => ({
  type: CHANGE_COLORS,
  colors: boxes.map(() => generateColor(red, green, blue))
})

export const modifyColors = (boxes, addColors) => ({
  type: CHANGE_COLORS,
  colors: boxes.map(box => regenerateColors(box, addColors))
})

export const adjustColors = (colors, { red, green, blue }) => ({
  type: ADJUST_COLORS,
  colors: {
    red: colors.red + red,
    green: colors.green + green,
    blue: colors.blue + blue
  }
})

export const removeBox = () => ({ type: REMOVE_BOX })

export const addBox = () => ({ type: ADD_BOX, color: generateColor() })

const generateColor = (redAdd, greenAdd, blueAdd) => {
  let [r, g, b] = [redAdd, greenAdd, blueAdd]
    .map(color => Math.floor(Math.random() * 256) + color)
    .map(c => (c >= 255 ? 255 : c))
    .map(c => (c <= 0 ? 0 : c))

  return `rgb(${r}, ${g}, ${b})`
}

const regenerateColors = (box, addColors) => {
  console.log(addColors)
  let { red, green, blue } = addColors
  let [r, g, b] = box.color
    .substring(4, box.color.length - 1)
    .replace(/ /g, '')
    .split(',')
    .map(n => Number(n))

  let newRed = r + red >= 255 ? 255 : r + red

  let newGreen = g + green >= 255 ? 255 : g + green

  let newBlue = b + blue >= 255 ? 255 : b + blue

  let newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`

  return newColor
}
