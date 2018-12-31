export const CHANGE_COLORS = 'CHANGE_COLORS'
export const CLICK_COLOR = 'CLICK_COLOR'
export const ADD_BOX = 'ADD_BOX'
export const REMOVE_BOX = 'REMOVE_BOX'

export function clickColor (index) {
  return { type: CLICK_COLOR, index: index }
}

export const changeColors = boxes => ({
  type: CHANGE_COLORS,
  colors: boxes.map(() => generateColor())
})

export const removeBox = () => ({ type: REMOVE_BOX })

export const addBox = () => ({ type: ADD_BOX, color: generateColor() })

const generateColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16)
