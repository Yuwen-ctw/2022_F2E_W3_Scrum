import styled from 'styled-components'
import DropContainerTitle from '../../shareStyle/DropContainTitle'
import DropContainer from '../../shareStyle/DropContainer'
import Dropbox from '../../shareStyle/Dropbox'
import DragItem from '../../shareStyle/DragItem'
import { whiteBox } from '../../../../../assest/images'

const StyledContainer = styled.div`
  margin-top: 36px;
`
const StyledTitle = styled(DropContainerTitle)`
  color: var(--SecondDarkL);
  line-height: 78px;
`

const StyledDropContainer = styled(DropContainer)`
  height: 516px;
  justify-content: flex-start;
  gap: 32px;
  padding-top: 6px;
  width: 530px;
`

const StyledBlankContainer = styled.div`
  position: absolute;
  display: ${({ showBlank }) => (showBlank ? 'grid' : 'none')};
  width: 100%;
  grid-template-columns: 1fr;
  row-gap: 48px;
`

const StyledBlankbox = styled(Dropbox)`
  width: 520px;
  height: 84px;
`

const StyledBoxContainer = styled.div`
  position: relative;
  height: 96px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 24px);
  grid-template-rows: 28px 28px;
  column-gap: 8px;
  row-gap: 8px;
  &::after {
    position: absolute;
    bottom: 0px;
    content: '點數超過了唷~再試著調整一下!';
    font-weight: 700;
    color: ${({ score }) => (score > 20 ? '#e8433f' : 'transparent')};
  }
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
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
  width: 585px;
  background: rgba(128, 199, 79, 0.85);
  color: #ffffff;
`
export {
  StyledContainer,
  StyledTitle,
  StyledDropContainer,
  StyledBlankContainer,
  StyledBlankbox,
  StyledBoxContainer,
  StyledBox,
  StyledDragItem,
}
