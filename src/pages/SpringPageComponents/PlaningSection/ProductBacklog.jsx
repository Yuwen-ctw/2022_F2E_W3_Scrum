import styled from 'styled-components'
import DropContainerTitle from '../share/DropContainTitle'
import DropContainer from '../share/DropContainer'
import DragItem from '../share/DragItem'
import { whiteBox } from '../../../assest/images'
const StyledContainer = styled.div`
  margin-top: 36px;
`
const StyledTitle = styled(DropContainerTitle)`
  color: var(--SecondDarkL);
`

const StyledDropContainer = styled(DropContainer)`
  margin-top: 96px;
  gap: 32px;
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
function ProductBacklog() {
  return (
    <StyledContainer>
      <StyledTitle>
        產品待辦清單<span>Product Backlog</span>
      </StyledTitle>
      <StyledDropContainer>
        <StyledDragItem_Modify score={5}>
          後台職缺管理功能
          <br />
          <span>(資訊上架、下架、顯示應徵者資料)</span>
        </StyledDragItem_Modify>
        <StyledDragItem_Modify score={5}>
          前台職缺列表
          <br />
          <span>(缺詳細內容、點選可發送應徵意願)</span>
        </StyledDragItem_Modify>
        <StyledDragItem_Modify score={8}>
          會員系統(登入、註冊、管理)
        </StyledDragItem_Modify>
        <StyledDragItem_Modify score={13}>
          應徵者的線上履歷編輯器
        </StyledDragItem_Modify>
      </StyledDropContainer>
    </StyledContainer>
  )
}

export default ProductBacklog

function StyledDragItem_Modify({ score, children }) {
  return (
    <StyledDragItem>
      <div style={{ width: 'fit-content' }}>{children}</div>
      <StyledBox>x{score}</StyledBox>
    </StyledDragItem>
  )
}
