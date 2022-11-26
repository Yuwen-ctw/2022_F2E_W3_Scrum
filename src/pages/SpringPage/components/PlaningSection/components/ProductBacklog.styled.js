import styled from 'styled-components'
import DropContainerTitle from '../../shareStyle/DropContainTitle'
import DropContainer from '../../shareStyle/DropContainer'
import DragItem from '../../shareStyle/DragItem'
import { whiteBox } from '../../../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 36px;
`
const StyledTitle = styled(DropContainerTitle)`
  color: var(--SecondDarkL);
`

const StyledDropContainer = styled(DropContainer)`
  margin-top: 96px;
  gap: 32px;
  height: 550px;
  width: 534px;
`

const StyledBox = styled.div`
  padding-left: 32px;
  height: 36px;
  background-image: url('${whiteBox}');
  background-position: left center;
  background-repeat: no-repeat;
  text-align: end;
`

const StyledDragItem = styled(DragItem)`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  position: relative;
  width: 585px;
  background: rgba(128, 199, 79, 0.85);
  color: #ffffff;
`
export {
  StyledContainer,
  StyledTitle,
  StyledDropContainer,
  StyledBox,
  StyledDragItem,
}
