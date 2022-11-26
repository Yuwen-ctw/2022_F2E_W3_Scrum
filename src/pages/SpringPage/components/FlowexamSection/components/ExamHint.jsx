import { StyledContainer, StyledArrow, StyledHint } from './ExamHint.styled'
import { flowexam_subArrowBg } from '../../../../../assest/images'

function ExamHint() {
  return (
    <StyledContainer>
      <StyledHint>產品待辦清單</StyledHint>
      <StyledArrow src={flowexam_subArrowBg} alt="arrow" />
      <StyledHint>短衝規劃</StyledHint>
      <StyledArrow src={flowexam_subArrowBg} alt="arrow" />
      <StyledHint>短衝待辦清單</StyledHint>
    </StyledContainer>
  )
}

export default ExamHint
