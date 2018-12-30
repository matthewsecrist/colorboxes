import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
`

export const Container = styled.div`
  height: 50vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  align-content: center;
  justify-content: center;
`

export const AppTitle = styled.h1`
  font-size: 5em;
  font-family: 'Pacifico', cursive;
`

export const Attribution = styled.h5`
  font-family: 'Roboto Mono', monospace;
  a {
    color: #ffffff;
  }
`
export const Box = styled.div`
  height: 100%;
  width: 16%;
  display: flex;
  justify-content: center;
`

export const ColorName = styled.h1`
  align-self: flex-end;
  color: ${props => (props.clicked ? '#000000' : '#444444')};
  font-family: 'Roboto Mono', monospace;
`