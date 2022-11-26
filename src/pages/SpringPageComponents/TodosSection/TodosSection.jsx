import styled from 'styled-components'
import { DragDropContext } from 'react-beautiful-dnd'
import TaskIntro from './TaskIntro'
import ProductBacklog from './ProductBacklog'
import Todos from './Todos'
import { todos_bg } from '../../../assest/images'
import { useEffect, useState } from 'react'
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
  // disable the forward button first
  useEffect(() => onAchieve(false), [])

  const [items, setItems] = useState({
    todos: [
      { item: <DragContent_login /> },
      { item: <DragContent_editor /> },
      { item: <DragContent_frontend /> },
      { item: <DragContent_backend /> },
    ],
    backlog: [],
  })

  function handleDragEnd(e) {
    // get information
    const { source, destination } = e
    if (!destination) return
    // copy array
    const nextDrags = { ...items }
    // remove the drag item from source
    const [moveItem] = nextDrags[source.droppableId].splice(source.index, 1)
    // add the drag item to destination
    nextDrags[destination.droppableId].splice(destination.index, 0, moveItem)
    // update state
    setItems(nextDrags)
    // check achieve state
    if (nextDrags.backlog.length === 4) onAchieve(true)
    else onAchieve(false)
  }

  return (
    <>
      <TaskIntro />
      <StyledContainer>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Todos dragItems={items.todos} />
          <ProductBacklog dropboxs={items.backlog} />
        </DragDropContext>
      </StyledContainer>
      <StyledBG src={todos_bg} alt="beach" />
    </>
  )
}
export default TodosSection

function DragContent_login() {
  return <>會員系統（登入、註冊、管理）</>
}

function DragContent_editor() {
  return <>應徵者的線上履歷編輯器</>
}
function DragContent_frontend() {
  return (
    <>
      前台職缺列表
      <br />
      <span>（缺詳細內容、點選可發送應徵意願）</span>
    </>
  )
}

function DragContent_backend() {
  return (
    <>
      後台職缺管理功能
      <br />
      <span>（資訊上架、下架、顯示應徵者資料）</span>
    </>
  )
}
