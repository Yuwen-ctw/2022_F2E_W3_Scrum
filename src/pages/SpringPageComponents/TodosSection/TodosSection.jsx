import styled from 'styled-components'
import TaskIntro from './TaskIntro'
import ProductBacklog from './ProductBacklog'
import Todos from './Todos'
import { todos_bg } from '../../../assest/images'
import { useEffect } from 'react'
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

function TodosSection({ onAchieve }) {
  // TODO handle Achieve state
  // disable the forward button first
  useEffect(() => onAchieve(false), [])

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
