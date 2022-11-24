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
      step={2}
      onClickNext={handleForwardButtonClick}
      onClickBack={handleBackwardButtonClick}
    >
      {false && <IntroduceSection />}
      <TodosSection />
      {false && <PlaningSection />}
      {false && <FlowSection />}
      {false && <ConfluenceSection />}
    </Layout>
  )
}

export default SpringPage
