import styled from 'styled-components'

const StyledItemContainer = styled.ul`
  margin-top: 96px;
  display: flex;
  flex-direction: column;
  gap: 42px;
`

const StyledItem = styled.li`
  max-width: 520px;
  padding: 24px 36px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.75);
  box-shadow: 9px 10px 0 0 rgba(71, 52, 56, 0.75);
  font-weight: 700;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: var(--SecondDarkL);
  cursor: grab;

  &:nth-child(even) {
    margin-left: 60px;
  }

  span {
    font-size: 24px;
  }
`

// TODO create the dragging style

function Todos() {
  return (
    <StyledItemContainer>
      <StyledItem>會員系統（登入、註冊、管理）</StyledItem>
      <StyledItem>應徵者的線上履歷編輯器</StyledItem>
      <StyledItem>
        前台職缺列表
        <br />
        <span>（缺詳細內容、點選可發送應徵意願）</span>
      </StyledItem>
      <StyledItem>
        後台職缺管理功能
        <br />
        <span>（資訊上架、下架、顯示應徵者資料）</span>
      </StyledItem>
    </StyledItemContainer>
  )
}

export default Todos
