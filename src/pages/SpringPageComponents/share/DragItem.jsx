import styled from 'styled-components'

const DragItem = styled.li`
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

  span {
    font-size: 24px;
  }
`
export default DragItem
