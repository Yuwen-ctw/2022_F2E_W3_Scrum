import styled from 'styled-components'
const StyledContainer = styled.div`
  width: fit-content;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const StyledArrow = styled.img`
  height: 60px;
`

const StyledHint = styled.h3`
  padding: 9px 20px;
  background: rgba(255, 255, 255, 0.25);
  border: 3px solid #ffffff;
  border-radius: 12px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: #ffffff;
`
export { StyledContainer, StyledArrow, StyledHint }
