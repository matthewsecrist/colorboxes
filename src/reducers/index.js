import { RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE } from '../components/colors'
import { CHANGE_COLORS, CLICK_COLOR, ADD_BOX, REMOVE_BOX } from '../actions'

const initialState = {
  boxes: [RED, ORANGE, YELLOW, GREEN, BLUE, PURPLE]
}

function rootReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLORS:
      return {
        ...state,
        boxes: state.boxes.map(box => {
          if (!box.clicked) {
            return { ...box, color: generateColor() }
          }
          return box
        })
      }
    case CLICK_COLOR:
      return {
        ...state,
        boxes: state.boxes.map((box, i) => {
          if (i === action.index) {
            return { ...box, clicked: !box.clicked }
          }
          return box
        })
      }

    case ADD_BOX:
      return {
        ...state,
        boxes: [
          ...state.boxes,
          {
            clicked: false,
            color: generateColor()
          }
        ]
      }
    case REMOVE_BOX:
      return { ...state, boxes: state.boxes.slice(0, -1) }
    default:
      return state
  }
}

export default rootReducer

const generateColor = () =>
  '#' + Math.floor(Math.random() * 16777215).toString(16)
