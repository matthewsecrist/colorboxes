import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const Box = styled.div`
  height: 80vh;
  width: 16%;
`

const ColorBox = ({ color, handleClick }) => {
  return (
    <Box style={{ background: color }} onClick={handleClick}>
      <p>{color}</p>
    </Box>
  )
}

ColorBox.propTypes = {
  color: PropTypes.string,
  handleClick: PropTypes.func
}

export default ColorBox
