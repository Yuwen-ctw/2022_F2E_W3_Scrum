import styled from 'styled-components'
import Dialog from '../../shareStyle/Dailog'

const StyledContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 78px;
`

const StyledDialog = styled(Dialog)`
  padding: 15px 19px;
  width: 100%;
  max-width: 1074px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  p {
    margin-top: 0px;
  }
  span {
    display: block;
    font-size: 32px;
    font-weight: 700;
    line-height: 48px;
    color: #e8433f;
  }
`
const StyledAvatar = styled.img`
  width: 100px;
`

const StyledRoleName = styled.p`
  position: absolute;
  bottom: 0px;
  translate: 0 100%;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
`
export { StyledContainer, StyledDialog, StyledAvatar, StyledRoleName }
