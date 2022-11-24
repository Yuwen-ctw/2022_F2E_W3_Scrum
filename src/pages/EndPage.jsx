import styled from 'styled-components'
import { endpage_bg } from '../assest/images'
import ProgressBar from './SpringPageComponents/Layout/component/ProgressBar'

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  max-height: 1024px;
  padding: 0 60px;
  background-image: url('${endpage_bg}');
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
`

const StyledTitle = styled.h1`
  margin-top: 72px;
  font-weight: 700;
  font-size: 120px;
  line-height: 178px;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--SecondDarkL);
`

const StyledDescription = styled.h3`
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  letter-spacing: 0.02em;
  color: var(--SecondDarkL);
`

const StyledFooter = styled.footer`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 48px;
  background: var(--SecondDarkL);
  font-weight: 700;
  font-size: 16px;
  line-height: 48px;
  letter-spacing: 0.02em;
  color: #ffffff;
  text-align: center;
`

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
