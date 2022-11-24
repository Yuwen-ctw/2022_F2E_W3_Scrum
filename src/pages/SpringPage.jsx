import {
  IntroduceSection,
  TodosSection,
  PlaningSection,
  FlowSection,
  ConfluenceSection,
} from './SpringPageComponents/index'
import Layout from './SpringPageComponents/Layout/Layout'
import { useState } from 'react'

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
      enable={step === 2 ? false : true}
    >
      {step === 1 && <IntroduceSection />}
      {step === 2 && <TodosSection onAchieve={handleAchieveState} />}
      {false && <PlaningSection />}
      {false && <FlowSection />}
      {false && <ConfluenceSection />}
    </Layout>
  )
}

export default SpringPage
