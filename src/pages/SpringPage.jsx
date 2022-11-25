import {
  IntroduceSection,
  TodosSection,
  PlaningSection,
  FlowSection,
  FlowexamSection,
  ConfluenceSection,
} from './SpringPageComponents/index'
import Layout from './SpringPageComponents/Layout/Layout'
import { useState } from 'react'

// TODO achieve state
function SpringPage() {
  const [step, setStep] = useState(1)
  const [isComplete, setIscomplete] = useState(true)

  function handleForwardButtonClick() {
    setStep(step + 1)
  }
  function handleBackwardButtonClick() {
    setStep(step - 1)
  }
  function handleAchieveState() {
    setIscomplete(true)
  }

  return (
    <Layout
      step={step}
      onClickNext={handleForwardButtonClick}
      onClickBack={handleBackwardButtonClick}
      enable={true}
    >
      {step === 1 && <IntroduceSection />}
      {step === 2 && <TodosSection onAchieve={handleAchieveState} />}
      {step === 3 && <PlaningSection />}
      {step === 4 && <FlowSection />}
      {step === 5 && <FlowexamSection />}
      {false && <ConfluenceSection />}
    </Layout>
  )
}

export default SpringPage
