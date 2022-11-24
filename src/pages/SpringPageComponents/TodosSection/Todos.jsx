import styled from 'styled-components'
import DropContainer from '../share/DropContainer'
import DragItem from '../share/DragItem'

const StyledDropContainer = styled(DropContainer)`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 42px;
`

const StyledDragItem = styled(DragItem)`
  max-width: 520px;

  &:nth-child(even) {
    margin-left: 60px;
  }
`

// TODO create the dragging style

function Todos() {
  return (
    <StyledDropContainer>
      <StyledDragItem>會員系統（登入、註冊、管理）</StyledDragItem>
      <StyledDragItem>應徵者的線上履歷編輯器</StyledDragItem>
      <StyledDragItem>
        前台職缺列表
        <br />
        <span>（缺詳細內容、點選可發送應徵意願）</span>
      </StyledDragItem>
      <StyledDragItem>
        後台職缺管理功能
        <br />
        <span>（資訊上架、下架、顯示應徵者資料）</span>
      </StyledDragItem>
    </StyledDropContainer>
  )
}

export default Todos
