import { RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE } from '../components/colors'
import { CHANGE_COLORS, CLICK_COLOR } from '../actions/types'

const initialState = {
  boxes: [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE]
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLORS:
      return Object.assign({}, state, {
        boxes: action.payload
      })
    case CLICK_COLOR:
      return Object.assign({}, state, { boxes: action.payload })

    default:
      return state
  }
}

export default rootReducer
