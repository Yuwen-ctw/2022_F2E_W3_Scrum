import { StyledContainer, StyledBG } from './PlaningSection.styled'
import { PlaningModal, ProductBacklog, SpringBacklog } from './components'
import { planing_bg } from '../../../../assest/images'
import { useEffect, useState, useContext } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import TodosContext from '../../data/TodosContext'

function PlaningSection({ onAchieve }) {
  const todosContext = useContext(TodosContext)
  const [items, setItems] = useState({
    productBacklog: [...todosContext],
    springBacklog: [],
  })
  const [score, setScore] = useState(0)
  // disable the forward button first
  useEffect(() => onAchieve(false), [])

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
      (accr, curr) => (accr += curr.score),
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
