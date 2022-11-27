import styled from 'styled-components'
import Dialog from '../../shareStyle/Dailog'

const StyledContainer = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto;
  gap: 12px 78px;
`

const StyledDialog = styled(Dialog)`
  padding: 15px 43px 15px 19px;
  width: 100%;
  max-width: 1074px;
  p {
    margin-top: 0px;
    ~ p {
      margin-top: 6px;
    }
  }
`
const StyledDialog__big = styled(StyledDialog)`
  position: relative;
  grid-column: 2 / 3;
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
export {
  StyledContainer,
  StyledDialog,
  StyledDialog__big,
  StyledAvatar,
  StyledRoleName,
}
