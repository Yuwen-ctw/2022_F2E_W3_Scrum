import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import { ButtonBackward, ButtonForward } from './component/Button'
import ProgressBar from './component/ProgressBar'
import styled from 'styled-components'
import { introBG } from '../assest/images'

const StyledMain = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0 60px;
  background-image: url('${introBG}');
  background-position: bottom;
  background-repeat: no-repeat;
  // content layout
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const StyledContent = styled.section`
  flex-grow: 1;
`

const StyledStepController = styled.div`
  width: 100%;
  height: 108px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
function Layout() {
  const [isComplete, setIscomplete] = useState(false)
  function handleAchieveState() {
    setIscomplete(true)
  }
  return (
    <StyledMain>
      <ProgressBar step={1} />
      <StyledContent>
        <Outlet onDragEnd={handleAchieveState} />
      </StyledContent>
      <StyledStepController>
        <ButtonBackward />
        <ButtonForward enable={isComplete} />
      </StyledStepController>
    </StyledMain>
  )
}
export default Layout
