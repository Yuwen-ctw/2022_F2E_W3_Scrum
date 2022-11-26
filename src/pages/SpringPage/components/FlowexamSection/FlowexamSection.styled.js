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
    var(--SecondDarkT) 0px,
    var(--SecondDarkT) 72px,
    transparent 72px,
    transparent 100%
  );
`
const StyledArrowBG = styled.img`
  width: 100%;
  position: absolute;
  bottom: 72px;
`
const StyledSpring = styled.h1`
  position: absolute;
  top: 500px;
  left: 369px;
  font-weight: 700;
  font-size: 60px;
  line-height: 90px;
  color: #ffffff;
`
export { StyledContainer, StyledBG, StyledArrowBG, StyledSpring }
