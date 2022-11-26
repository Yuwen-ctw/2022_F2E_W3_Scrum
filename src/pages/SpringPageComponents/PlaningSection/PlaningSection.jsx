import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import PlaningModal from './PlaningModal'
import ProductBacklog from './ProductBacklog'
import SpringBacklog from './SpringBacklog'
import { planing_bg } from '../../../assest/images'

const StyledContainer = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledBG = styled.img`
  position: absolute;
  width: calc(100% + 120px);
  left: -60px;
  bottom: 0px;
  background: linear-gradient(
    to top,
    #80c74f 0px,
    #80c74f 72px,
    transparent 72px,
    transparent 100%
  );
`

function PlaningSection({ onAchieve }) {
  // disable the forward button first
  useEffect(() => onAchieve(false), [])

  const [items, setItems] = useState({
    productBacklog: [
      { item: <DragContent_login />, score: 8 },
      { item: <DragContent_editor />, score: 13 },
      { item: <DragContent_frontend />, score: 5 },
      { item: <DragContent_backend />, score: 5 },
    ],
    springBacklog: [],
  })
  const [score, setScore] = useState(0)

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
    const nextScore = items.springBacklog.reduce(
      (accr, prev) => (accr += prev.score),
      0
    )
    // check if item >= 2 and score <= 20
    if (nextDrags.springBacklog.length >= 2 && nextScore <= 20) {
      onAchieve(true)
    } else {
      onAchieve(false)
    }
    setScore(nextScore)
  }

  return (
    <>
      <StyledContainer>
        <DragDropContext onDragEnd={handleDragEnd}>
          <ProductBacklog dragItems={items.productBacklog} />
          <SpringBacklog dragItems={items.springBacklog} score={score} />
        </DragDropContext>
      </StyledContainer>
      <StyledBG src={planing_bg} alt="background" />
      <PlaningModal />
    </>
  )
}
export default PlaningSection

function DragContent_login() {
  return <>會員系統(登入、註冊、管理)</>
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
