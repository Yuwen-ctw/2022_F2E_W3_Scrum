import styled from 'styled-components'

const StyledDetail = styled.div`
  padding: 36px 60px;
  margin: 40px auto 0;
  width: 1074px;
  height: 336px;
  left: 183px;
  top: 559px;
  background: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  font-weight: 700;
  font-size: 32px;
  line-height: 48px;
  color: var(--SecondDarkL);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  li {
    padding-left: 24px;
    list-style: circle;
    list-style-type: disc;
    list-style-position: inside;
  }
  p,
  p img {
    vertical-align: center;
  }
`
export { StyledDetail }
