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
    red: verifyColorsWithinRange(colors.red, red),
    green: verifyColorsWithinRange(colors.green, green),
    blue: verifyColorsWithinRange(colors.blue, blue)
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
  let { red, green, blue } = addColors
  let [r, g, b] = box.color
    .substring(4, box.color.length - 1)
    .replace(/ /g, '')
    .split(',')
    .map(n => Number(n))

  let newRed = verifyColorsWithinRange(r, red)
  let newGreen = verifyColorsWithinRange(g, green)
  let newBlue = verifyColorsWithinRange(b, blue)
  let newColor = `rgb(${newRed}, ${newGreen}, ${newBlue})`

  return newColor
}

const verifyColorsWithinRange = (color, newColor) => {
  console.log(`${color}, ${newColor}`)
  if (color + newColor > 255) {
    return 255
  } else if (color + newColor <= 0) {
    return 0
  } else {
    return color + newColor
  }
}
