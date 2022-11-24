import styled from 'styled-components'
import TaskIntro from './TaskIntro'
import ProductBacklog from './ProductBacklog'
import Todos from './Todos'
import { todos_bg } from '../../../assest/images'

const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
`
const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

function TodosSection() {
  // TODO handle Achieve state
  return (
    <>
      <TaskIntro />
      <StyledContainer>
        <Todos />
        <ProductBacklog />
      </StyledContainer>
      <StyledBG src={todos_bg} alt="beach" />
    </>
  )
}
export default TodosSection
