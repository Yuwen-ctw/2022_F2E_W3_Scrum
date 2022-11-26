import styled from 'styled-components'
const StyledContainer = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const StyledTile = styled.label`
  display: block;
  justify-self: center;
  width: fit-content;
  position: relative;
  font-weight: 700;
  font-size: 36px;
  line-height: 54px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  p {
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 1px;
  }
`

const StyledInput = styled.input`
  display: none;
  & + img {
    display: none;
  }
  &:checked + img {
    display: block;
  }
`

const StyledIcon = styled.img`
  position: absolute;
  left: -8px;
  translate: -100% -8px;
`
export { StyledContainer, StyledTile, StyledInput, StyledIcon }
