import {
  IntroduceSection,
  TodosSection,
  PlaningSection,
  FlowSection,
  FlowexamSection,
  RetroSection,
} from './components/index'
import Layout from './components/Layout/Layout'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SpringPage() {
  // record the step state
  const [step, setStep] = useState(1)
  // record the state of current page
  const [isComplete, setIscomplete] = useState(true)
  const navigate = useNavigate()

  function handleForwardButtonClick() {
    if (step === 6) {
      navigate('/2022_F2E_W3_Scrum/end')
    }
    setStep(step + 1)
  }
  function handleBackwardButtonClick() {
    setStep(step - 1)
  }
  function handleChangeAchieveState(boolean) {
    setIscomplete(boolean)
  }
  return (
    <Layout
      step={step}
      onClickNext={handleForwardButtonClick}
      onClickBack={handleBackwardButtonClick}
      enable={isComplete}
    >
      {step === 1 && <IntroduceSection />}
      {step === 2 && <TodosSection onAchieve={handleChangeAchieveState} />}
      {step === 3 && <PlaningSection onAchieve={handleChangeAchieveState} />}
      {step === 4 && <FlowSection />}
      {step === 5 && <FlowexamSection onAchieve={handleChangeAchieveState} />}
      {step === 6 && <RetroSection onAchieve={handleChangeAchieveState} />}
    </Layout>
  )
}

export default SpringPage
