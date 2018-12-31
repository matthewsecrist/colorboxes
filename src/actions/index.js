export const CHANGE_COLORS = 'CHANGE_COLORS'
export const CLICK_COLOR = 'CLICK_COLOR'
export const ADD_BOX = 'ADD_BOX'
export const REMOVE_BOX = 'REMOVE_BOX'

export function clickColorAction (index) {
  return { type: CLICK_COLOR, index: index }
}

export const changeColorsAction = () => ({ type: CHANGE_COLORS })

export const removeBoxAction = () => ({ type: REMOVE_BOX })

export const addBoxAction = () => ({ type: ADD_BOX })
