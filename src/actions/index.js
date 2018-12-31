export const CHANGE_COLORS = 'CHANGE_COLORS'
export const CLICK_COLOR = 'CLICK_COLOR'
export const ADD_BOX = 'ADD_BOX'
export const REMOVE_BOX = 'REMOVE_BOX'

export function clickColor (index) {
  return { type: CLICK_COLOR, index: index }
}

export const changeColors = () => ({ type: CHANGE_COLORS })

export const removeBox = () => ({ type: REMOVE_BOX })

export const addBox = () => ({ type: ADD_BOX })
