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
  function handleForwardButtonClick() {
    setStep(step + 1)
  }
  function handleBackwardButtonClick() {
    setStep(step - 1)
  }

  return (
    <Layout
      step={step}
      onClickNext={handleForwardButtonClick}
      onClickBack={handleBackwardButtonClick}
    >
      <IntroduceSection />
      {false && <TodosSection />}
      {false && <PlaningSection />}
      {false && <FlowSection />}
      {false && <ConfluenceSection />}
    </Layout>
  )
}

export default SpringPage
