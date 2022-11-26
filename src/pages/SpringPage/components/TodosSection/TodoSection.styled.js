import styled from 'styled-components'

const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
`
const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export { StyledBG, StyledContainer }
