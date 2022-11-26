import styled from 'styled-components'

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`

const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    #80c74f 0px,
    #80c74f 72px,
    transparent 72px,
    transparent 100%
  );
`
const StyledFireBG = styled.img`
  position: absolute;
  bottom: 0px;
  right: 22.5%;
  width: 256px;
`
export { StyledContainer, StyledBG, StyledFireBG }
