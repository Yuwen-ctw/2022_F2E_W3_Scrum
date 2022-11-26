import { useRef } from 'react'
import {
  StyledTestContainer,
  StyledTitle,
  StyledInputContainer,
  StyledInput,
  StyledLabel,
} from './RetroTest.styled'

function RetroTest({ onChange }) {
  const goodPointRef = useRef(null)
  const reviewPointRef = useRef(null)
  function checkAnswer() {
    if (
      goodPointRef.current.checked === true &&
      reviewPointRef.current.checked === true
    ) {
      onChange(true)
    } else {
      onChange(false)
    }
  }
  return (
    <StyledTestContainer>
      <div>
        <StyledTitle>做得好的地方</StyledTitle>
        <StyledInputContainer onChange={checkAnswer}>
          <StyledInput
            type="radio"
            name="good-point"
            value="incorrect"
            id="good-point-incorrect"
          />
          <StyledLabel htmlFor="good-point-incorrect">
            這次我幫了很多人救火耶。
          </StyledLabel>
          <StyledInput
            type="radio"
            name="good-point"
            value="correct"
            id="good-point-correct"
            ref={goodPointRef}
          />
          <StyledLabel htmlFor="good-point-correct">
            大家在開發上都會互相幫助，讓任務準時在時間內完成。
          </StyledLabel>
        </StyledInputContainer>
      </div>
      <div>
        <StyledTitle>有哪些可以做得更好</StyledTitle>
        <StyledInputContainer onChange={checkAnswer}>
          <StyledInput
            type="radio"
            name="reflect-point"
            value="correct"
            id="reflect-point-correct"
            ref={reviewPointRef}
          />
          <StyledLabel htmlFor="reflect-point-correct">
            可以記錄這次的開發時間，讓預估團隊點數可以更精準。
          </StyledLabel>
          <StyledInput
            type="radio"
            name="reflect-point"
            value="incorrect"
            id="reflect-point-incorrect"
          />
          <StyledLabel htmlFor="reflect-point-incorrect">
            開發時間預估不準確，請後端下次改進，避免 delay 到我。
          </StyledLabel>
        </StyledInputContainer>
      </div>
    </StyledTestContainer>
  )
}

export default RetroTest
