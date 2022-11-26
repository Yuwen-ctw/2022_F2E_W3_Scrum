import styled from 'styled-components'
import { endpage_bg } from '../../assest/images'

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
export { StyledContainer, StyledTitle, StyledDescription, StyledFooter }
