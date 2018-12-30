import React from 'react'
import PropTypes from 'prop-types'
import { Box, ColorName } from './components'

const ColorBox = ({ color, clicked, handleClick }) => {
  return (
    <Box style={{ background: color }} onClick={handleClick}>
      <ColorName clicked={clicked}>{color}</ColorName>
    </Box>
  )
}

ColorBox.propTypes = {
  color: PropTypes.string,
  clicked: PropTypes.bool,
  handleClick: PropTypes.func
}

export default ColorBox
