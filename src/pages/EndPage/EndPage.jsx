import {
  StyledContainer,
  StyledTitle,
  StyledDescription,
  StyledFooter,
} from './EndPage.styled'
import ProgressBar from '../SpringPage/components/Layout/ProgressBar'

function EndPage() {
  return (
    <StyledContainer>
      <ProgressBar step={7} />
      <StyledTitle>Congratulations!</StyledTitle>
      <StyledDescription>
        恭喜你完成Scrum新手村!
        <br />
        相信在未來的道路上Scrum會成為你最好的夥伴!
      </StyledDescription>
      <StyledFooter>
        Design by 邱仲德 / Character attribute by Vecteezy / Code by YuwenChen
      </StyledFooter>
    </StyledContainer>
  )
}
export default EndPage
